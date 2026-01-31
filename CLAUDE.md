# Project Instructions for Claude

This is a research project analyzing resistance movements. The goal is comprehensive, evenhanded analysis of what works, what doesn't, and why.

## Project Structure

- `resistance_framework.md` - Core analytical framework
- `research_questions.md` - 100 research questions organized by theme
- `essay_series_outline.md` - Outline for 10-essay series
- `case_studies_database.md` - Methodology and case study list
- `project_execution_plan.md` - Development roadmap
- `case_studies/` - Individual case study files
  - `_templates/case_study.md` - Template for new case studies
  - `index.md` - Map of Content for all case studies

## Creating Case Studies

When creating a new case study:

1. **Use the template**: Copy `case_studies/_templates/case_study.md` as the starting point
2. **File location**: Place new case studies directly in `case_studies/` (not in subfolders)
3. **File naming**: Use descriptive names with spaces (e.g., `US Civil Rights Movement.md`, `Polish Solidarity.md`)
4. **Fill frontmatter first**: Complete the YAML properties before writing content
5. **Update the index**: Add the new case to relevant sections in `case_studies/index.md`

### Required YAML Properties

Every case study must have these frontmatter properties filled in:

```yaml
title: "Movement Name"
location: Country/Region
time_period_start: YYYY
time_period_end: YYYY  # or leave empty if ongoing
outcome: success | partial_success | failure | ongoing
type: nonviolent | armed | mixed
status: draft | in_progress | complete
region: africa | asia | europe | latin_america | middle_east | north_america | oceania
```

### Property Value Reference

**outcome**: `success` | `partial_success` | `failure` | `ongoing`
**type**: `nonviolent` | `armed` | `mixed`
**status**: `draft` | `in_progress` | `complete`
**regime_type**: `democracy` | `hybrid` | `authoritarian` | `colonial` | `totalitarian`
**state_capacity**: `high` | `medium` | `low`
**repression_level**: `none` | `low` | `medium` | `high` | `extreme`
**elite_cohesion**: `unified` | `fractured`
**region**: `africa` | `asia` | `europe` | `latin_america` | `middle_east` | `north_america` | `oceania`

**tactics** (array): `mass_demonstration` | `strike` | `boycott` | `civil_disobedience` | `occupation` | `guerrilla` | `terrorism` | `electoral` | `legal` | `underground`

**themes** (array): `labor` | `anticolonial` | `civil_rights` | `democracy` | `revolution` | `independence` | `reform` | `climate` | `racial_justice`

## Wikilinks

Use Obsidian-style wikilinks for cross-references:

- Link to other case studies: `[[US Civil Rights Movement]]`
- Link to framework docs: `[[resistance_framework]]`, `[[research_questions]]`, `[[essay_series_outline]]`
- Link to specific sections: `[[resistance_framework#Strategic Principles]]`

## Writing Style

- **Evenhanded**: Analyze without ideological commitment to particular tactics
- **Honest**: Acknowledge difficulty, failure, and moral complexity
- **Evidence-based**: Ground claims in sources, note uncertainty
- **Comparative**: Connect cases to framework concepts and other cases
- **Concise**: Prefer clarity over length

## Research Priorities

When selecting which case studies to develop, follow the priority tiers in `project_execution_plan.md`:

**Tier 1** (develop first):
1. US Civil Rights Movement
2. Polish Solidarity
3. Tiananmen Square
4. South African Anti-Apartheid
5. Hong Kong Protests
6. Syrian Uprising

## Obsidian Compatibility

This project is designed for use with Obsidian and publishing via Quartz:

- Use standard YAML frontmatter (compatible with Obsidian Bases)
- Use wikilinks `[[page]]` not markdown links `[page](page.md)`
- No Dataview queries (not compatible with Quartz)
- Templates use `{{title}}` and `{{date}}` placeholders for Obsidian Templater
