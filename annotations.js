// ═══════════════════════════════════════════════════════
//  annotations.js — Heritage 360° Viewer · Content File
//
//  Edit this file to update all text, hotspot positions,
//  images, and panel content without touching the viewer.
//
//  SITE_CONFIG  → top-bar title, panel header, meta line
//  HOTSPOTS     → all point and inscription annotations
// ═══════════════════════════════════════════════════════

// ── Site identity ────────────────────────────────────────
const SITE_CONFIG = {
  siteTitle:    "St. Crispin's Basilica \u00a0·\u00a0 Digital Archive",
  siteSubtitle: "Est. MDCCIV — Interactive Heritage Survey",
  panelLabel:   "Annotated Points of Interest",
  panelHeading: "Architectural Survey",
  panelMeta:    "12 documented features \u00b7 circa 847 CE – 1882",
  panoramaFile: "theroom.jpg",   // default panorama loaded on startup
  defaultYaw:   0,               // starting horizontal angle in degrees
  defaultPitch: 0,               // starting vertical angle in degrees
  defaultZoom:  90               // starting FOV in degrees (20–120)
};

// ── Annotations ──────────────────────────────────────────
//
//  Point hotspot fields:
//    id       (string)   unique identifier
//    pitch    (number)   vertical angle in degrees (+up / -down)
//    yaw      (number)   horizontal angle in degrees
//    title    (string)   short label shown in panel + tooltip
//    date     (string)   date / location line
//    image    (string)   URL or relative path for the panel thumbnail
//    content  (string)   HTML body text (bold, em, etc. allowed)
//    links    (string[]) optional — IDs of related hotspots shown as
//                        clickable chips at the bottom of the panel entry
//    zoom     (number)   optional — FOV in degrees (20–120) applied when
//                        navigating to this hotspot; omit to use default 90°
//
//  Inscription hotspot — all of the above except pitch/yaw, plus:
//    type         "inscription"
//    corners      [[yaw,pitch], [yaw,pitch], [yaw,pitch], [yaw,pitch]]
//                 top-left → top-right → bottom-right → bottom-left
//                 (fly-to centre is derived automatically from corners[0] and corners[2])
//    transcription  (string[])  one entry per line of the inscription
//    translation    (string)    English rendering shown below transcription
// ─────────────────────────────────────────────────────────

const HOTSPOTS = [
  {
    id: "altar-01",
    pitch: -12, yaw: 0,
    title: "The High Altar",
    date: "Consecrated 1704",
    image: "https://images.unsplash.com/photo-1548625149-720754952f98?w=600&q=70",
    content: `Constructed in <strong>1704</strong> under the patronage of Cardinal Benedetto Pamphilj, this <em>Baroque</em> masterpiece features gilded <strong>gold leaf</strong> applied over hand-carved limewood. The central triptych depicts the Ascension in the Neapolitan manner, its pigments sourced from Lapis Lazuli imported via the trading routes of Venice. Restored comprehensively in <strong>1991</strong> by the Opificio delle Pietre Dure, Florence.`,
    links: ["mosaic-apse-11", "dedication-plaque-A", "choir-stalls-08"]
  },
  
  {
    id: "portal-cartouche-C",
    type: "inscription",
    corners: [[-6, 18], [6, 18], [6, 11], [-6, 11]],
    title: "Porta Coeli Cartouche",
    date: "c. 1490 · Sacristy doorway lunette",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=70",
    content: `Set within the lunette of the Sacristy Portal, this <em>cartouche</em> inscription is the most formally ambitious lettering in the basilica. The letters are <strong>gilded lead inlay</strong> set into black Belgian marble — a technique known as <em>littera plumbea</em>. Each character is individually cast and hand-fitted. The phrase references the celestial aspirations of the doorway programme, which culminates in the <strong>Assumption relief</strong> above.`,
    transcription: [
      "PORTA · COELI"
    ],
    translation: "Gate of Heaven"
  }
];
