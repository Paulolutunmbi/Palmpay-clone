# PalmPay Landing Page Clone

A responsive, pixel-perfect clone of the PalmPay website landing page built with React and Bootstrap 5. 

## 🚀 Features

- **Fully Responsive Layout:** Optimized for desktop, tablet, and mobile devices.
- **Modern UI/UX:** Matches the vibrant purple and gold color scheme of the original PalmPay brand.
- **Interactive Navbar:** Fixed, sticky navigation with a collapsible hamburger menu for mobile users.
- **Component-Driven Architecture:** Clean, maintainable codebase divided into reusable React components.
- **Trust & Validation:** Includes all recreated trust badges (CBN, NDIC, PCI DSS, etc.) and user review sections.

## 🛠️ Tech Stack

- **React 18** (via Vite)
- **Bootstrap 5.3** (Grid system, utility classes, and mobile navbar toggle)
- **Custom CSS** (Vanilla CSS for exact color matching, typography, and micro-adjustments)
- **Google Fonts** (Inter typeface for clean, modern readability)

## 📁 Folder Structure

```
palmpay-clone/
├── index.html           # Main entry point (includes Bootstrap CDN links)
├── src/
│   ├── App.jsx          # Main App component composing all sections
│   ├── index.css        # Global resets, fonts, and CSS variables
│   ├── App.css          # Component-specific styles
│   ├── main.jsx         # React DOM rendering
│   ├── assets/          # Project images and logos
│   └── components/      # React functional components
│       ├── Navbar.jsx
│       ├── HeroSection.jsx
│       ├── StatsBar.jsx
│       ├── FeaturesSection.jsx
│       ├── FreeTransfersSection.jsx
│       ├── SavingsSection.jsx
│       ├── DebitCardSection.jsx
│       ├── TrustSection.jsx
│       ├── ReviewsSection.jsx
│       ├── InsuranceSection.jsx
│       ├── CashbackSection.jsx
│       ├── CreditSection.jsx
│       ├── AppDownloadSection.jsx
│       ├── JoinBannerSection.jsx
│       └── Footer.jsx
├── explanation.txt      # Detailed breakdown of implementation decisions
└── README.md            # Project overview
```

## 💻 Setup & Installation

To run this project locally, follow these steps:

1. **Clone the repository** (or download the source code)
2. **Navigate to the project directory:**
   ```bash
   cd palmpay-clone
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Open your browser** and visit `http://localhost:5173` (or the port specified in your terminal).
