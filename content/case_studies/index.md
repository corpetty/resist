---

title: Case Studies Index
description: Map of Content for resistance movement case studies
status: active
last_updated: 2026-01-29
---

This directory contains structured case studies of resistance movements, organized for comparative analysis. Each case study follows a standard template enabling pattern recognition across different contexts, tactics, and outcomes.

See [[case_studies_database|Case Studies Database]] for the methodology and analytical framework.

---

## Interactive Timeline

<div id="timeline-container">
  <div id="timeline" style="height: 400px; margin: 20px 0;"></div>
</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
(function() {
  // Avoid re-execution issues with Quartz SPA navigation
  if (window.timelineInitialized) return;
  window.timelineInitialized = true;

  // Load the movements data
  d3.json("../../data/movements.json").then(function(data) {
    
    // Set up dimensions
    const margin = {top: 20, right: 60, bottom: 40, left: 100};
    const width = Math.max(800, window.innerWidth * 0.8) - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    // Clear any existing timeline
    d3.select("#timeline").selectAll("*").remove();
    
    // Create SVG
    const svg = d3.select("#timeline")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);
    
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Color scale for outcomes
    const colorScale = d3.scaleOrdinal()
      .domain(['success', 'partial', 'failure'])
      .range(['var(--success, #22c55e)', 'var(--warning, #f59e0b)', 'var(--error, #ef4444)']);
    
    // Time scale
    const minYear = d3.min(data, d => d.yearStart) - 5;
    const maxYear = d3.max(data, d => d.yearEnd || new Date().getFullYear()) + 5;
    
    const xScale = d3.scaleLinear()
      .domain([minYear, maxYear])
      .range([0, width]);
    
    // Y position scale (one row per movement)
    const yScale = d3.scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, height])
      .padding(0.1);
    
    // Add x-axis
    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickFormat(d3.format("d")));
    
    // Add timeline bars
    const bars = g.selectAll(".timeline-bar")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "timeline-bar")
      .attr("transform", (d, i) => `translate(0,${yScale(i)})`);
    
    // Add background bars
    bars.append("rect")
      .attr("x", d => xScale(d.yearStart))
      .attr("width", d => xScale((d.yearEnd || new Date().getFullYear())) - xScale(d.yearStart))
      .attr("height", yScale.bandwidth())
      .attr("fill", d => colorScale(d.outcome))
      .attr("opacity", 0.7)
      .attr("stroke", "var(--gray)")
      .attr("stroke-width", 1);
    
    // Add movement labels
    bars.append("text")
      .attr("x", -5)
      .attr("y", yScale.bandwidth() / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .attr("fill", "var(--darkgray)")
      .style("font-size", "12px")
      .text(d => d.name.length > 20 ? d.name.substring(0, 20) + "..." : d.name);
    
    // Add duration labels on bars
    bars.append("text")
      .attr("x", d => xScale(d.yearStart) + (xScale((d.yearEnd || new Date().getFullYear())) - xScale(d.yearStart)) / 2)
      .attr("y", yScale.bandwidth() / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .attr("fill", "var(--light)")
      .style("font-size", "10px")
      .style("font-weight", "bold")
      .text(d => {
        const start = d.yearStart;
        const end = d.yearEnd || "ongoing";
        return start === end ? start.toString() : `${start}-${end}`;
      });
    
    // Tooltip setup
    const tooltip = d3.select("body").append("div")
      .attr("class", "timeline-tooltip")
      .style("position", "absolute")
      .style("padding", "10px")
      .style("background", "var(--light)")
      .style("border", "1px solid var(--gray)")
      .style("border-radius", "4px")
      .style("pointer-events", "none")
      .style("opacity", 0)
      .style("z-index", 1000);
    
    // Add hover effects
    bars.on("mouseover", function(event, d) {
      d3.select(this).select("rect").attr("opacity", 1);
      
      tooltip.transition()
        .duration(200)
        .style("opacity", .9);
      
      tooltip.html(`
        <strong>${d.name}</strong><br/>
        Country: ${d.country}<br/>
        Period: ${d.yearStart}${d.yearEnd ? `-${d.yearEnd}` : ' (ongoing)'}<br/>
        Outcome: ${d.outcome}<br/>
        Method: ${d.primaryMethod}<br/>
        State Response: ${d.stateResponse}
      `)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
      d3.select(this).select("rect").attr("opacity", 0.7);
      tooltip.transition()
        .duration(500)
        .style("opacity", 0);
    });
    
    // Add legend
    const legend = svg.append("g")
      .attr("transform", `translate(${width + margin.left + 10}, ${margin.top})`);
    
    const legendData = [
      {outcome: 'success', label: 'Success'},
      {outcome: 'partial', label: 'Partial'},
      {outcome: 'failure', label: 'Failure'}
    ];
    
    const legendItems = legend.selectAll(".legend-item")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(0, ${i * 25})`);
    
    legendItems.append("rect")
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", d => colorScale(d.outcome));
    
    legendItems.append("text")
      .attr("x", 20)
      .attr("y", 12)
      .attr("fill", "var(--darkgray)")
      .style("font-size", "12px")
      .text(d => d.label);
      
  }).catch(function(error) {
    console.log("Error loading timeline data:", error);
    d3.select("#timeline").append("p").text("Error loading timeline data");
  });
  
})();
</script>

---

## Movement DNA Comparison

<div id="radar-container">
  <div style="margin-bottom: 20px;">
    <label for="movement-select">Select movements to compare (max 3):</label><br>
    <select id="movement-select" multiple style="width: 300px; height: 120px; margin-top: 5px;">
    </select>
    <button id="compare-btn" style="margin-left: 10px;">Compare</button>
  </div>
  <div id="radar-chart" style="height: 500px;"></div>
</div>

<script>
(function() {
  // Avoid re-execution issues with Quartz SPA navigation
  if (window.radarInitialized) return;
  window.radarInitialized = true;

  let movementsData = [];
  
  // Load movements data
  d3.json("../../data/movements.json").then(function(data) {
    movementsData = data;
    
    // Populate movement selector
    const select = d3.select("#movement-select");
    select.selectAll("option")
      .data(data.sort((a, b) => a.name.localeCompare(b.name)))
      .enter()
      .append("option")
      .attr("value", d => d.slug)
      .text(d => `${d.name} (${d.yearStart}-${d.yearEnd || 'ongoing'})`);
    
    // Set up comparison functionality
    d3.select("#compare-btn").on("click", compareMovements);
    
    // Initialize with a few interesting movements
    const defaultMovements = ['us-civil-rights-movement', 'polish-solidarity', 'tiananmen-square'];
    defaultMovements.forEach(slug => {
      const option = select.select(`option[value="${slug}"]`).node();
      if (option) option.selected = true;
    });
    
    compareMovements();
    
  });
  
  function compareMovements() {
    const selectedOptions = Array.from(document.querySelectorAll("#movement-select option:checked"));
    
    if (selectedOptions.length === 0) {
      d3.select("#radar-chart").html("<p>Please select at least one movement to compare.</p>");
      return;
    }
    
    if (selectedOptions.length > 3) {
      alert("Please select no more than 3 movements for comparison.");
      return;
    }
    
    const selectedSlugs = selectedOptions.map(opt => opt.value);
    const selectedMovements = movementsData.filter(m => selectedSlugs.includes(m.slug));
    
    drawRadarChart(selectedMovements);
  }
  
  function drawRadarChart(movements) {
    // Clear existing chart
    d3.select("#radar-chart").selectAll("*").remove();
    
    if (!movements || movements.length === 0) return;
    
    const dimensions = [
      {key: 'organizationLevel', label: 'Organization Level'},
      {key: 'popularSupport', label: 'Popular Support'},
      {key: 'internationalSupport', label: 'International Support'},
      {key: 'stateRepression', label: 'State Repression'},
      {key: 'violenceLevel', label: 'Violence Level'},
      {key: 'duration', label: 'Duration'}
    ];
    
    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2 - 60;
    
    const svg = d3.select("#radar-chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    
    const g = svg.append("g")
      .attr("transform", `translate(${width/2}, ${height/2})`);
    
    // Scales
    const angleScale = d3.scaleLinear()
      .domain([0, dimensions.length])
      .range([0, 2 * Math.PI]);
    
    const radiusScale = d3.scaleLinear()
      .domain([0, 5])
      .range([0, radius]);
    
    // Draw concentric circles
    const levels = [1, 2, 3, 4, 5];
    g.selectAll(".grid-circle")
      .data(levels)
      .enter()
      .append("circle")
      .attr("class", "grid-circle")
      .attr("r", d => radiusScale(d))
      .attr("fill", "none")
      .attr("stroke", "var(--lightgray)")
      .attr("stroke-width", 1);
    
    // Draw axis lines
    g.selectAll(".axis-line")
      .data(dimensions)
      .enter()
      .append("line")
      .attr("class", "axis-line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", (d, i) => radiusScale(5) * Math.cos(angleScale(i) - Math.PI / 2))
      .attr("y2", (d, i) => radiusScale(5) * Math.sin(angleScale(i) - Math.PI / 2))
      .attr("stroke", "var(--lightgray)")
      .attr("stroke-width", 1);
    
    // Add dimension labels
    g.selectAll(".axis-label")
      .data(dimensions)
      .enter()
      .append("text")
      .attr("class", "axis-label")
      .attr("x", (d, i) => (radiusScale(5) + 15) * Math.cos(angleScale(i) - Math.PI / 2))
      .attr("y", (d, i) => (radiusScale(5) + 15) * Math.sin(angleScale(i) - Math.PI / 2))
      .attr("dy", "0.35em")
      .attr("text-anchor", (d, i) => {
        const angle = angleScale(i);
        if (angle > Math.PI / 2 && angle < 3 * Math.PI / 2) return "end";
        return angle === Math.PI / 2 || angle === 3 * Math.PI / 2 ? "middle" : "start";
      })
      .attr("fill", "var(--darkgray)")
      .style("font-size", "12px")
      .style("font-weight", "bold")
      .text(d => d.label);
    
    // Color scale for movements
    const colorScale = d3.scaleOrdinal()
      .domain(movements.map(d => d.slug))
      .range(['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6']);
    
    // Draw movement paths
    movements.forEach(movement => {
      const pathData = dimensions.map((dim, i) => {
        const value = movement.radarData[dim.key] || 0;
        const angle = angleScale(i) - Math.PI / 2;
        const r = radiusScale(value);
        return [r * Math.cos(angle), r * Math.sin(angle)];
      });
      
      // Close the path
      pathData.push(pathData[0]);
      
      const lineGenerator = d3.line()
        .x(d => d[0])
        .y(d => d[1])
        .curve(d3.curveLinearClosed);
      
      // Add filled area
      g.append("path")
        .datum(pathData)
        .attr("class", "radar-area")
        .attr("d", lineGenerator)
        .attr("fill", colorScale(movement.slug))
        .attr("fill-opacity", 0.1)
        .attr("stroke", colorScale(movement.slug))
        .attr("stroke-width", 2);
      
      // Add data points
      g.selectAll(`.radar-point-${movement.slug}`)
        .data(pathData.slice(0, -1))  // Remove duplicate last point
        .enter()
        .append("circle")
        .attr("class", `radar-point-${movement.slug}`)
        .attr("cx", d => d[0])
        .attr("cy", d => d[1])
        .attr("r", 4)
        .attr("fill", colorScale(movement.slug))
        .attr("stroke", "var(--light)")
        .attr("stroke-width", 2);
    });
    
    // Add legend
    const legend = svg.append("g")
      .attr("transform", "translate(20, 20)");
    
    const legendItems = legend.selectAll(".legend-item")
      .data(movements)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(0, ${i * 25})`);
    
    legendItems.append("rect")
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", d => colorScale(d.slug));
    
    legendItems.append("text")
      .attr("x", 20)
      .attr("y", 12)
      .attr("fill", "var(--darkgray)")
      .style("font-size", "12px")
      .text(d => d.name);
  }
  
})();
</script>

