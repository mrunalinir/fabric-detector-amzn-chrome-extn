(() => {
  // ─── Fabric database — 6 categories ──────────────────────────────────────

  const CATEGORIES = {
    "natural-plant":   { label: "Pure Natural — Plant",      color: "#4ade80", icon: "🌿", desc: "Harvested directly from plants, no chemical alteration" },
    "natural-animal":  { label: "Pure Natural — Animal",     color: "#86efac", icon: "🐑", desc: "Harvested from animals, cleaned and spun into yarn" },
    "regenerated":     { label: "Regenerated Cellulose",     color: "#38bdf8", icon: "🌊", desc: "Plant-based origin, heavy chemical processing to reform fibers" },
    "synthetic":       { label: "Pure Synthetic",            color: "#f87171", icon: "🛢️", desc: "100% petroleum-derived plastic fibers, sheds microplastics" },
    "biosynthetic":    { label: "Lab-Grown Biosynthetic",    color: "#c084fc", icon: "🔬", desc: "Bio-engineered proteins or organisms grown in a lab setting" },
    "hide":            { label: "Animal Hide & Skin",        color: "#d97706", icon: "🐄", desc: "Solid organic material, tanned and cured rather than woven" },
  };

  const FABRICS = {
    // 1. Pure Natural — Plant
    // Common
    cotton:           { cat: "natural-plant" },
    linen:            { cat: "natural-plant" },
    flax:             { cat: "natural-plant" },   // same plant as linen
    hemp:             { cat: "natural-plant" },
    "true hemp":      { cat: "natural-plant" },
    jute:             { cat: "natural-plant" },
    // Rare / specialty bast & leaf fibers (all Amazon-valid)
    abaca:            { cat: "natural-plant" },   // Manila hemp / banana plant
    alfa:             { cat: "natural-plant" },   // esparto grass
    broom:            { cat: "natural-plant" },   // Scotch broom plant
    coir:             { cat: "natural-plant" },   // coconut husk
    coconut:          { cat: "natural-plant" },
    henequen:         { cat: "natural-plant" },   // agave family
    kapok:            { cat: "natural-plant" },   // seed-pod fiber
    maguey:           { cat: "natural-plant" },   // agave fiber
    "manila hemp":    { cat: "natural-plant" },
    ramie:            { cat: "natural-plant" },   // China grass
    sisal:            { cat: "natural-plant" },   // agave sisalana
    sunn:             { cat: "natural-plant" },   // Indian hemp / Crotalaria

    // 2. Pure Natural — Animal
    // Common
    wool:             { cat: "natural-animal" },
    cashmere:         { cat: "natural-animal" },
    mohair:           { cat: "natural-animal" },
    alpaca:           { cat: "natural-animal" },
    angora:           { cat: "natural-animal" },
    silk:             { cat: "natural-animal" },
    down:             { cat: "natural-animal" },
    // Rare luxury animal fibers (all Amazon-valid)
    beaver:           { cat: "natural-animal" },
    camel:            { cat: "natural-animal" },
    "camel hair":     { cat: "natural-animal" },
    "camel wool":     { cat: "natural-animal" },
    cashgora:         { cat: "natural-animal" },  // cashmere-angora cross goat
    "cashgora hair":  { cat: "natural-animal" },
    "cashgora wool":  { cat: "natural-animal" },
    guanaco:          { cat: "natural-animal" },  // South American camelid
    "guanaco hair":   { cat: "natural-animal" },
    "guanaco wool":   { cat: "natural-animal" },
    llama:            { cat: "natural-animal" },
    "llama hair":     { cat: "natural-animal" },
    "llama wool":     { cat: "natural-animal" },
    otter:            { cat: "natural-animal" },
    "otter hair":     { cat: "natural-animal" },
    "otter wool":     { cat: "natural-animal" },
    vicuna:           { cat: "natural-animal" },  // rarest luxury fiber
    "vicuna hair":    { cat: "natural-animal" },
    "vicuna wool":    { cat: "natural-animal" },
    yak:              { cat: "natural-animal" },
    "yak hair":       { cat: "natural-animal" },
    "yak wool":       { cat: "natural-animal" },
    "mohair hair":    { cat: "natural-animal" },
    "mohair wool":    { cat: "natural-animal" },
    "cashmere hair":  { cat: "natural-animal" },
    "cashmere wool":  { cat: "natural-animal" },
    "alpaca hair":    { cat: "natural-animal" },
    "alpaca wool":    { cat: "natural-animal" },
    "angora hair":    { cat: "natural-animal" },
    "angora wool":    { cat: "natural-animal" },
    "beaver hair":    { cat: "natural-animal" },
    "beaver wool":    { cat: "natural-animal" },

    // 3. Regenerated Cellulose
    // Common
    viscose:          { cat: "regenerated" },
    rayon:            { cat: "regenerated" },
    modal:            { cat: "regenerated" },
    lyocell:          { cat: "regenerated" },
    tencel:           { cat: "regenerated" },
    cupro:            { cat: "regenerated" },
    acetate:          { cat: "regenerated" },
    bamboo:           { cat: "regenerated" },
    // Additional Amazon-valid regenerated fibers
    triacetate:       { cat: "regenerated" },     // more chemically modified acetate
    alginate:         { cat: "regenerated" },     // seaweed-derived, commercially produced fiber
    protein:          { cat: "regenerated" },     // regenerated protein fibers (soy, milk, peanut)

    // 4. Pure Synthetics
    // Common
    polyester:        { cat: "synthetic" },
    nylon:            { cat: "synthetic" },
    polyamide:        { cat: "synthetic" },
    acrylic:          { cat: "synthetic" },
    elastane:         { cat: "synthetic" },
    spandex:          { cat: "synthetic" },
    lycra:            { cat: "synthetic" },
    polyurethane:     { cat: "synthetic" },
    // Rare / technical synthetics (all Amazon-valid)
    aramid:           { cat: "synthetic" },       // Kevlar / Nomex family
    chlorofibre:      { cat: "synthetic" },       // PVC-based fiber
    elastodiene:      { cat: "synthetic" },       // rubber-based elastic fiber
    elastolefin:      { cat: "synthetic" },       // polyolefin elastic fiber
    elastomultiester: { cat: "synthetic" },       // multi-component elastic polyester
    fluorofibre:      { cat: "synthetic" },       // PTFE / Teflon-type fiber
    "glass fibre":    { cat: "synthetic" },       // fiberglass
    melamine:         { cat: "synthetic" },       // flame-resistant synthetic
    modacrylic:       { cat: "synthetic" },       // modified acrylic (fire-resistant)
    polycarbamide:    { cat: "synthetic" },       // polyurea fiber
    polyethylene:     { cat: "synthetic" },       // UHMWPE (e.g. Dyneema)
    polyimide:        { cat: "synthetic" },       // high-temp resistant fiber
    polylactide:      { cat: "synthetic" },       // PLA — bio-derived but plastic
    polypropylene:    { cat: "synthetic" },       // PP fiber, used in activewear linings
    trivinyl:         { cat: "synthetic" },       // vinyl-based fiber
    vinylal:          { cat: "synthetic" },       // polyvinyl alcohol fiber

    // 5. Lab-Grown Biosynthetics
    mycelium:         { cat: "biosynthetic" },
    "bio-silk":       { cat: "biosynthetic" },
    seaweed:          { cat: "biosynthetic" },
    "pinatex":        { cat: "biosynthetic" },
    "qmonos":         { cat: "biosynthetic" },    // spider-silk protein by Spiber
    "microsilk":      { cat: "biosynthetic" },    // Bolt Threads bio-silk
    "zoa":            { cat: "biosynthetic" },    // Modern Meadow bio-leather

    // 6. Animal Hides & Skins
    leather:          { cat: "hide" },
    "faux leather":   { cat: "synthetic" },  // PU/PVC-based, not animal hide
    suede:            { cat: "hide" },
    shearling:        { cat: "hide" },
    nubuck:           { cat: "hide" },
  };

  // ─── Detect product page ──────────────────────────────────────────────────
  function isProductPage() {
    return !!(
      document.getElementById("dp") ||
      document.getElementById("ppd") ||
      document.querySelector('[data-feature-name="productDescription"]')
    );
  }

  // ─── Gather text from product page sections ───────────────────────────────
  function gatherCandidateText() {
    const selectors = [
      // Core product detail sections
      "#productDetails_techSpec_section_1",
      "#productDetails_db_sections",
      "#productDetails_expanderTechnical",
      "#prodDetails",
      // Detail bullets (most common location for fabric type)
      "#detailBullets_feature_div",
      "#detailBulletsWrapper_feature_div",
      // Feature / description bullets
      "#feature-bullets",
      "#featurebullets_feature_div",
      // Tech specs (expanded + collapsed)
      "#tech-specs-expanded_feature_div",
      "#technicalSpecifications_feature_div",
      "#tech-specs_feature_div",
      // Product facts (clothing-specific widget)
      ".product-facts-detail",
      "#productFacts_feature_div",
      "[data-feature-name='productFacts']",
      // Description sections
      "#productDescription",
      "[data-feature-name='productDescription']",
      "#productDescription_feature_div",
      // A+ content
      "#aplus",
      "#aplus3p_feature_div",
      "#aplusBrandStory_feature_div",
      // Cel widgets
      "[data-cel-widget='productDetails']",
      // Collapsed expanders (Amazon hides some details behind these)
      ".a-expander-content",
      // Title (last resort)
      "#productTitle",
    ];
    // Collect from all selectors, dedupe overlapping text
    const parts = selectors.flatMap(s =>
      [...document.querySelectorAll(s)].map(el => el.innerText || "")
    ).filter(Boolean);
    return parts.join("\n");
  }

  // ─── Parse fabrics from text ──────────────────────────────────────────────
  // Sort keys longest-first so "camel hair" is tried before "camel"
  const FABRIC_KEYS_SORTED = Object.keys(FABRICS).sort((a, b) => b.length - a.length);

  function parseFabrics(text) {
    const found = [];

    // Normalise: strip zero-width chars, collapse whitespace
    const clean = text
      .replace(/[\u200B-\u200F\uFEFF\u00AD]/g, "") // strip invisible
      .replace(/\r\n/g, "\n")
      .replace(/[\uFF0C\u3001]/g, ",")     // normalize full-width/ideographic commas \u2192 ,
      .replace(/\s*[\/\+]\s*/g, ","); // normalise " / " and "+" separators to ","

    // ── Pass 1: percentage-first  "95% Polyester, 5% Elastane" ───────────────
    const pctFirst = new RegExp(
      "(\\d{1,3}(?:\\.\\d{1,2})?)\\s*[%\uFF05]\\s*" +
      "([a-z][a-z\\-]{0,25}(?:\\s[a-z][a-z\\-]{0,20}){0,2}?)" +
      "(?=\\s*[,;/%\uFF05\\n\\r]|(?:\\s+(?:and|with|or|\\d))|\\s*$)",
      "gi"
    );
    let m;
    while ((m = pctFirst.exec(clean)) !== null) {
      const pct     = parseFloat(m[1]);
      const nameRaw = m[2].trim().toLowerCase().replace(/\s+/g, " ");
      const key     = FABRIC_KEYS_SORTED.find(
        f => nameRaw === f || nameRaw.startsWith(f)
      );
      if (key && pct > 0 && pct <= 100) {
        found.push({ name: titleCase(key), pct, ...FABRICS[key] });
      }
    }

    // ── Pass 2: name-first  "Polyester 95%, Elastane 5%" ─────────────────────
    // Only run if pass 1 found nothing (different listing style)
    if (found.length === 0) {
      const nameFirst = new RegExp(
        "(?:^|[,;\\n\\r])\\s*([a-z][a-z\\s\\-]{1,25}?)\\s+(\\d{1,3}(?:\\.\\d{1,2})?)\\s*%",
        "gi"
      );
      while ((m = nameFirst.exec(clean)) !== null) {
        const pct     = parseFloat(m[2]);
        const nameRaw = m[1].trim().toLowerCase().replace(/\s+/g, " ");
        const key     = FABRIC_KEYS_SORTED.find(
          f => nameRaw === f || nameRaw.startsWith(f)
        );
        if (key && pct > 0 && pct <= 100) {
          found.push({ name: titleCase(key), pct, ...FABRICS[key] });
        }
      }
    }

    // ── Pass 3: no percentages — keyword scan ─────────────────────────────────
    if (found.length === 0) {
      const lower   = clean.toLowerCase();
      const matched = new Set();
      for (const key of FABRIC_KEYS_SORTED) {
        const escaped = key.replace(/[-]/g, "[\\s\\-]").replace(/\s+/g, "\\s+");
        const re = new RegExp("(?<![a-z])" + escaped + "(?![a-z])", "i");
        if (re.test(lower)) {
          const alreadyCovered = [...matched].some(m => m.includes(key) && m !== key);
          if (!alreadyCovered) {
            matched.add(key);
            found.push({ name: titleCase(key), pct: null, ...FABRICS[key] });
          }
        }
      }
    }

    // ── Deduplicate by name ───────────────────────────────────────────────────
    const seen = new Set();
    return found.filter(f => {
      if (seen.has(f.name)) return false;
      seen.add(f.name);
      return true;
    });
  }

  function titleCase(str) {
    return str.replace(/(?:^|\s)\w/g, c => c.toUpperCase());
  }

  // ─── Group fabrics by category ────────────────────────────────────────────
  function groupByCategory(fabrics) {
    const groups = {};
    fabrics.forEach(f => {
      if (!groups[f.cat]) groups[f.cat] = [];
      groups[f.cat].push(f);
    });
    return groups;
  }

  // ─── Build widget ─────────────────────────────────────────────────────────
  function buildWidget(fabrics) {
    const existing = document.getElementById("fd-widget");
    if (existing) existing.remove();

    const widget = document.createElement("div");
    widget.id = "fd-widget";

    // Header
    widget.innerHTML = `
      <div class="fd-header">
        <span class="fd-logo">🧵</span>
        <span class="fd-title">Fabric Detector</span>
        <button class="fd-close" aria-label="Close">✕</button>
      </div>
    `;

    // Group fabrics by category
    const groups = groupByCategory(fabrics);
    const body = document.createElement("div");
    body.className = "fd-body";

    // Render in defined category order
    Object.keys(CATEGORIES).forEach(catKey => {
      if (!groups[catKey]) return;
      const cat = CATEGORIES[catKey];
      const items = groups[catKey];

      const section = document.createElement("div");
      section.className = "fd-section";

      // Category header
      const catHead = document.createElement("div");
      catHead.className = "fd-cat-head";
      catHead.style.borderLeftColor = cat.color;
      catHead.innerHTML = `
        <span class="fd-cat-icon">${cat.icon}</span>
        <div class="fd-cat-info">
          <span class="fd-cat-label" style="color:${cat.color}">${cat.label}</span>
          <span class="fd-cat-desc">${cat.desc}</span>
        </div>
      `;
      section.appendChild(catHead);

      // Fabric rows
      items.forEach((f, i) => {
        const row = document.createElement("div");
        row.className = "fd-row";

        const nameEl = document.createElement("span");
        nameEl.className = "fd-fabric-name";
        nameEl.innerHTML = `<span class="fd-dot" style="background:${cat.color}"></span>${f.name}`;

        const metaEl = document.createElement("span");
        metaEl.className = "fd-pct-label";
        if (f.pct !== null) metaEl.textContent = f.pct + "%";

        row.appendChild(nameEl);
        row.appendChild(metaEl);
        section.appendChild(row);

        // Animated bar
        if (f.pct !== null) {
          const barWrap = document.createElement("div");
          barWrap.className = "fd-bar-wrap";
          const bar = document.createElement("div");
          bar.className = "fd-bar";
          bar.style.cssText = `width:0%;background:${cat.color}`;
          barWrap.appendChild(bar);
          section.appendChild(barWrap);
          setTimeout(() => { bar.style.width = f.pct + "%"; }, 100 + i * 60);
        }
      });

      body.appendChild(section);
    });

    widget.appendChild(body);

    // Footer
    const foot = document.createElement("div");
    foot.className = "fd-foot";
    foot.textContent = "Data sourced from product listing";
    widget.appendChild(foot);

    // Close
    widget.querySelector(".fd-close").addEventListener("click", () => {
      widget.classList.add("fd-hiding");
      setTimeout(() => widget.remove(), 300);
    });

    makeDraggable(widget);
    document.body.appendChild(widget);
    setTimeout(() => widget.classList.add("fd-visible"), 50);
  }

  function buildNoDataWidget() {
    const existing = document.getElementById("fd-widget");
    if (existing) existing.remove();

    const widget = document.createElement("div");
    widget.id = "fd-widget";
    widget.className = "fd-no-data";
    widget.innerHTML = `
      <div class="fd-header">
        <span class="fd-logo">🧵</span>
        <span class="fd-title">Fabric Detector</span>
        <button class="fd-close" aria-label="Close">✕</button>
      </div>
      <div class="fd-empty">
        <span>🔍</span>
        <p>No fabric info found on this page.<br>Try a clothing product page.</p>
      </div>
    `;
    widget.querySelector(".fd-close").addEventListener("click", () => {
      widget.classList.add("fd-hiding");
      setTimeout(() => widget.remove(), 300);
    });
    makeDraggable(widget);
    document.body.appendChild(widget);
    setTimeout(() => widget.classList.add("fd-visible"), 50);
  }

  // ─── Draggable ────────────────────────────────────────────────────────────
  function makeDraggable(el) {
    let ox = 0, oy = 0, mx = 0, my = 0;
    const header = el.querySelector(".fd-header");
    if (!header) return;
    header.style.cursor = "grab";
    header.addEventListener("mousedown", e => {
      if (e.target.classList.contains("fd-close")) return;
      ox = el.offsetLeft; oy = el.offsetTop;
      mx = e.clientX;     my = e.clientY;
      header.style.cursor = "grabbing";
      const move = ev => {
        const newLeft = Math.min(Math.max(0, ox + ev.clientX - mx), window.innerWidth  - el.offsetWidth);
        const newTop  = Math.min(Math.max(0, oy + ev.clientY - my), window.innerHeight - el.offsetHeight);
        el.style.left   = newLeft + "px";
        el.style.top    = newTop  + "px";
        el.style.right  = "auto";
        el.style.bottom = "auto";
      };
      const up = () => {
        header.style.cursor = "grab";
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    });
  }

  // ─── Main ─────────────────────────────────────────────────────────────────
  function run() {
    if (!isProductPage()) return;
    const text    = gatherCandidateText();
    const fabrics = parseFabrics(text);
    if (fabrics.length > 0) buildWidget(fabrics);
    else buildNoDataWidget();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(run, 1500));
  } else {
    setTimeout(run, 1500);
  }

  // SPA navigation re-run
  let lastUrl = location.href;
  new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      setTimeout(run, 2000);
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
