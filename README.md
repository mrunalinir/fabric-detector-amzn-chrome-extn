# Fabric Detector for Amazon

A Chrome extension that automatically detects and displays fabric composition on Amazon product pages. Browse clothing listings and instantly see what materials they're made of — with category breakdowns (natural, synthetic, regenerated, etc.) and animated composition bars.

![Widget preview showing fabric breakdown with category labels and percentage bars]()

---

## Features

- **Instant detection** — reads fabric data directly from Amazon's product page, no external requests
- **6 fabric categories** with color-coded labels: Pure Natural (Plant), Pure Natural (Animal), Regenerated Cellulose, Pure Synthetic, Lab-Grown Biosynthetic, Animal Hide & Skin
- **130+ fabrics** recognized — from everyday cotton/polyester to specialty fibers like vicuña, lyocell, and Tencel
- **Animated composition bars** — visual breakdown of percentages per fabric
- **Draggable widget** — reposition anywhere on the page, stays within viewport
- **SPA navigation support** — updates automatically when you navigate between product pages
- **Zero permissions required** — no access to browsing history, no external API calls, fully offline

---

## Supported Amazon Domains

| Domain | Region |
|--------|--------|
| www.amazon.com | United States |
| www.amazon.co.uk | United Kingdom |
| www.amazon.ca | Canada |
| www.amazon.com.au | Australia |
| www.amazon.de | Germany |

---

## Installation (Manual — for everyone)

The extension is not yet on the Chrome Web Store, but you can install it in a few clicks:

### Step 1 — Download the extension files

Download or clone this repository to your computer. You should have a folder containing:

```
fabric-detector/
├── manifest.json
├── content.js
├── styles.css
├── icon16.png
├── icon48.png
└── icon128.png
```

### Step 2 — Open Chrome Extensions

1. Open **Google Chrome** (or any Chromium-based browser: Edge, Brave, Arc, Opera)
2. In the address bar, type `chrome://extensions` and press **Enter**
3. In the top-right corner, toggle **Developer mode** ON

### Step 3 — Load the extension

1. Click **"Load unpacked"** (top-left)
2. Navigate to the `fabric-detector` folder you downloaded
3. Click **"Select Folder"**

The extension is now installed. You'll see the Fabric Detector icon appear in your extensions list.

### Step 4 — Use it

1. Go to any Amazon clothing or textile product page (e.g., a t-shirt, dress, or jacket)
2. The **Fabric Detector widget** appears automatically in the bottom-right corner
3. If no fabric data is found on the page, the widget shows a "no fabric info" message
4. **Drag** the widget anywhere on the screen by clicking and dragging the header bar
5. **Close** the widget with the ✕ button

> **Note:** The widget appears ~1.5 seconds after the page loads to give Amazon's content time to render.

---

## Keeping it updated

Since this is a manually loaded extension, updates don't happen automatically. To update:

1. Download the latest version of the folder
2. Go to `chrome://extensions`
3. Find Fabric Detector and click the **refresh icon** (↻)

---

## Privacy

- Reads only the current Amazon product page's DOM — no data leaves your browser
- No analytics, no tracking, no network requests (aside from Google Fonts for the widget UI)
- No permissions are requested in `manifest.json`

---

## Fabric Categories

| Category | Examples |
|----------|---------|
| 🌿 Pure Natural — Plant | Cotton, Linen, Hemp, Jute, Bamboo |
| 🐑 Pure Natural — Animal | Wool, Cashmere, Silk, Alpaca, Mohair |
| 🌊 Regenerated Cellulose | Viscose, Rayon, Modal, Lyocell, Tencel |
| 🛢️ Pure Synthetic | Polyester, Nylon, Acrylic, Elastane, Spandex |
| 🔬 Lab-Grown Biosynthetic | Mycelium, Bio-silk, Pinatex, Qmonos |
| 🐄 Animal Hide & Skin | Leather, Suede, Shearling, Nubuck |
