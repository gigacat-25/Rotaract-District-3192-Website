# Design System Strategy: Aqueous Civic

## 1. Overview & Creative North Star
**Creative North Star: "The Fluid Authority"**

This design system is a departure from the rigid, boxy layouts of traditional civic platforms. It draws inspiration from the dual nature of water: its relentless energy and its grounding stability. We are moving away from "template" design toward a high-end editorial experience that feels custom, intentional, and premium. 

To achieve "The Fluid Authority," we break the standard grid through **intentional asymmetry**. Layouts should feel like they are floating on a tide—overlapping elements, organic curves, and high-contrast typography scales create a sense of motion while maintaining a professional, trustworthy foundation. This is not just a UI; it is a digital ecosystem that breathes.

---

## 2. Colors & Surface Architecture
The palette is rooted in the deep depths of the ocean (`primary: #174174`) and the clarity of sea foam. 

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined solely through background color shifts or tonal transitions.
*   *Implementation:* Use a `surface-container-low` section sitting on a `surface` background to define a new content area.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine paper or frosted glass. Use the `surface-container` tiers to create "nested" depth:
*   **Base:** `surface` (#f8f9fa)
*   **Sectioning:** `surface-container-low` (#f3f4f5)
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) for high-contrast "lift."
*   **Emphasis Areas:** `surface-container-high` (#e7e8e9) for secondary utility areas.

### The "Glass & Gradient" Rule
To elevate the experience beyond flat design, floating elements (modals, dropdowns, sticky navs) must utilize **Glassmorphism**.
*   **Recipe:** Use `surface` at 80% opacity + 20px Backdrop Blur.
*   **Signature Textures:** Apply a linear gradient from `primary` (#174174) to `primary-container` (#33588d) for Hero CTAs. This adds a "visual soul" and three-dimensional depth that flat fills cannot achieve.

---

## 3. Typography
Our typography pairing balances the "Civic" (Professional/Modern) with the "Aqueous" (Fluid/Editorial).

*   **Display & Headlines (Space Grotesk):** This is our "Architectural" voice. Space Grotesk’s geometric but quirky terminals provide a tech-forward, professional feel. Use `display-lg` for impactful, asymmetrical hero statements.
*   **Body & Labels (Manrope):** Our "Humanist" voice. Manrope provides exceptional readability at smaller scales.
*   **Editorial Contrast:** Use extreme scale differences. Pair a `display-md` headline with a `label-md` uppercase subline to create a high-end, magazine-style hierarchy.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than structural shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The subtle delta in hex values creates a natural, soft lift.
*   **Ambient Shadows:** If an element must float (e.g., a FAB or Popover), use a "Sea Mist" shadow:
    *   *Blur:* 32px to 48px.
    *   *Opacity:* 4% to 6%.
    *   *Color:* Tint the shadow with `primary` (#174174) instead of pure black to maintain color harmony.
*   **The "Ghost Border" Fallback:** If a container needs more definition (e.g., in high-glare environments), use the `outline-variant` token at **15% opacity**. Never use 100% opaque lines.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), `md` (12px) roundedness, no border.
*   **Secondary:** `surface-container-highest` background with `on-surface` text.
*   **Tertiary:** Ghost style; text-only with a subtle `surface-variant` hover state.
*   **Fluidity:** Buttons should have a generous horizontal padding (e.g., 24px) to feel substantial and "organic."

### Cards & Lists
*   **Forbid Dividers:** Do not use lines to separate list items. Use 16px-24px of vertical white space or alternating tonal shifts (`surface` to `surface-container-low`).
*   **Shape:** Use `lg` (1rem) corner radius for cards. Top-left and bottom-right corners can occasionally be "over-rounded" (e.g., 2rem) to mimic fluid, organic shapes.

### Input Fields
*   **Style:** Minimalist. Use a `surface-container-low` fill with a `sm` (4px) bottom-only "active" indicator in `primary`. 
*   **States:** On focus, the background shifts to `surface-container-lowest` with a subtle `primary` glow (ambient shadow).

### Signature Component: The "Aqueous Wave" Progress
*   For loading states or progress bars, use a fluid, non-linear animation that mimics a wave swell rather than a standard sliding bar.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Negative Space:** Allow content to "float" with generous margins (32px+).
*   **Use Organic Curves:** Apply `xl` (1.5rem) rounding to large image containers to maintain the fluid theme.
*   **Layer Surfaces:** Think in 3D. A surface-on-surface approach is always more premium than a line-on-surface approach.

### Don’t:
*   **Don't use 1px lines:** High-contrast borders break the "fluid" illusion and feel dated.
*   **Don't over-shadow:** If the background color shift is clear enough, remove the shadow entirely.
*   **Don't crowd the UI:** Water needs room to flow. If a layout feels tight, increase the `surface` padding.
*   **Don't use pure black:** Use `on-surface` (#191c1d) for text to keep the interface feeling soft and sophisticated.