---

## By Outcome

### Successful Non-Violent Resistance

| Case | Location | Period | Status |
|------|----------|--------|--------|
| [[Indian Independence]] | India | 1920s-1947 | draft |
| [[US Civil Rights Movement]] | United States | 1954-1968 | draft ✓ |
| [[Polish Solidarity]] | Poland | 1980-1989 | draft ✓ |
| [[People Power Philippines]] | Philippines | 1986 | draft |
| [[South African Anti-Apartheid]] | South Africa | 1960s-1994 | draft ✓ |

### Failed Non-Violent Resistance

| Case | Location | Period | Status |
|------|----------|--------|--------|
| [[Tiananmen Square]] | China | 1989 | draft ✓ |
| [[Iranian Green Movement]] | Iran | 2009 | draft |
| [[Syrian Uprising]] | Syria | 2011- | draft ✓ |
| [[Occupy Wall Street]] | United States | 2011 | draft |
| [[Hong Kong Protests]] | Hong Kong | 2014, 2019-2020 | draft ✓ |

### Successful Armed Resistance

| Case | Location | Period | Status |
|------|----------|--------|--------|
| [[Haitian Revolution]] | Haiti | 1791-1804 | draft |
| [[Vietnamese Independence]] | Vietnam | 1945-1975 | draft |
| [[Algerian Independence]] | Algeria | 1954-1962 | draft |
| [[Cuban Revolution]] | Cuba | 1953-1959 | draft |

