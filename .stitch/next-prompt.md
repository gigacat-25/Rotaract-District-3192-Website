# Target Screen
/ (Homepage)

# Description
An improved, high-energy, and dynamic homepage for Rotaract District 3192. 
Key features:
- A high-impact hero section with cinematic typography and floating UI elements.
- An interactive "Impact Ribbon" showing real-time stats with counting animations.
- A "District Spotlight" section featuring clubs and events in an editorial bento grid.
- A "Live Feed" or "Upcoming Action" section that feels alive.
- Micro-interactions on every card and button.

# Design Guidelines
Must use the NEW Light Palette:
- Primary: #003366 (Deep Navy)
- Secondary: #546E7A (Slate)
- Tertiary: #894600 (Burnt Orange)
- Background: #F8F9FA (Off-White)
- Surface: #F8F9FA
- Surface Container tiers: #FFFFFF (Lowest), #F1F3F5 (Low), #E9ECEF (Mid), #DEE2E6 (High).

Font: Space Grotesk for Headlines, Manrope for Data/Body.
Theme: "The Modern Statesman (Light Edition)".
Aesthetic: "Premium Digital Magazine". No borders, use background depth for separation. 
Dynamic: Use GSAP for scroll-triggered entrance animations. Use Framer Motion for hover states and transitions.
The UI should feel "Alive" and "Fluid".

# Technical Requirements
- Use Tailwind v4 classes.
- Use Semantic variables defined in globals.css (e.g. text-on-surface, bg-surface-container-low).
- DO NOT use hardcoded dark colors from the previous theme.
- Implement glassmorphism for the navbar and floating elements using the light surface colors.
