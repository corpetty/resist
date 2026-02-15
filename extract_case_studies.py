#!/usr/bin/env python3
"""
Extract case study data from markdown files and create movements.json
"""

import os
import json
import re
from pathlib import Path

def extract_frontmatter(content):
    """Extract YAML frontmatter from markdown content"""
    if content.startswith('---'):
        end_pos = content.find('---', 3)
        if end_pos != -1:
            frontmatter_text = content[3:end_pos].strip()
            
            # Simple YAML parser for our specific format
            data = {}
            current_key = None
            
            for line in frontmatter_text.split('\n'):
                line = line.strip()
                if not line or line.startswith('#'):
                    continue
                    
                if ':' in line and not line.startswith(' '):
                    # New key-value pair
                    parts = line.split(':', 1)
                    key = parts[0].strip()
                    value = parts[1].strip() if len(parts) > 1 else ''
                    
                    # Parse different value types
                    if value.startswith('"') and value.endswith('"'):
                        value = value[1:-1]  # Remove quotes
                    elif value.startswith('[') and value.endswith(']'):
                        # Simple array parsing
                        value = [item.strip().strip('"') for item in value[1:-1].split(',')]
                    elif value.isdigit():
                        value = int(value)
                    elif value.lower() in ['true', 'false']:
                        value = value.lower() == 'true'
                    elif value == 'null' or value == '':
                        value = None
                        
                    data[key] = value
                    current_key = key
                    
            return data
    return {}

def map_region(region_tag):
    """Map region tags to full names"""
    region_mapping = {
        'north_america': 'Americas',
        'latin_america': 'Americas', 
        'africa': 'Africa',
        'asia': 'Asia',
        'europe': 'Europe',
        'middle_east': 'Middle East',
        'oceania': 'Oceania'
    }
    return region_mapping.get(region_tag, region_tag.replace('_', ' ').title())

def map_outcome(outcome):
    """Map outcome values"""
    mapping = {
        'success': 'success',
        'partial_success': 'partial',
        'failure': 'failure',
        'ongoing': 'partial'  # treat ongoing as partial for now
    }
    return mapping.get(outcome, outcome)

def map_method(method_type):
    """Map movement type to method"""
    mapping = {
        'nonviolent': 'nonviolent',
        'armed': 'violent', 
        'mixed': 'mixed'
    }
    return mapping.get(method_type, method_type)

def map_state_response(repression_level):
    """Map repression level to state response"""
    mapping = {
        'high': 'brutal',
        'medium': 'moderate',
        'low': 'restrained'
    }
    return mapping.get(repression_level, repression_level)

def extract_case_study_data(file_path):
    """Extract structured data from a single case study file"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    frontmatter = extract_frontmatter(content)
    if not frontmatter:
        print(f"Warning: No frontmatter found in {file_path}")
        return None
    
    # Extract required fields
    try:
        # Parse years, handling string dates
        year_start = frontmatter.get('time_period_start')
        year_end = frontmatter.get('time_period_end')
        
        if isinstance(year_start, str) and '-' in year_start:
            year_start = int(year_start.split('-')[0])
        elif year_start:
            year_start = int(year_start)
            
        if isinstance(year_end, str):
            if year_end.lower() == 'ongoing':
                year_end = None
            elif '-' in year_end:
                year_end = int(year_end.split('-')[0])
            else:
                year_end = int(year_end)
        elif year_end:
            year_end = int(year_end)
        
        data = {
            'name': frontmatter.get('title', ''),
            'country': frontmatter.get('location', ''),
            'region': map_region(frontmatter.get('region', '')),
            'yearStart': year_start,
            'yearEnd': year_end,
            'outcome': map_outcome(frontmatter.get('outcome', '')),
            'primaryMethod': map_method(frontmatter.get('type', '')),
            'stateResponse': map_state_response(frontmatter.get('repression_level', '')),
            'slug': Path(file_path).stem.replace(' ', '-').lower()
        }
        
        # Add radar chart dimensions (estimate based on case study data)
        # These would ideally be researched more carefully, but for now I'll estimate
        data['radarData'] = estimate_radar_scores(frontmatter, content)
        
        return data
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return None

def estimate_radar_scores(frontmatter, content):
    """Estimate radar chart scores based on available data"""
    # This is a simplified estimation - in practice these would be researched more carefully
    
    # Base scores
    scores = {
        'organizationLevel': 3,
        'popularSupport': 3, 
        'internationalSupport': 3,
        'stateRepression': 3,
        'violenceLevel': 1,  # default nonviolent
        'duration': 3
    }
    
    # Adjust based on frontmatter data
    if frontmatter.get('repression_level') == 'high':
        scores['stateRepression'] = 5
    elif frontmatter.get('repression_level') == 'low':
        scores['stateRepression'] = 2
        
    if frontmatter.get('type') == 'armed':
        scores['violenceLevel'] = 4
    elif frontmatter.get('type') == 'mixed':
        scores['violenceLevel'] = 3
        
    # Estimate duration 
    start = frontmatter.get('time_period_start')
    end = frontmatter.get('time_period_end')
    if start and end:
        try:
            # Convert to int if string
            start_year = int(start) if isinstance(start, str) else start
            end_year = int(end) if isinstance(end, str) else end
            
            duration_years = end_year - start_year
            if duration_years < 2:
                scores['duration'] = 2
            elif duration_years > 10:
                scores['duration'] = 5
            else:
                scores['duration'] = min(5, max(1, duration_years // 2 + 2))
        except (ValueError, TypeError):
            pass  # Keep default score
    
    # Estimate participant numbers for organization level
    participants = frontmatter.get('estimated_participants', '')
    if 'million' in participants.lower():
        scores['organizationLevel'] = 5
        scores['popularSupport'] = 5
    elif 'thousand' in participants.lower():
        scores['organizationLevel'] = 3
        scores['popularSupport'] = 3
        
    return scores

def main():
    case_studies_dir = "/home/petty/resist/content/case_studies"
    output_file = "/home/petty/resist/content/data/movements.json"
    
    # Create data directory if it doesn't exist
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    
    movements = []
    
    # Process all markdown files except index.md
    for filename in os.listdir(case_studies_dir):
        if filename.endswith('.md') and filename != 'index.md':
            file_path = os.path.join(case_studies_dir, filename)
            print(f"Processing {filename}...")
            
            data = extract_case_study_data(file_path)
            if data:
                movements.append(data)
    
    # Sort by start year
    def get_year(movement):
        year = movement.get('yearStart', 0)
        if not year:
            return 0
        try:
            if isinstance(year, str):
                # Handle date formats like "2011-01"
                return int(year.split('-')[0])
            return int(year)
        except (ValueError, AttributeError):
            return 0
    
    movements.sort(key=get_year)
    
    # Write to JSON file
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(movements, f, indent=2, ensure_ascii=False)
    
    print(f"Extracted {len(movements)} movements to {output_file}")
    
    # Print summary
    print("\nSummary:")
    for movement in movements:
        print(f"- {movement['name']} ({movement['country']}, {movement['yearStart']}-{movement['yearEnd']}) - {movement['outcome']}")

if __name__ == "__main__":
    main()