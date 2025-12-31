# Design System - ARKSecurity IT

## 🎨 Visual Design Specifications

Complete design specifications for maintaining consistency across the ARKSecurity IT landing page.

---

## 📐 Color Palette

### Primary Colors
```
Name: Primary Purple
Hex: #667eea
RGB: rgb(102, 126, 234)
HSL: hsl(230, 61%, 66%)
Usage: Gradients, CTAs, accents
```

```
Name: Secondary Purple
Hex: #764ba2
RGB: rgb(118, 75, 162)
HSL: hsl(270, 37%, 47%)
Usage: Gradient end, dark accents
```

### Neutral Colors
```
Name: Dark Navy
Hex: #1a1a2e
RGB: rgb(26, 26, 46)
HSL: hsl(240, 28%, 14%)
Usage: Dark backgrounds, headers, text
```

```
Name: Dark Blue (Slightly Lighter)
Hex: #16213e
RGB: rgb(22, 33, 62)
HSL: hsl(220, 48%, 16%)
Usage: Gradient transitions
```

### Accent Colors
```
Name: Cyan
Hex: #00d4ff
RGB: rgb(0, 212, 255)
HSL: hsl(186, 100%, 50%)
Usage: Highlights, hover states, CTAs
```

```
Name: Pink
Hex: #f093fb
RGB: rgb(240, 147, 251)
HSL: hsl(290, 99%, 78%)
Usage: Industry section background
```

```
Name: Red/Pink
Hex: #f5576c
RGB: rgb(245, 87, 108)
HSL: hsl(355, 89%, 65%)
Usage: Industry gradient end
```

### Tailwind Mapped Colors
- `text-cyan-400` = #22d3ee (brighter cyan)
- `text-cyan-300` = #06b6d4 (light cyan)
- `bg-gray-50` = #f9fafb (very light gray)
- `bg-gray-100` = #f3f4f6 (light gray)
- `border-gray-200` = #e5e7eb
- `text-gray-600` = #4b5563
- `text-gray-700` = #374151
- `text-gray-400` = #9ca3af

---

## 🎯 Typography

### Font Family
System font stack (no custom fonts needed):
```css
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'
```

### Heading Hierarchy

#### H1 (Hero Main)
- Size: 48px (mobile) → 64px (desktop)
- Weight: Bold (700)
- Line-height: 1.2 (tight)
- Color: White on dark/gradient
- Letter-spacing: Normal
- Example: "Custom Booking Websites Designed for Growth"

