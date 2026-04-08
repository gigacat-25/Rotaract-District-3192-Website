# Rotaract District 3192 | Web Portal

A premium, edge-native web portal for Rotaract District 3192, designed with the **Aqueous Civic** design system.

## 🚀 Technical Stack

- **Frontend:** Astro (SSG/SSR)
- **Styling:** Tailwind CSS v4 (Aqueous Civic Design System)
- **Backend:** Cloudflare Workers (Node.js compatibility mode)
- **Framework:** Hono.js
- **Database:** Cloudflare D1 (SQLite)
- **Storage:** Cloudflare R2
- **Auth:** JWT + OTP via ZeptoMail

## 🌊 Aqueous Civic Design System

The platform features a custom-engineered visual language:
- **Cinematic Depth:** Multi-layered `surface` architecture with no 1px borders.
- **Fluid Shadows:** Atmospheric elevations using `fluid-shadow` utility classes.
- **Micro-Animations:** Fade-in-up sequences and hover-state transformations.
- **Typography:** Space Grotesk (Headlines) / Manrope (Body).

## 🛠 Project Structure

```
/
├── public/              # Static assets (including waves.mp4 hero video)
├── src/
│   ├── components/      # Shared Astro components (Navbar, Footer, etc.)
│   ├── layouts/         # Primary Page Layouts
│   ├── mock/            # Phase 1 Mock Data (JSON)
│   └── pages/           # Application Routes
│       ├── admin/       # District Admin Control Center
│       ├── clubs/       # Club Directory & Profiles
│       ├── events/      # Event Portal
│       └── ...          # General Portal Pages
├── DESIGN.md            # Visual System Documentation
└── wrangler.toml        # Cloudflare Configuration
```

## 🚥 Build Phases

### Phase 1: Frontend Infrastructure (Current)
Complete UI/UX migration to Aqueous Civic. All pages are functional using mock data from `src/mock/`.

### Phase 2: Core Integration
Transition from mock data to live Cloudflare services (Workers, D1, R2).

## ⚡ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---
*Created for Rotaract District 3192 — Harnessing the power of youth leadership.*
