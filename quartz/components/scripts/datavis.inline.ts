// Data visualization inline script for Quartz
// Supports: ```vega-lite, ```ojs (Observable Plot), ```d3 code blocks
// Pattern follows mermaid.inline.ts

let vegaImport: any = undefined

document.addEventListener("nav", async () => {
  const center = document.querySelector(".center") as HTMLElement
  if (!center) return

  // --- Vega-Lite blocks ---
  const vegaNodes = center.querySelectorAll("code.vega-lite") as NodeListOf<HTMLElement>
  if (vegaNodes.length > 0) {
    // Lazy-load vega-embed (includes vega + vega-lite)
    vegaImport ||= await import(
      /* webpackIgnore: true */
      "https://cdn.jsdelivr.net/npm/vega-embed@6/build/vega-embed.module.min.js"
    )
    const vegaEmbed = vegaImport.default

    for (const node of vegaNodes) {
      const pre = node.parentElement as HTMLPreElement
      if (!pre || pre.dataset.rendered === "true") continue

      try {
        const spec = JSON.parse(node.textContent || "{}")

        // Apply theme-aware defaults
        const style = getComputedStyle(document.documentElement)
        const isDark = document.documentElement.getAttribute("saved-theme") === "dark"

        if (!spec.$schema) {
          spec.$schema = "https://vega.github.io/schema/vega-lite/v5.json"
        }

        // Auto-configure responsive width
        if (!spec.width) spec.width = "container"
        if (!spec.height && !spec.vconcat && !spec.hconcat && !spec.facet) spec.height = 300

        // Theme-aware config
        spec.config = {
          ...spec.config,
          background: "transparent",
          axis: {
            labelColor: style.getPropertyValue("--darkgray").trim() || "#4e4e4e",
            titleColor: style.getPropertyValue("--darkgray").trim() || "#4e4e4e",
            gridColor: style.getPropertyValue("--lightgray").trim() || "#e5e5e5",
            domainColor: style.getPropertyValue("--gray").trim() || "#b8b8b8",
            ...spec.config?.axis,
          },
          legend: {
            labelColor: style.getPropertyValue("--darkgray").trim() || "#4e4e4e",
            titleColor: style.getPropertyValue("--darkgray").trim() || "#4e4e4e",
            ...spec.config?.legend,
          },
          title: {
            color: style.getPropertyValue("--darkgray").trim() || "#4e4e4e",
            subtitleColor: style.getPropertyValue("--gray").trim() || "#b8b8b8",
            ...spec.config?.title,
          },
          view: {
            stroke: "transparent",
            ...spec.config?.view,
          },
        }

        // Resolve data URLs relative to static/
        if (spec.data?.url && !spec.data.url.startsWith("http")) {
          const base = document.querySelector("meta[property='og:url']")?.getAttribute("content") || ""
          const siteRoot = new URL(base).pathname.split("/").slice(0, 2).join("/")
          spec.data.url = `${siteRoot}/static/${spec.data.url}`
        }

        // Create container
        const container = document.createElement("div")
        container.className = "vega-lite-container"
        container.style.width = "100%"
        container.style.margin = "1rem 0"
        pre.replaceWith(container)

        await vegaEmbed(container, spec, {
          actions: false,
          renderer: "svg",
          theme: isDark ? "dark" : undefined,
        })
      } catch (e) {
        console.error("Vega-Lite render error:", e)
        const errDiv = document.createElement("div")
        errDiv.style.color = "var(--error, #ef4444)"
        errDiv.style.padding = "1rem"
        errDiv.style.border = "1px solid var(--error, #ef4444)"
        errDiv.style.borderRadius = "4px"
        errDiv.textContent = `Vega-Lite error: ${(e as Error).message}`
        pre.replaceWith(errDiv)
      }
    }
  }

  // --- D3 blocks ---
  const d3Nodes = center.querySelectorAll("code.language-d3") as NodeListOf<HTMLElement>
  for (const node of d3Nodes) {
    const pre = node.parentElement as HTMLPreElement
    if (!pre || pre.dataset.rendered === "true") continue

    try {
      const code = node.textContent || ""
      const container = document.createElement("div")
      container.className = "d3-container"
      container.style.width = "100%"
      container.style.margin = "1rem 0"
      pre.dataset.rendered = "true"

      // Create a sandboxed execution context
      pre.after(container)
      pre.style.display = "none"

      // Execute with container reference
      const fn = new Function("container", "d3", code)
      if (typeof (window as any).d3 !== "undefined") {
        fn(container, (window as any).d3)
      } else {
        container.textContent = "D3.js not loaded"
      }
    } catch (e) {
      console.error("D3 render error:", e)
    }
  }
})
