(() => {
  // ─── Fabric database — 6 categories ──────────────────────────────────────

  const Category = Object.freeze({
    NATURAL_PLANT:  "natural-plant",
    NATURAL_ANIMAL: "natural-animal",
    REGENERATED:    "regenerated",
    SYNTHETIC:      "synthetic",
    BIOSYNTHETIC:   "biosynthetic",
    HIDE:           "hide",
  });

  const CATEGORIES = {
    [Category.NATURAL_PLANT]:  { label: "Pure Natural — Plant",      color: "#4ade80", icon: "🌿", desc: "Harvested directly from plants, no chemical alteration" },
    [Category.NATURAL_ANIMAL]: { label: "Pure Natural — Animal",     color: "#86efac", icon: "🐑", desc: "Harvested from animals, cleaned and spun into yarn" },
    [Category.REGENERATED]:    { label: "Regenerated Cellulose",     color: "#38bdf8", icon: "🌊", desc: "Plant-based origin, heavy chemical processing to reform fibers" },
    [Category.SYNTHETIC]:      { label: "Pure Synthetic",            color: "#f87171", icon: "🛢️", desc: "100% petroleum-derived plastic fibers, sheds microplastics" },
    [Category.BIOSYNTHETIC]:   { label: "Lab-Grown Biosynthetic",    color: "#c084fc", icon: "🔬", desc: "Bio-engineered proteins or organisms grown in a lab setting" },
    [Category.HIDE]:           { label: "Animal Hide & Skin",        color: "#d97706", icon: "🐄", desc: "Solid organic material, tanned and cured rather than woven" },
  };

  const FABRICS = {
    // 1. Pure Natural — Plant
    // Common
    cotton:           { cat: Category.NATURAL_PLANT },
    linen:            { cat: Category.NATURAL_PLANT },
    flax:             { cat: Category.NATURAL_PLANT },   // same plant as linen
    hemp:             { cat: Category.NATURAL_PLANT },
    "true hemp":      { cat: Category.NATURAL_PLANT },
    jute:             { cat: Category.NATURAL_PLANT },
    // Rare / specialty bast & leaf fibers (all Amazon-valid)
    abaca:            { cat: Category.NATURAL_PLANT },   // Manila hemp / banana plant
    alfa:             { cat: Category.NATURAL_PLANT },   // esparto grass
    broom:            { cat: Category.NATURAL_PLANT },   // Scotch broom plant
    coir:             { cat: Category.NATURAL_PLANT },   // coconut husk
    coconut:          { cat: Category.NATURAL_PLANT },
    henequen:         { cat: Category.NATURAL_PLANT },   // agave family
    kapok:            { cat: Category.NATURAL_PLANT },   // seed-pod fiber
    maguey:           { cat: Category.NATURAL_PLANT },   // agave fiber
    "manila hemp":    { cat: Category.NATURAL_PLANT },
    ramie:            { cat: Category.NATURAL_PLANT },   // China grass
    sisal:            { cat: Category.NATURAL_PLANT },   // agave sisalana
    sunn:             { cat: Category.NATURAL_PLANT },   // Indian hemp / Crotalaria

    // 2. Pure Natural — Animal
    // Common
    wool:             { cat: Category.NATURAL_ANIMAL },
    cashmere:         { cat: Category.NATURAL_ANIMAL },
    mohair:           { cat: Category.NATURAL_ANIMAL },
    alpaca:           { cat: Category.NATURAL_ANIMAL },
    angora:           { cat: Category.NATURAL_ANIMAL },
    silk:             { cat: Category.NATURAL_ANIMAL },
    down:             { cat: Category.NATURAL_ANIMAL },
    // Rare luxury animal fibers (all Amazon-valid)
    beaver:           { cat: Category.NATURAL_ANIMAL },
    camel:            { cat: Category.NATURAL_ANIMAL },
    "camel hair":     { cat: Category.NATURAL_ANIMAL },
    "camel wool":     { cat: Category.NATURAL_ANIMAL },
    cashgora:         { cat: Category.NATURAL_ANIMAL },  // cashmere-angora cross goat
    "cashgora hair":  { cat: Category.NATURAL_ANIMAL },
    "cashgora wool":  { cat: Category.NATURAL_ANIMAL },
    guanaco:          { cat: Category.NATURAL_ANIMAL },  // South American camelid
    "guanaco hair":   { cat: Category.NATURAL_ANIMAL },
    "guanaco wool":   { cat: Category.NATURAL_ANIMAL },
    llama:            { cat: Category.NATURAL_ANIMAL },
    "llama hair":     { cat: Category.NATURAL_ANIMAL },
    "llama wool":     { cat: Category.NATURAL_ANIMAL },
    otter:            { cat: Category.NATURAL_ANIMAL },
    "otter hair":     { cat: Category.NATURAL_ANIMAL },
    "otter wool":     { cat: Category.NATURAL_ANIMAL },
    vicuna:           { cat: Category.NATURAL_ANIMAL },  // rarest luxury fiber
    "vicuna hair":    { cat: Category.NATURAL_ANIMAL },
    "vicuna wool":    { cat: Category.NATURAL_ANIMAL },
    yak:              { cat: Category.NATURAL_ANIMAL },
    "yak hair":       { cat: Category.NATURAL_ANIMAL },
    "yak wool":       { cat: Category.NATURAL_ANIMAL },
    "mohair hair":    { cat: Category.NATURAL_ANIMAL },
    "mohair wool":    { cat: Category.NATURAL_ANIMAL },
    "cashmere hair":  { cat: Category.NATURAL_ANIMAL },
    "cashmere wool":  { cat: Category.NATURAL_ANIMAL },
    "alpaca hair":    { cat: Category.NATURAL_ANIMAL },
    "alpaca wool":    { cat: Category.NATURAL_ANIMAL },
    "angora hair":    { cat: Category.NATURAL_ANIMAL },
    "angora wool":    { cat: Category.NATURAL_ANIMAL },
    "beaver hair":    { cat: Category.NATURAL_ANIMAL },
    "beaver wool":    { cat: Category.NATURAL_ANIMAL },

    // 3. Regenerated Cellulose
    // Common
    viscose:          { cat: Category.REGENERATED },
    rayon:            { cat: Category.REGENERATED },
    modal:            { cat: Category.REGENERATED },
    lyocell:          { cat: Category.REGENERATED },
    tencel:           { cat: Category.REGENERATED },
    cupro:            { cat: Category.REGENERATED },
    acetate:          { cat: Category.REGENERATED },
    bamboo:           { cat: Category.REGENERATED },
    // Additional Amazon-valid regenerated fibers
    triacetate:       { cat: Category.REGENERATED },     // more chemically modified acetate
    alginate:         { cat: Category.REGENERATED },     // seaweed-derived, commercially produced fiber
    protein:          { cat: Category.REGENERATED },     // regenerated protein fibers (soy, milk, peanut)

    // 4. Pure Synthetics
    // Common
    polyester:        { cat: Category.SYNTHETIC },
    nylon:            { cat: Category.SYNTHETIC },
    polyamide:        { cat: Category.SYNTHETIC },
    acrylic:          { cat: Category.SYNTHETIC },
    elastane:         { cat: Category.SYNTHETIC },
    spandex:          { cat: Category.SYNTHETIC },
    lycra:            { cat: Category.SYNTHETIC },
    polyurethane:     { cat: Category.SYNTHETIC },
    // Rare / technical synthetics (all Amazon-valid)
    aramid:           { cat: Category.SYNTHETIC },       // Kevlar / Nomex family
    chlorofibre:      { cat: Category.SYNTHETIC },       // PVC-based fiber
    elastodiene:      { cat: Category.SYNTHETIC },       // rubber-based elastic fiber
    elastolefin:      { cat: Category.SYNTHETIC },       // polyolefin elastic fiber
    elastomultiester: { cat: Category.SYNTHETIC },       // multi-component elastic polyester
    fluorofibre:      { cat: Category.SYNTHETIC },       // PTFE / Teflon-type fiber
    "glass fibre":    { cat: Category.SYNTHETIC },       // fiberglass
    melamine:         { cat: Category.SYNTHETIC },       // flame-resistant synthetic
    modacrylic:       { cat: Category.SYNTHETIC },       // modified acrylic (fire-resistant)
    polycarbamide:    { cat: Category.SYNTHETIC },       // polyurea fiber
    polyethylene:     { cat: Category.SYNTHETIC },       // UHMWPE (e.g. Dyneema)
    polyimide:        { cat: Category.SYNTHETIC },       // high-temp resistant fiber
    polylactide:      { cat: Category.SYNTHETIC },       // PLA — bio-derived but plastic
    polypropylene:    { cat: Category.SYNTHETIC },       // PP fiber, used in activewear linings
    trivinyl:         { cat: Category.SYNTHETIC },       // vinyl-based fiber
    vinylal:          { cat: Category.SYNTHETIC },       // polyvinyl alcohol fiber

    // 5. Lab-Grown Biosynthetics
    mycelium:         { cat: Category.BIOSYNTHETIC },
    "bio-silk":       { cat: Category.BIOSYNTHETIC },
    seaweed:          { cat: Category.BIOSYNTHETIC },
    "pinatex":        { cat: Category.BIOSYNTHETIC },
    "qmonos":         { cat: Category.BIOSYNTHETIC },    // spider-silk protein by Spiber
    "microsilk":      { cat: Category.BIOSYNTHETIC },    // Bolt Threads bio-silk
    "zoa":            { cat: Category.BIOSYNTHETIC },    // Modern Meadow bio-leather

    // 6. Animal Hides & Skins
    leather:          { cat: Category.HIDE },
    "faux leather":   { cat: Category.SYNTHETIC },  // PU/PVC-based, not animal hide
    suede:            { cat: Category.HIDE },
    shearling:        { cat: Category.HIDE },
    nubuck:           { cat: Category.HIDE },
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
      .replace(/\s*\/\s*/g, ",");     // normalise " / " separators to ","

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
