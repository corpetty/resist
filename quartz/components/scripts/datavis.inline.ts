// Data visualization inline script for Quartz
// Supports ```vega-lite code blocks
// Pattern follows mermaid.inline.ts

document.addEventListener("nav", async () => {
  const center = document.querySelector(".center") as HTMLElement
  if (!center) return

  const vegaNodes = center.querySelectorAll("code.vega-lite") as NodeListOf<HTMLElement>
  if (vegaNodes.length === 0) return

  try {
    // Load vega-embed (includes vega + vega-lite)
    // esm.sh bundles all dependencies for browser-native ESM import
    const mod = await import(
      /* webpackIgnore: true */
      "https://esm.sh/vega-embed@6"
    )
    const vegaEmbed = mod.default ?? mod.embed

    for (const node of vegaNodes) {
      const pre = node.closest("pre") as HTMLPreElement
      if (!pre || pre.dataset.vegaRendered === "true") continue
      pre.dataset.vegaRendered = "true"

      try {
        const specText = node.textContent || "{}"
        const spec = JSON.parse(specText)

        // Apply theme-aware defaults
        const style = getComputedStyle(document.documentElement)
        const isDark = document.documentElement.getAttribute("saved-theme") === "dark"

        if (!spec.$schema) {
          spec.$schema = "https://vega.github.io/schema/vega-lite/v5.json"
        }
        if (!spec.width) spec.width = "container"
        if (!spec.height && !spec.vconcat && !spec.hconcat && !spec.facet) spec.height = 300

        // Theme-aware config
        const fg = style.getPropertyValue("--darkgray").trim() || "#4e4e4e"
        const grid = style.getPropertyValue("--lightgray").trim() || "#e5e5e5"
        spec.config = {
          ...spec.config,
          background: "transparent",
          axis: { labelColor: fg, titleColor: fg, gridColor: grid, ...spec.config?.axis },
          legend: { labelColor: fg, titleColor: fg, ...spec.config?.legend },
          title: { color: fg, ...spec.config?.title },
          view: { stroke: "transparent", ...spec.config?.view },
        }

        // Resolve relative data URLs to static/
        if (spec.data?.url && !spec.data.url.startsWith("http")) {
          const pathname = window.location.pathname
          const siteRoot = pathname.substring(0, pathname.indexOf("/", 1)) || ""
          spec.data.url = `${siteRoot}/static/${spec.data.url}`
        }

        // Create container and replace pre
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
      } catch (e: any) {
        console.error("Vega-Lite render error:", e)
        const errDiv = document.createElement("div")
        errDiv.style.cssText = "color:#ef4444; padding:1rem; border:1px solid #ef4444; border-radius:4px"
        errDiv.textContent = `Chart error: ${e.message}`
        pre.replaceWith(errDiv)
      }
    }
  } catch (e: any) {
    console.error("Failed to load vega-embed:", e)
  }
})
