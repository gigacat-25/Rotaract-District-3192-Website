# Design System Document: District 3192 Civic Framework

## 1. Overview & Creative North Star
**The Creative North Star: "The Modern Statesman"**

This design system is built to bridge the gap between institutional authority and grassroots energy. We are moving away from the "clunky government portal" and toward a "high-end digital editorial" experience. 

To achieve this, we employ **The Modern Statesman** aesthetic: a philosophy that balances heavy, geometric typography (representing the weight of civic duty) with fluid, layered surfaces (representing the agility of youth service). We break the traditional "boxed-in" web layout by using intentional white space, overlapping elements, and depth-based separation rather than rigid lines. This is civic tech reimagined as a premium, inviting, and high-velocity platform.

---

## 2. Colors & Surface Philosophy

The palette is anchored in heritage but executed with modern depth. In both light and dark modes, we use tonal shifts to create a sense of architecture.

### Color Tokens
- **Primary (`#003F8A` / `primary`):** Our anchor. It represents trust and the Rotaract legacy.
- **Tertiary (`#F5A623` / `tertiary`):** The "Gold Standard." Used sparingly to draw the eye to critical actions and energy points.
- **Surface Hierarchy:** We utilize the `surface-container` tiers (Lowest to Highest) to define importance.

### The Rules of Engagement
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. We do not "box" content. Boundaries are created through background shifts (e.g., a `surface-container-low` card sitting on a `surface` background).
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers. An inner container should always be one tier "higher" or "lower" than its parent to create organic depth.
*   **The "Glass & Gradient" Rule:** For floating navigation or hero elements, use semi-transparent surface colors with a `20px` backdrop-blur. 
*   **Signature Textures:** Apply a subtle linear gradient from `primary` to `primary_container` on large CTAs. This adds "soul" and prevents the flat, "template" look.

---

## 3. Typography: The Editorial Voice

We use a high-contrast typographic scale to create an editorial feel. The pairing of **Space Grotesk** (Geometric/Bold) and **Manrope** (Modern/Functional) creates a dialogue between action and information.

*   **Display & Headlines (Space Grotesk):** These are your "statements." Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero sections. The geometric nature of Space Grotesk feels engineered and intentional.
*   **Titles & Body (Manrope):** Manrope provides a neutral, highly readable counterpoint. Use `body-lg` (1rem) for general content to maintain a premium, breathable feel.
*   **Labels (Manrope):** Use `label-md` in all-caps with increased letter-spacing (0.05em) for pill-shaped badges and small metadata.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are a fallback, not a primary tool. We convey hierarchy through **Tonal Layering**.

*   **The Layering Principle:** Place `surface-container-lowest` elements on a `surface-container-low` background to create a soft, natural "lift."
*   **Ambient Shadows:** When an element must float (e.g., a Modal or FAB), use a shadow color tinted with the `on-surface` value at 6% opacity. 
    *   *Shadow Spec:* `0px 12px 32px rgba(x, y, z, 0.06)`
*   **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.
*   **Glassmorphism:** Use `surface_variant` at 70% opacity with a blur effect for mobile navigation bars. This allows the civic energy (content) to bleed through the UI.

---

## 5. Components

### Buttons
*   **Primary:** Rounded (8px), using the signature `primary` to `primary_container` gradient. 
*   **Secondary:** Pill-shaped (`full` roundedness) with a `ghost-border` and `primary` text.
*   **States:** On hover, increase the elevation by shifting the background one tier higher (e.g., from `primary` to `primary_fixed_dim`).

### Cards & Lists
*   **Standard Card:** `surface-container-low` background, `0.5rem` (8px) corners. 
*   **Constraint:** Forbid the use of divider lines. Separate list items using `1rem` of vertical white space or alternating backgrounds between `surface-container-lowest` and `surface-container-low`.

### Pill Badges
*   Used for status and categories.
*   **Style:** `full` roundedness, `label-sm` typography, using `secondary_container` backgrounds to maintain a subtle, professional look.

### Civic-Specific Components
*   **Impact Metric:** Large `display-md` numbers paired with `label-md` descriptors, placed on a `surface-bright` container to highlight District achievements.
*   **Action Sheet (Mobile):** A `surface-container-highest` bottom-sheet with a `24px` top corner radius for mobile-first engagement.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. A left-aligned headline with a right-aligned image creates a dynamic, high-end feel.
*   **Do** leverage "Negative Space" as a functional element. Let the content breathe.
*   **Do** use `tertiary` (Gold) specifically for success states or "Join Now" triggers.

### Don't
*   **Don't** use pure black (#000) for text or backgrounds. Use the `on-surface` and `surface` tokens to maintain tonal depth.
*   **Don't** use 1px dividers to separate content. Use whitespace or color blocks.
*   **Don't** use standard "drop shadows." If it looks like a default Photoshop shadow, it’s too heavy. Keep it ambient and tinted.
*   **Don't** crowd the mobile viewport. Stick to a single-column layout with generous `1.5rem` side margins.
