// Free Rider Payoff Matrix Game
// Interactive game theory visualization showing why free riding seems rational

document.addEventListener("nav", () => {
  const container = document.getElementById("free-rider-game");
  if (!container) return;
  
  // Clear any existing content
  container.innerHTML = "";
  
  // Create the visualization
  createFreeRiderGame(container);
});

function createFreeRiderGame(container) {
  // Game parameters (adjustable via sliders)
  let params = {
    participationCost: 10,      // Personal cost of participating
    movementBenefit: 100,       // Benefit if movement succeeds
    probSuccessWithYou: 0.6,    // Probability movement succeeds with your participation
    probSuccessWithoutYou: 0.55  // Probability movement succeeds without you
  };
  
  // Create main container
  const gameDiv = d3.select(container)
    .append("div")
    .style("max-width", "800px")
    .style("margin", "0 auto");
    
  // Title
  gameDiv.append("h3")
    .style("text-align", "center")
    .style("margin-bottom", "20px")
    .text("The Free Rider Dilemma: Your Personal Payoff Matrix");
    
  // Sliders container
  const slidersDiv = gameDiv.append("div")
    .style("margin-bottom", "30px")
    .style("background", "var(--bg)")
    .style("padding", "15px")
    .style("border-radius", "5px")
    .style("border", "1px solid var(--border)");
    
  // Create sliders
  const sliderConfigs = [
    {
      key: "participationCost",
      label: "Personal cost of participation",
      min: 0,
      max: 50,
      step: 1,
      unit: ""
    },
    {
      key: "movementBenefit", 
      label: "Benefit if movement succeeds",
      min: 50,
      max: 200,
      step: 5,
      unit: ""
    },
    {
      key: "probSuccessWithYou",
      label: "Probability movement succeeds WITH you",
      min: 0.1,
      max: 0.95,
      step: 0.05,
      unit: "%",
      display: val => (val * 100).toFixed(0)
    },
    {
      key: "probSuccessWithoutYou",
      label: "Probability movement succeeds WITHOUT you", 
      min: 0.05,
      max: 0.9,
      step: 0.05,
      unit: "%",
      display: val => (val * 100).toFixed(0)
    }
  ];
  
  const sliders = {};
  
  sliderConfigs.forEach(config => {
    const sliderGroup = slidersDiv.append("div")
      .style("margin-bottom", "15px");
      
    const labelDiv = sliderGroup.append("div")
      .style("display", "flex")
      .style("justify-content", "space-between")
      .style("margin-bottom", "5px");
      
    labelDiv.append("label")
      .style("font-weight", "bold")
      .style("font-size", "14px")
      .text(config.label + ":");
      
    const valueSpan = labelDiv.append("span")
      .style("font-weight", "bold")
      .style("color", "var(--secondary)");
      
    const slider = sliderGroup.append("input")
      .attr("type", "range")
      .attr("min", config.min)
      .attr("max", config.max)
      .attr("step", config.step)
      .attr("value", params[config.key])
      .style("width", "100%")
      .on("input", function() {
        params[config.key] = +this.value;
        const displayValue = config.display ? config.display(+this.value) : +this.value;
        valueSpan.text(displayValue + config.unit);
        updateMatrix();
      });
      
    // Set initial value display
    const initialValue = config.display ? config.display(params[config.key]) : params[config.key];
    valueSpan.text(initialValue + config.unit);
    
    sliders[config.key] = slider;
  });
  
  // Matrix container
  const matrixDiv = gameDiv.append("div")
    .style("margin-bottom", "20px");
    
  // Expected value calculations
  const calculationsDiv = gameDiv.append("div")
    .style("background", "var(--bg)")
    .style("padding", "15px")
    .style("border-radius", "5px")
    .style("border", "1px solid var(--border)")
    .style("margin-bottom", "20px");
    
  // Nash equilibrium explanation
  const equilibriumDiv = gameDiv.append("div")
    .style("background", "var(--bg)")
    .style("padding", "15px")
    .style("border-radius", "5px")
    .style("border", "1px solid var(--border)");
  
  function updateMatrix() {
    // Calculate expected values
    const participateEV = (params.probSuccessWithYou * (params.movementBenefit - params.participationCost)) + 
                         ((1 - params.probSuccessWithYou) * (-params.participationCost));
                         
    const freeRideEV = (params.probSuccessWithoutYou * params.movementBenefit) + 
                      ((1 - params.probSuccessWithoutYou) * 0);
    
    // Create payoff matrix
    const matrixData = [
      { 
        action: "Participate", 
        movementSucceeds: params.movementBenefit - params.participationCost,
        movementFails: -params.participationCost,
        expectedValue: participateEV
      },
      { 
        action: "Free Ride", 
        movementSucceeds: params.movementBenefit,
        movementFails: 0,
        expectedValue: freeRideEV
      }
    ];
    
    // Clear and rebuild matrix
    matrixDiv.selectAll("*").remove();
    
    const table = matrixDiv.append("table")
      .style("width", "100%")
      .style("border-collapse", "collapse")
      .style("margin", "0 auto")
      .style("font-size", "14px");
      
    // Header
    const header = table.append("thead").append("tr");
    header.append("th").style("padding", "10px").style("border", "1px solid var(--border)").text("Your Choice");
    header.append("th").style("padding", "10px").style("border", "1px solid var(--border)").text("Movement Succeeds");
    header.append("th").style("padding", "10px").style("border", "1px solid var(--border)").text("Movement Fails");
    header.append("th").style("padding", "10px").style("border", "1px solid var(--border)").style("background", "var(--bg)").text("Expected Value");
    
    // Rows
    const rows = table.append("tbody").selectAll("tr")
      .data(matrixData)
      .enter().append("tr");
      
    rows.append("td")
      .style("padding", "10px")
      .style("border", "1px solid var(--border)")
      .style("font-weight", "bold")
      .text(d => d.action);
      
    rows.append("td")
      .style("padding", "10px")
      .style("border", "1px solid var(--border)")
      .style("text-align", "center")
      .text(d => d.movementSucceeds > 0 ? `+${d.movementSucceeds}` : d.movementSucceeds);
      
    rows.append("td")
      .style("padding", "10px")
      .style("border", "1px solid var(--border)")
      .style("text-align", "center")
      .text(d => d.movementFails > 0 ? `+${d.movementFails}` : d.movementFails);
      
    rows.append("td")
      .style("padding", "10px")
      .style("border", "1px solid var(--border)")
      .style("text-align", "center")
      .style("font-weight", "bold")
      .style("background", (d, i) => {
        const maxEV = Math.max(participateEV, freeRideEV);
        return d.expectedValue === maxEV ? "var(--secondary)" : "var(--bg)";
      })
      .style("color", (d, i) => {
        const maxEV = Math.max(participateEV, freeRideEV);
        return d.expectedValue === maxEV ? "var(--light)" : "var(--dark)";
      })
      .text(d => d.expectedValue.toFixed(1));
    
    // Update calculations explanation
    calculationsDiv.selectAll("*").remove();
    
    calculationsDiv.append("h4")
      .style("margin-top", "0")
      .text("Expected Value Calculations:");
      
    calculationsDiv.append("div")
      .style("margin-bottom", "10px")
      .html(`
        <strong>Participate:</strong><br>
        ${(params.probSuccessWithYou * 100).toFixed(0)}% × (${params.movementBenefit} - ${params.participationCost}) + 
        ${((1-params.probSuccessWithYou) * 100).toFixed(0)}% × (-${params.participationCost}) = 
        <strong>${participateEV.toFixed(1)}</strong>
      `);
      
    calculationsDiv.append("div")
      .html(`
        <strong>Free Ride:</strong><br>
        ${(params.probSuccessWithoutYou * 100).toFixed(0)}% × ${params.movementBenefit} + 
        ${((1-params.probSuccessWithoutYou) * 100).toFixed(0)}% × 0 = 
        <strong>${freeRideEV.toFixed(1)}</strong>
      `);
    
    // Update equilibrium analysis
    equilibriumDiv.selectAll("*").remove();
    
    equilibriumDiv.append("h4")
      .style("margin-top", "0")
      .text("Nash Equilibrium Analysis:");
      
    const betterChoice = participateEV > freeRideEV ? "Participate" : "Free Ride";
    const rationalityColor = participateEV > freeRideEV ? "var(--tertiary)" : "var(--secondary)";
    
    equilibriumDiv.append("div")
      .style("font-size", "16px")
      .style("margin-bottom", "10px")
      .html(`
        <strong style="color: ${rationalityColor}">Rational choice: ${betterChoice}</strong>
        (Expected value: ${Math.max(participateEV, freeRideEV).toFixed(1)})
      `);
      
    if (participateEV <= freeRideEV) {
      equilibriumDiv.append("div")
        .style("color", "var(--secondary)")
        .style("font-style", "italic")
        .html(`
          <strong>This is the free rider trap:</strong> Individual rationality (free riding) 
          leads to collective irrationality (movement failure). Even though you benefit from 
          the movement's success, your individual participation doesn't seem worth the cost.
        `);
    } else {
      equilibriumDiv.append("div")
        .style("color", "var(--tertiary)")
        .style("font-style", "italic")
        .html(`
          <strong>Participation is rational here:</strong> Your individual impact is large enough 
          or the costs low enough that participating makes sense even from a purely selfish perspective.
        `);
    }
    
    // Individual impact analysis
    const impact = params.probSuccessWithYou - params.probSuccessWithoutYou;
    equilibriumDiv.append("div")
      .style("margin-top", "10px")
      .style("font-size", "14px")
      .html(`
        <strong>Your individual impact:</strong> ${(impact * 100).toFixed(1)} percentage point increase 
        in success probability. This translates to an expected benefit of 
        ${(impact * params.movementBenefit).toFixed(1)} from your participation alone.
      `);
  }
  
  // Instructions
  gameDiv.append("div")
    .style("margin-top", "15px")
    .style("font-size", "13px")
    .style("color", "var(--gray)")
    .style("line-height", "1.4")
    .html(`
      <strong>Try this:</strong> Adjust the sliders to see how different conditions affect the rationality of participation. 
      When is free riding rational? When does participation make sense? Notice how small changes in 
      your individual impact (the probability difference) can flip the entire calculus.
    `);
  
  // Initial calculation
  updateMatrix();
}