### Failed Armed Resistance

| Case | Location | Period | Status |
|------|----------|--------|--------|
| [[German Spartacist Uprising]] | Germany | 1919 | draft |

### Contemporary/Ongoing

| Case | Location | Period | Status |
|------|----------|--------|--------|
| [[Climate Activism]] | Global | 2018- | draft |
| [[Black Lives Matter]] | United States | 2013- | draft |
| [[Myanmar Anti-Coup Resistance]] | Myanmar | 2021- | draft |
| [[Sudan Democratic Transition]] | Sudan | 2018-2019 | draft |

### Labor Movements

| Case | Location | Period | Status |
|------|----------|--------|--------|
| [[ACT UP]] | United States | 1987-1996 | draft |
| [[Zapatistas]] | Mexico | 1994- | draft |

---

## By Region

### Africa
- [[South African Anti-Apartheid]]
- [[Algerian Independence]]
- [[Sudan Democratic Transition]]

### Asia
- [[Indian Independence]]
- [[Vietnamese Independence]]
- [[Tiananmen Square]]
- [[Hong Kong Protests]]
- [[Myanmar Anti-Coup Resistance]]
- [[People Power Philippines]]

### Europe
- [[Polish Solidarity]]
- [[German Spartacist Uprising]]

### Latin America
- [[Haitian Revolution]]
- [[Cuban Revolution]]
- [[Zapatistas]]

