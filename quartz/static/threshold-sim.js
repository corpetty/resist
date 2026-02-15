// Threshold/Tipping Point Simulator - Granovetter Model
// Demonstrates how threshold distributions and initial sparks create cascades (or don't)

document.addEventListener("nav", () => {
  const container = document.getElementById("threshold-sim");
  if (!container) return;
  
  // Clear any existing content
  container.innerHTML = "";
  
  // Create the visualization
  createThresholdSimulator(container);
});

function createThresholdSimulator(container) {
  // Dimensions
  const width = Math.min(800, container.offsetWidth || 800);
  const height = 500;
  const margin = { top: 20, right: 20, bottom: 80, left: 20 };
  const simWidth = width - margin.left - margin.right;
  const simHeight = height - margin.top - margin.bottom;
  
  // Create SVG
  const svg = d3.select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid var(--border)")
    .style("background", "var(--bg)");
    
  const g = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
  // Population parameters
  const populationSize = 100;
  const gridCols = 10;
  const gridRows = 10;
  const dotSize = Math.min(simWidth / gridCols, simHeight / gridRows) * 0.7;
  
  // Generate population with thresholds
  function generatePopulation() {
    const people = [];
    for (let i = 0; i < populationSize; i++) {
      const row = Math.floor(i / gridCols);
      const col = i % gridCols;
      
      people.push({
        id: i,
        x: col * (simWidth / gridCols) + (simWidth / gridCols) * 0.5,
        y: row * (simHeight / gridRows) + (simHeight / gridRows) * 0.5,
        threshold: Math.random() * 100, // Random threshold 0-100%
        joined: false,
        initialSpark: false
      });
    }
    return people;
  }
  
  let people = generatePopulation();
  
  // Draw people as dots
  function updateVisualization() {
    const dots = g.selectAll(".person")
      .data(people, d => d.id);
      
    dots.enter()
      .append("circle")
      .attr("class", "person")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", dotSize / 2)
      .merge(dots)
      .transition()
      .duration(500)
      .attr("fill", d => {
        if (d.initialSpark) return "var(--secondary)"; // Initial sparks
        if (d.joined) return "var(--tertiary)"; // Joined later
        return "var(--lightgray)"; // Not joined
      })
      .attr("stroke", d => d.joined ? "var(--dark)" : "var(--gray)")
      .attr("stroke-width", 1);
      
    dots.exit().remove();
  }
  
  // Run simulation cascade
  function runCascade(initialSparkPercent) {
    // Reset everyone
    people.forEach(p => {
      p.joined = false;
      p.initialSpark = false;
    });
    
    // Set initial sparks (people who join unconditionally)
    const sparkCount = Math.floor((initialSparkPercent / 100) * populationSize);
    const sparks = d3.shuffle([...people]).slice(0, sparkCount);
    sparks.forEach(p => {
      p.joined = true;
      p.initialSpark = true;
    });
    
    updateVisualization();
    
    // Run cascade simulation
    let changed = true;
    let step = 0;
    const maxSteps = 20;
    
    function cascadeStep() {
      if (!changed || step >= maxSteps) return;
      
      step++;
      changed = false;
      
      const currentJoined = people.filter(p => p.joined).length;
      const currentPercent = (currentJoined / populationSize) * 100;
      
      people.forEach(p => {
        if (!p.joined && currentPercent >= p.threshold) {
          p.joined = true;
          changed = true;
        }
      });
      
      updateVisualization();
      
      // Continue cascade if people are still joining
      if (changed) {
        setTimeout(cascadeStep, 800);
      } else {
        // Update final statistics
        updateStats();
      }
    }
    
    setTimeout(cascadeStep, 1000);
  }
  
  function updateStats() {
    const joined = people.filter(p => p.joined).length;
    const percent = ((joined / populationSize) * 100).toFixed(1);
    statsDiv.html(`<strong>Final participation:</strong> ${joined}/${populationSize} people (${percent}%)`);
  }
  
  // Controls
  const controlsDiv = d3.select(container)
    .append("div")
    .style("margin-top", "20px")
    .style("text-align", "center");
    
  const statsDiv = d3.select(container)
    .append("div")
    .style("margin-top", "15px")
    .style("text-align", "center")
    .style("font-size", "14px")
    .style("color", "var(--secondary)");
    
  // Slider for initial spark
  controlsDiv.append("label")
    .style("display", "block")
    .style("margin-bottom", "10px")
    .style("font-weight", "bold")
    .text("Initial Spark (% who join unconditionally):");
    
  const slider = controlsDiv.append("input")
    .attr("type", "range")
    .attr("min", 0)
    .attr("max", 30)
    .attr("step", 1)
    .attr("value", 5)
    .style("width", "300px")
    .style("margin", "0 10px");
    
  const sliderValue = controlsDiv.append("span")
    .style("font-weight", "bold")
    .text("5%");
    
  controlsDiv.append("br");
    
  const runButton = controlsDiv.append("button")
    .style("margin-top", "10px")
    .style("padding", "8px 16px")
    .style("font-size", "16px")
    .style("background", "var(--secondary)")
    .style("color", "var(--light)")
    .style("border", "none")
    .style("border-radius", "4px")
    .style("cursor", "pointer")
    .text("Run Simulation")
    .on("click", () => {
      const sparkPercent = +slider.property("value");
      runCascade(sparkPercent);
    });
    
  const resetButton = controlsDiv.append("button")
    .style("margin", "10px 0 0 10px")
    .style("padding", "8px 16px")
    .style("font-size", "16px")
    .style("background", "var(--gray)")
    .style("color", "var(--light)")
    .style("border", "none")
    .style("border-radius", "4px")
    .style("cursor", "pointer")
    .text("New Population")
    .on("click", () => {
      people = generatePopulation();
      updateVisualization();
      statsDiv.html("");
    });
    
  // Update slider value display
  slider.on("input", function() {
    sliderValue.text(this.value + "%");
  });
  
  // Instructions
  d3.select(container)
    .append("div")
    .style("margin-top", "15px")
    .style("font-size", "13px")
    .style("color", "var(--gray)")
    .style("line-height", "1.4")
    .html(`
      <strong>How it works:</strong> Each dot is a person with a random threshold (0-100%). 
      They join when that percentage of others have already joined. 
      Orange dots are "initial sparks" who join unconditionally. 
      Blue dots join later when their threshold is met. 
      Try different spark percentages to see cascades succeed or fail.
    `);
    
  // Initial visualization
  updateVisualization();
}