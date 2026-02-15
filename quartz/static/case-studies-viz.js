// Case Studies Interactive Visualizations
// Loaded as static JS to avoid Quartz HTML-encoding script contents

(function() {
  const DATA_URL = document.querySelector("script[data-viz-base]")?.getAttribute("data-viz-base") 
    || (document.querySelector("meta[name='base']")?.content || "") + "/static/movements.json";

  // Resolve base URL for the site
  const baseEl = document.querySelector('link[rel="canonical"]') || document.querySelector('meta[property="og:url"]');
  const siteBase = window.location.origin + (window.location.pathname.split('/').slice(0, -2).join('/') || '');
  const jsonUrl = siteBase + "/static/movements.json";

  function getColor(outcome) {
    const colors = { success: "#22c55e", partial: "#f59e0b", failure: "#ef4444" };
    return colors[outcome] || "#888";
  }

  function buildTimeline(data) {
    const container = document.getElementById("timeline");
    if (!container) return;
    container.innerHTML = "";

    const sorted = [...data].sort((a, b) => a.yearStart - b.yearStart);
    const margin = { top: 30, right: 20, bottom: 40, left: 10 };
    const fullWidth = Math.min(container.clientWidth || 700, 900);
    const barHeight = 18;
    const barGap = 4;
    const fullHeight = sorted.length * (barHeight + barGap) + margin.top + margin.bottom;

    const svg = d3.select(container).append("svg")
      .attr("viewBox", `0 0 ${fullWidth} ${fullHeight}`)
      .attr("width", "100%")
      .style("max-width", fullWidth + "px");

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    const width = fullWidth - margin.left - margin.right;

    const minYear = d3.min(sorted, d => d.yearStart) - 2;
    const maxYear = d3.max(sorted, d => d.yearEnd || 2026) + 2;
    const x = d3.scaleLinear().domain([minYear, maxYear]).range([0, width]);

    // Grid lines
    const ticks = x.ticks(10);
    g.selectAll(".grid").data(ticks).enter().append("line")
      .attr("x1", d => x(d)).attr("x2", d => x(d))
      .attr("y1", 0).attr("y2", fullHeight - margin.top - margin.bottom)
      .attr("stroke", "var(--lightgray, #e5e5e5)").attr("stroke-width", 0.5);

    // X axis
    g.append("g")
      .attr("transform", `translate(0,${fullHeight - margin.top - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(10).tickFormat(d3.format("d")))
      .selectAll("text").style("fill", "var(--darkgray, #4e4e4e)");

    // Tooltip
    let tooltip = d3.select("#timeline-tooltip");
    if (tooltip.empty()) {
      tooltip = d3.select("body").append("div").attr("id", "timeline-tooltip")
        .style("position", "absolute").style("padding", "8px 12px")
        .style("background", "var(--light, #faf8f8)").style("color", "var(--darkgray, #4e4e4e)")
        .style("border", "1px solid var(--gray, #b8b8b8)").style("border-radius", "4px")
        .style("font-size", "13px").style("pointer-events", "none")
        .style("opacity", 0).style("z-index", 9999).style("box-shadow", "0 2px 8px rgba(0,0,0,0.15)");
    }

    // Bars
    sorted.forEach((d, i) => {
      const y = i * (barHeight + barGap);
      const endYear = d.yearEnd || 2026;
      const barW = Math.max(x(endYear) - x(d.yearStart), 3);

      const row = g.append("g");

      row.append("rect")
        .attr("x", x(d.yearStart)).attr("y", y)
        .attr("width", barW).attr("height", barHeight)
        .attr("rx", 3).attr("ry", 3)
        .attr("fill", getColor(d.outcome)).attr("opacity", 0.8)
        .style("cursor", "pointer");

      // Label on bar
      const label = d.name.length > 30 ? d.name.slice(0, 28) + "…" : d.name;
      if (barW > 60) {
        row.append("text")
          .attr("x", x(d.yearStart) + 4).attr("y", y + barHeight / 2)
          .attr("dy", "0.35em").style("font-size", "11px").style("font-weight", "600")
          .attr("fill", "#fff").text(label);
      } else {
        row.append("text")
          .attr("x", x(d.yearStart) + barW + 4).attr("y", y + barHeight / 2)
          .attr("dy", "0.35em").style("font-size", "11px")
          .attr("fill", "var(--darkgray, #4e4e4e)").text(label);
      }

      row.on("mouseover", function(event) {
        d3.select(this).select("rect").attr("opacity", 1);
        tooltip.style("opacity", 1).html(
          `<strong>${d.name}</strong><br>${d.country}<br>${d.yearStart}–${d.yearEnd || "ongoing"}<br>` +
          `<span style="color:${getColor(d.outcome)}">● ${d.outcome}</span> · ${d.primaryMethod}`
        );
      }).on("mousemove", function(event) {
        tooltip.style("left", (event.pageX + 12) + "px").style("top", (event.pageY - 10) + "px");
      }).on("mouseout", function() {
        d3.select(this).select("rect").attr("opacity", 0.8);
        tooltip.style("opacity", 0);
      });
    });

    // Legend
    const legend = svg.append("g").attr("transform", `translate(${margin.left + 5}, 5)`);
    ["success", "partial", "failure"].forEach((o, i) => {
      legend.append("rect").attr("x", i * 90).attr("width", 12).attr("height", 12).attr("rx", 2).attr("fill", getColor(o));
      legend.append("text").attr("x", i * 90 + 16).attr("y", 10).style("font-size", "12px")
        .attr("fill", "var(--darkgray, #4e4e4e)").text(o.charAt(0).toUpperCase() + o.slice(1));
    });
  }

  function buildRadar(data) {
    const container = document.getElementById("radar-chart");
    const select = document.getElementById("movement-select");
    const btn = document.getElementById("compare-btn");
    if (!container || !select) return;

    // Populate select
    select.innerHTML = "";
    const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
    sorted.forEach(d => {
      const opt = document.createElement("option");
      opt.value = d.slug;
      opt.textContent = `${d.name} (${d.yearStart}–${d.yearEnd || "ongoing"})`;
      select.appendChild(opt);
    });

    // Defaults
    const defaults = ["US Civil Rights Movement", "Polish Solidarity", "Tiananmen Square"];
    const defaultSlugs = data.filter(d => defaults.some(n => d.name.includes(n))).map(d => d.slug);
    Array.from(select.options).forEach(opt => {
      if (defaultSlugs.includes(opt.value)) opt.selected = true;
    });

    function draw() {
      const selected = Array.from(select.selectedOptions).slice(0, 3).map(o => o.value);
      const movements = data.filter(d => selected.includes(d.slug));
      container.innerHTML = "";
      if (!movements.length) { container.innerHTML = "<p>Select movements above to compare.</p>"; return; }

      const dims = [
        { key: "organizationLevel", label: "Organization" },
        { key: "popularSupport", label: "Popular Support" },
        { key: "internationalSupport", label: "Int'l Support" },
        { key: "stateRepression", label: "State Repression" },
        { key: "violenceLevel", label: "Violence Level" },
        { key: "duration", label: "Duration" }
      ];

      const size = Math.min(container.clientWidth || 450, 450);
      const cx = size / 2, cy = size / 2, radius = size / 2 - 60;

      const svg = d3.select(container).append("svg")
        .attr("viewBox", `0 0 ${size} ${size + 40}`)
        .attr("width", "100%").style("max-width", size + "px");

      const g = svg.append("g").attr("transform", `translate(${cx},${cy})`);

      function angle(i) { return (i / dims.length) * 2 * Math.PI - Math.PI / 2; }
      function polar(i, val) {
        const a = angle(i), r = (val / 5) * radius;
        return [r * Math.cos(a), r * Math.sin(a)];
      }

      // Grid
      [1, 2, 3, 4, 5].forEach(lv => {
        const pts = dims.map((_, i) => polar(i, lv));
        g.append("polygon").attr("points", pts.map(p => p.join(",")).join(" "))
          .attr("fill", "none").attr("stroke", "var(--lightgray, #e5e5e5)").attr("stroke-width", 0.7);
      });

      // Axes + labels
      dims.forEach((dim, i) => {
        const [ex, ey] = polar(i, 5);
        g.append("line").attr("x1", 0).attr("y1", 0).attr("x2", ex).attr("y2", ey)
          .attr("stroke", "var(--lightgray, #e5e5e5)").attr("stroke-width", 0.7);
        const [lx, ly] = polar(i, 5.8);
        g.append("text").attr("x", lx).attr("y", ly).attr("dy", "0.35em")
          .attr("text-anchor", Math.abs(lx) < 5 ? "middle" : lx > 0 ? "start" : "end")
          .style("font-size", "11px").style("font-weight", "600")
          .attr("fill", "var(--darkgray, #4e4e4e)").text(dim.label);
      });

      // Movement areas
      const palette = ["#e74c3c", "#3498db", "#2ecc71"];
      movements.forEach((m, mi) => {
        const pts = dims.map((dim, i) => polar(i, m.radarData?.[dim.key] || 0));
        g.append("polygon").attr("points", pts.map(p => p.join(",")).join(" "))
          .attr("fill", palette[mi]).attr("fill-opacity", 0.15)
          .attr("stroke", palette[mi]).attr("stroke-width", 2);
        pts.forEach(([px, py]) => {
          g.append("circle").attr("cx", px).attr("cy", py).attr("r", 3.5)
            .attr("fill", palette[mi]).attr("stroke", "#fff").attr("stroke-width", 1.5);
        });
      });

      // Legend below chart
      const leg = svg.append("g").attr("transform", `translate(10, ${size + 5})`);
      movements.forEach((m, i) => {
        leg.append("rect").attr("x", i * (size / 3)).attr("width", 12).attr("height", 12).attr("rx", 2).attr("fill", palette[i]);
        leg.append("text").attr("x", i * (size / 3) + 16).attr("y", 10)
          .style("font-size", "12px").attr("fill", "var(--darkgray, #4e4e4e)")
          .text(m.name.length > 25 ? m.name.slice(0, 23) + "…" : m.name);
      });
    }

    if (btn) btn.addEventListener("click", draw);
    draw();
  }

  // Load data and init
  d3.json(jsonUrl).then(function(data) {
    buildTimeline(data);
    buildRadar(data);
  }).catch(function(err) {
    console.error("Failed to load movements data:", err, "URL:", jsonUrl);
    // Try alternate path
    const altUrl = "/resist/static/movements.json";
    d3.json(altUrl).then(function(data) {
      buildTimeline(data);
      buildRadar(data);
    }).catch(function(err2) {
      console.error("Fallback also failed:", err2);
      const el = document.getElementById("timeline");
      if (el) el.innerHTML = "<p>Could not load visualization data.</p>";
    });
  });

  // Handle Quartz SPA re-navigation
  document.addEventListener("nav", function() {
    if (document.getElementById("timeline")) {
      d3.json(jsonUrl).then(function(data) {
        buildTimeline(data);
        buildRadar(data);
      }).catch(() => {
        d3.json("/resist/static/movements.json").then(function(data) {
          buildTimeline(data);
          buildRadar(data);
        });
      });
    }
  });
})();