### Middle East
- [[Iranian Green Movement]]
- [[Syrian Uprising]]

### North America
- [[US Civil Rights Movement]]
- [[Occupy Wall Street]]
- [[Black Lives Matter]]
- [[ACT UP]]
- [[Climate Activism]]

---

## By Primary Tactic

### Mass Demonstration
- [[US Civil Rights Movement]]
- [[Tiananmen Square]]
- [[Hong Kong Protests]]
- [[Black Lives Matter]]

### Strike / Labor Action
- [[Polish Solidarity]]
- [[Indian Independence]]

### Boycott
- [[South African Anti-Apartheid]]
- [[US Civil Rights Movement]]

### Civil Disobedience
- [[Indian Independence]]
- [[Climate Activism]]
- [[ACT UP]]

### Guerrilla Warfare
- [[Vietnamese Independence]]
- [[Algerian Independence]]
- [[Cuban Revolution]]
- [[Zapatistas]]

### Armed Uprising
- [[Haitian Revolution]]
- [[German Spartacist Uprising]]

---

## By Theme

### Anticolonial
- [[Indian Independence]]
- [[Vietnamese Independence]]
- [[Algerian Independence]]
- [[Haitian Revolution]]

### Civil Rights / Racial Justice
- [[US Civil Rights Movement]]
- [[South African Anti-Apartheid]]
- [[Black Lives Matter]]