#### H2 (Section Titles)
- Size: 36px (mobile) → 48px (desktop)
- Weight: Bold (700)
- Line-height: 1.3
- Color: Dark (#1a1a2e) or White (on dark bg)
- Letter-spacing: Normal
- Example: "Our Core Services"

#### H3 (Card/Subsection Titles)
- Size: 20px
- Weight: Bold (700)
- Line-height: 1.4
- Color: Dark (#1a1a2e) or White
- Letter-spacing: Normal
- Example: "Custom Booking Systems"

#### H4 (Small Headings)
- Size: 18px
- Weight: Semibold (600)
- Line-height: 1.4
- Color: Dark or White
- Letter-spacing: Normal

### Body Text
- Size: 16px (default)
- Weight: Regular (400)
- Line-height: 1.6 (relaxed)
- Color: Gray-700 (#374151) on light, White opacity 95% on dark
- Letter-spacing: Normal

### Small Text
- Size: 12px - 14px
- Weight: Regular (400) or Semibold (600)
- Color: Gray-600 or lighter
- Usage: Labels, captions, fine print

### Accent Text
- Size: Varies
- Weight: Semibold (600)
- Color: Cyan (#00d4ff) or Primary (#667eea)
- Transform: Uppercase with letter-spacing

---

## 📏 Spacing System

### Tailwind Spacing Units
Base unit = 4px

```
1 = 4px
2 = 8px
3 = 12px
4 = 16px
5 = 20px
6 = 24px
8 = 32px
12 = 48px
16 = 64px
```

### Padding Usage
- Container padding: `px-5` (20px mobile, responsive)
- Card padding: `p-8` or `p-10` (32px or 40px)
- Section padding: `py-24` or `py-32` (96px or 128px)
- Small elements: `p-4` (16px)

### Margin Usage
- Section gaps: `gap-8` or `gap-12` (32px or 48px)
- Component gaps: `gap-4` or `gap-6` (16px or 24px)
- Heading margins: `mb-4` to `mb-16` (16px to 64px)

### Border Radius
- Cards: `rounded-lg` (8px) or `rounded-xl` (12px)
- Buttons: `rounded-full` (9999px)
- Images: `rounded` (4px) or `rounded-lg` (8px)

---

## 🔘 Button Styles

### Primary CTA Button
```jsx
className="bg-cyan-400 text-[#1a1a2e] px-10 py-4 rounded-full 
           font-bold uppercase tracking-widest hover:bg-cyan-500 
           transition transform hover:-translate-y-1 shadow-lg"
```
- Background: Cyan (#22d3ee)
- Text: Dark navy
- Padding: 40px horizontal, 16px vertical
- Radius: Full
- Hover: Lift up (-translate-y-1), slightly darker cyan
- Animation: Smooth transform

### Secondary Button
```jsx
className="border-2 border-cyan-400 text-white px-10 py-4 rounded-full 
           font-bold uppercase tracking-widest hover:bg-cyan-400 
           hover:text-[#1a1a2e] transition"
```
- Border: 2px cyan
- Text: White
- Hover: Fill with cyan, text to dark
- Animation: Smooth transition

### Subtle Button
```jsx
className="hover:text-cyan-400 transition"
```
- No background
- Text color changes on hover
- Used in navigation

---

## 📦 Component Styles

### Cards
```jsx
className="bg-gray-100 p-10 rounded-lg hover:shadow-xl 
           hover:-translate-y-2 transition border border-gray-200"
```
- Background: Light gray (#f3f4f6)
- Padding: 40px
- Radius: 8px
- Border: 1px gray-200
- Hover: Lift up 8px, add shadow

### Gradient Cards
```jsx
className="bg-gradient-to-br from-gray-50 to-gray-100"
```
- Subtle gradient left-to-right
- Adds visual depth

### Section Containers
```jsx
className="max-w-6xl mx-auto px-5"
```
- Max width: 1536px (24rem)
- Auto margins (centered)
- Horizontal padding: 20px

---

## 🌈 Gradient Combinations

### Purple Gradient (Hero & Sections)
```jsx
className="bg-gradient-to-r from-[#667eea] to-[#764ba2]"
```
- Left: Primary purple
- Right: Secondary purple
- Direction: Left to right
- Use: Hero, CTAs, call-out sections

### Dark Gradient (Navbar & Footer)
```jsx
className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e]"
```
- Left: Dark navy
- Right: Dark blue
- Direction: Left to right
- Use: Header, footer, dark sections

### Pink Gradient (Industry)
```jsx
className="bg-gradient-to-r from-[#f093fb] to-[#f5576c]"
```
- Left: Pink
- Right: Red-pink
- Direction: Left to right
- Use: Special highlight sections

---

## ✨ Visual Effects

### Hover Effects
```jsx
// Card lift
hover:-translate-y-2 transition

// Link color change
hover:text-cyan-400 transition

// Button lift with color
hover:bg-cyan-500 transform hover:-translate-y-1
```

### Transitions
- Duration: 150ms (Tailwind default)
- Timing: Ease (ease-in-out)
- Properties: All
- Usage: Applied to interactive elements

### Shadows
```jsx
// Subtle shadow (default)
shadow

// Medium shadow (cards)
shadow-lg

// Large shadow (on hover)
shadow-xl

// No shadow
shadow-none
```

### Icons
- Format: Emoji/Unicode
- Size: `text-5xl` to `text-6xl` in services (80px to 96px)
- Color: Inherit from text color
- Responsive: Resize with text-size classes

---

## 📱 Responsive Behavior

### Breakpoints
- **Mobile First:** Base styles apply to all
- **sm** (640px): Tablets portrait
- **md** (768px): Tablets landscape
- **lg** (1024px): Desktops
- **xl** (1280px): Large desktops

### Common Patterns

#### Single to Multiple Columns
```jsx
// Mobile: 1 col, Tablet: 2 col, Desktop: 3 col
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

#### Hide/Show Elements
```jsx
// Hide on mobile, show on desktop
className="hidden md:block"

// Show on mobile, hide on desktop
className="md:hidden"
```

#### Font Size Scaling
```jsx
// 36px mobile, 48px desktop
className="text-4xl md:text-5xl"
```

#### Padding Scaling
```jsx
// 20px mobile, scales down on larger
className="px-5 md:px-8 lg:px-12"
```

---

## ♿ Accessibility Guidelines

### Color Contrast
- Text on light: Dark gray (#374151) minimum
- Text on dark: White or light gray minimum
- Links: Color + underline/hover for visibility
- Target: WCAG AA compliance (4.5:1 for text)

### Focus States
- All interactive elements need visible focus
- Focus ring: 2px solid cyan (#00d4ff)
- Or: outline visible on :focus state

### Text
- Minimum size: 14px for body text
- Line-height: 1.5-1.6 for readability
- Avoid pure black (#000000) on pure white
- Use #1a1a2e on #ffffff instead

### Interactive Elements
- Minimum touch target: 44x44px
- Buttons should be obvious
- Links should be underlined or colored
- Hover states should be visible

---

## 🎬 Animation Guidelines

### Hover Animations
- Keep duration short: 150-300ms
- Use ease-in-out timing
- Animate transform or color, not multiple properties

### Avoid
- Autoplay animations (unless critical)
- Flashing content (>3 flashes/second)
- Slow animations (>500ms for hover)
- Multiple simultaneous animations

### Smooth Scrolling
- Already enabled in index.css
- Auto scroll on anchor link click
- Smooth behavior: `scroll-behavior: smooth`

---

## 🎨 Design Tokens Summary

```javascript
// Colors
Primary: #667eea
Secondary: #764ba2
Dark: #1a1a2e
Accent: #00d4ff

// Typography
Font: System stack
H1: 48-64px bold
H2: 36-48px bold
H3: 20px bold
Body: 16px regular
Line-height: 1.4-1.6

// Spacing
Base unit: 4px
Section: 24-32px padding
Container: max-w-6xl

// Radius
Cards: 8-12px
Buttons: Full (9999px)

// Effects
Transition: 150ms ease
Shadow: lg-xl on hover
Lift: -8px transform
```

---

## 🚀 Extending the Design

### Adding New Colors
1. Update `tailwind.config.js`
2. Use Tailwind color naming
3. Test contrast ratios
4. Update this document

### Creating New Components
1. Follow spacing patterns
2. Use existing color palette
3. Match typography hierarchy
4. Include hover/focus states
5. Test responsive behavior

### Modifying Gradients
1. Choose from defined gradients
2. Or create new direction (to-r, to-b, etc.)
3. Test on both light and dark backgrounds
4. Ensure text contrast

---

**Design System Last Updated:** December 31, 2025
**Status:** Complete & Ready for Implementation
