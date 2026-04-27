#  The Shattered Riffs – Rock Band Landing Page

A fully responsive landing page for a fictional rock band, built with semantic HTML5 and CSS3.

---

##  How to Run

1. Clone or download the project
2. Open `index.html` in your browser — no installation required

---

##  Project Structure

```
├── assets
│   ├── css
│   │   └── style.css
│   ├── icons
│   │   └── logo.ico
│   ├── img
│   │   ├── img-1.jpg ... img-10.jpg
│   │   └── guide.png
│   └── js
│       └── main.js
├── index.html
└── README.md
```

---

## Sections

| Section | Description |
|---|---|
| **Header** | Fixed top bar with logo and navigation links |
| **Hero** | Full-viewport image with overlay text and CTA button |
| **Events** | Upcoming tour dates in a styled `<table>` with Buy Now buttons |
| **About** | Band description, influences list, and photo in a CSS Grid layout |
| **Media** | 7-image gallery + embedded YouTube video in a responsive grid |
| **Footer** | 4-column link grid, social links, and copyright |

---

##  Design Decisions

- **Color palette:** `#0b0b0f` (dark background), `#e63946` (red accent), `#f5f5f5` (light text)
- **Typography:** Arial/Helvetica — bold, uppercase headings for a rock editorial feel
- **Layout:** CSS Grid for About, Media, and Footer sections; Flexbox for Header and nav
- **Hero:** Full-height background image with a dark overlay and centered call-to-action
- **Accent borders:** Red (`#e63946`) used on the band photo, video iframe, and footer top border

---

##  Features Implemented

- Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Responsive design with media queries (mobile breakpoint at 768px)
- Hamburger menu button (`.menu-toggle`) for mobile — JS-ready
- Events table with styled `Buy Now` buttons
- Unordered list of band influences
- CSS Grid media gallery with embedded YouTube iframe
- Hover transitions on nav links, buttons, and footer links
- Social links in footer (Instagram, Spotify, YouTube)
- Dynamic copyright year via `<span id="year">` (populated by `main.js`)

---

## Responsive Behavior

- **Desktop (>768px):** 4-column footer, 4-column media grid, side-by-side About layout
- **Mobile (≤768px):** Single-column stacking, hamburger menu replaces nav, 2-column media grid with full-width video

---

## Tech Stack

- HTML5
- CSS3 (Flexbox + Grid)
- Vanilla JavaScript (menu toggle, dynamic year)

---