### Democracy / Political Reform
- [[Polish Solidarity]]
- [[Tiananmen Square]]
- [[Hong Kong Protests]]
- [[Iranian Green Movement]]
- [[Sudan Democratic Transition]]
- [[Myanmar Anti-Coup Resistance]]

### Revolution
- [[Cuban Revolution]]
- [[Haitian Revolution]]
- [[German Spartacist Uprising]]

### Economic Justice
- [[Occupy Wall Street]]
- [[Zapatistas]]

### Health / Social Issues
- [[ACT UP]]
- [[Climate Activism]]

---

## Research Priority Tiers

From [[project_execution_plan|Project Execution Plan]]:

### Tier 1 (Develop First)
1. [[US Civil Rights Movement]] - Well-documented, multiple tactics
2. [[Polish Solidarity]] - Successful under authoritarianism
3. [[Tiananmen Square]] - Failed despite mobilization
4. [[South African Anti-Apartheid]] - Multi-pronged strategy
5. [[Hong Kong Protests]] - Contemporary, digital tactics
6. [[Syrian Uprising]] - Non-violent to violent transition

### Tier 2
- [[Indian Independence]]
- [[People Power Philippines]]
- [[Iranian Green Movement]]
- [[Black Lives Matter]]

### Tier 3
- Remaining cases as resources allow

---

## Comparative Analysis Clusters

### Same Tactic, Different Outcomes
- Mass demonstrations: [[Tiananmen Square]] vs [[People Power Philippines]]
- Civil disobedience: [[Indian Independence]] vs [[Occupy Wall Street]]
- Guerrilla warfare: [[Vietnamese Independence]] vs failed insurrections

### Same Context, Different Tactics
- Under authoritarianism: [[Polish Solidarity]] vs [[Tiananmen Square]] vs [[Hong Kong Protests]]
- During economic crisis: labor strikes vs revolutionary organizing

### Transitions
- Non-violence to violence: [[Syrian Uprising]]
- Movement to party: [[Polish Solidarity]]

### Regional Clusters
- Arab Spring divergence
- Eastern European 1989
- Latin American Pink Tide

---

## Using This Database

### Creating a New Case Study
1. Copy template from `_templates/case_study.md`
2. Fill in YAML frontmatter properties
3. Complete sections progressively
4. Update `status` property as research progresses
5. Add to relevant sections in this index

### Property Reference

**Outcome values:** `success` | `partial_success` | `failure` | `ongoing`

**Type values:** `nonviolent` | `armed` | `mixed`

**Status values:** `draft` | `in_progress` | `complete`

**Regime types:** `democracy` | `hybrid` | `authoritarian` | `colonial` | `totalitarian`

**Regions:** `africa` | `asia` | `europe` | `latin_america` | `middle_east` | `north_america` | `oceania`

### Bases Queries

With Obsidian Bases, you can create filtered views using frontmatter properties:
- Filter by `outcome` to compare successes vs failures
- Filter by `type` to compare violent vs nonviolent
- Filter by `region` for geographic analysis
- Filter by `status` to track research progress
- Sort by `time_period_start` for chronological views

---

## Contributing

When adding or updating case studies:

1. **Be evenhanded** - Analyze what worked and what didn't without ideological commitment
2. **Be honest** - Acknowledge uncertainty, failure, and moral complexity
3. **Be specific** - Ground claims in evidence, cite sources
4. **Be comparative** - Connect to other cases and framework concepts
5. **Update the index** - Add new cases to relevant sections here

See [[case_studies_database#Avoiding Common Pitfalls]] for methodological guidance.