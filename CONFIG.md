# Configuration Reference - ARKSecurity IT

## 🎨 Colors & Styling

### Current Color Scheme
Located in `tailwind.config.js`:

```javascript
colors: {
  primary: '#667eea',      // Purple/Blue
  secondary: '#764ba2',    // Darker Purple
  dark: '#1a1a2e',         // Dark Navy
  accent: '#00d4ff',       // Cyan (highlight)
}
```

### Color Usage in Components

| Component | Primary Use | Accent Color |
|-----------|-------------|--------------|
| Navbar | Dark gradient | Cyan |
| Hero | Purple gradient | Cyan |
| Services | White bg | Gray borders |
| Industry | Pink gradient | Cyan |
| Twilio | White bg | Gray borders |
| Contact | Dark gradient | Cyan |
| Footer | Very dark | Gray text |

### Gradient Combinations Used
- Dark Navy → Dark Blue: `from-[#1a1a2e] to-[#16213e]`
- Purple → Dark Purple: `from-[#667eea] to-[#764ba2]`
- Pink → Red: `from-[#f093fb] to-[#f5576c]`
- Cyan highlight: `text-cyan-400` or `bg-cyan-400`

## 🎯 Responsive Breakpoints

Tailwind CSS default breakpoints:
- **sm**: 640px (tablets, small landscape)
- **md**: 768px (tablets, landscape)
- **lg**: 1024px (desktops)
- **xl**: 1280px (large desktops)

Example usage:
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
// Mobile: 1 column
// Tablet: 2 columns
// Desktop: 3 columns
```

## 📱 Mobile Optimization

Current mobile-first approach:
1. Base styles for mobile
2. `md:` prefix for tablet (768px+)
3. `lg:` prefix for desktop (1024px+)

Test widths:
- Mobile: 375px - 667px (iPhone)
- Tablet: 768px - 1024px (iPad)
- Desktop: 1024px+ (Desktop)

## 🔤 Typography

### Heading Sizes
- `text-5xl md:text-6xl` - Main hero heading
- `text-4xl md:text-5xl` - Section headings
- `text-2xl` - Card titles
- `text-xl` - Subtitle text
- `text-lg` - Body text

### Font Weights
- `font-bold` (700) - Headings
- `font-semibold` (600) - Emphasis
- Regular (400) - Body text

### System Font Stack
```css
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 
'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
```

## ⚙️ Navigation Configuration

### Navigation Links
Located in components (Navbar, Footer):

```javascript
Links:
- #home      → Hero section
- #services  → Services
- #industry  → Beauty Industry
- #twilio    → Security Features
- #contact   → Contact Form
```

### Mobile Menu Behavior
- Hamburger icon visible on screens < 768px
- Full menu visible on desktop
- Click toggles mobile menu
- Menu closes when link clicked

## 📋 Form Configuration

### Contact Form Fields
| Field | Type | Required | Validation |
|-------|------|----------|-----------|
| Name | text | Yes | Required |
| Email | email | Yes | Email format |
| Phone | tel | No | Optional |
| Business Name | text | Yes | Required |
| Message | textarea | Yes | Required |

### Current Behavior
- Form data logged to console
- Shows alert on submit
- Form resets after submission
- No backend integration yet

### To Connect Backend
Replace in Contact.jsx:
```javascript
// Current
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
  alert('Thank you...');
};

// Change to
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response
};
```

## 🎬 Animations & Transitions

### Hover Effects
- Cards: `hover:shadow-xl hover:-translate-y-2`
- Links: `hover:text-cyan-400 transition`
- Buttons: `hover:bg-cyan-500 hover:-translate-y-1`
- Icons: `group-hover:scale-110`

### Transition Properties
All use Tailwind's default `transition` class:
- Duration: 150ms
- Timing: ease

### Custom Animations
None currently - uses Tailwind utilities only.

## 📊 Layout Grid System

### Service Cards
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Gap: 32px (8 units)

### Footer Grid
```jsx
className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
```
- Mobile: 1 column (stacked)
- Desktop: 4 columns
- Gap: 48px

### Hero Stats
```jsx
className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
```
- Always 3 columns
- Small gap: 16px
- Max width: 42rem

## 🖼️ Image & Icon Configuration

### Icons Used
- Text emojis: `📅 📱 💳 📊 🔒 ⚙️`
- Size in services: `text-6xl` (24px)
- Size in hero stats: `text-3xl` (30px)

### To Add Real Images
1. Place in `public/` folder
2. Reference in JSX: `<img src="/image.png" alt="description" />`
3. Add responsive sizing: `className="max-w-full h-auto"`

## 🌐 SEO Configuration

### Meta Tags (in index.html)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="..." />
<title>ARKSecurity IT - Custom Booking Websites</title>
```

### To Improve SEO
1. Update meta description (160 chars)
2. Add Open Graph tags for social sharing
3. Add structured data (JSON-LD)
4. Create sitemap.xml
5. Add robots.txt
6. Set up canonical tags

## 🚀 Build & Deploy Configuration

### Vite Config (vite.config.js)
```javascript
{
  port: 3000,           // Dev server port
  open: true,           // Auto-open browser
  plugins: [react()]    // React plugin
}
```

### Tailwind Config (tailwind.config.js)
```javascript
{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { /* colors, spacing, etc */ },
  plugins: []
}
```

### PostCSS Config (postcss.config.js)
```javascript
{
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

## 📦 Build Output

### Development
```bash
npm run dev
```
- Runs on localhost:3000
- Hot reload enabled
- No minification

### Production
```bash
npm run build
```
- Minified CSS/JS
- In `dist/` folder
- Optimized for deployment

## 🔐 Environment Variables

### Current Setup
No .env file needed for MVP.

### For Production
Create `.env` file:
```
VITE_API_URL=https://api.example.com
VITE_TWILIO_ACCOUNT_SID=your_sid
VITE_TWILIO_AUTH_TOKEN=your_token
VITE_STRIPE_PUBLIC_KEY=your_key
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🎓 Component Props (if needed)

Current components don't use props - they're self-contained.

To make reusable:
```jsx
// Instead of:
const services = [/* array */];

// Use:
export default function Services({ services = defaultServices }) {
  // ...
}
```

## 📞 Integration Points Ready

### Contact Form
- Ready to connect email service
- See ROADMAP.md for options

### TWILIO Section
- Placeholder for API integration
- Endpoint: `/api/twilio/verify`

### Payment Processing
- Ready for Stripe/PayPal integration
- In Services description

### Analytics
- Ready for Google Analytics
- Ready for Hotjar

---

**Configuration Last Updated:** December 31, 2025
