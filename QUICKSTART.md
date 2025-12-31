# Quick Start Guide - ARKSecurity IT Landing Page

## 🚀 Get Running in 2 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Your browser will automatically open to **http://localhost:3000**

## 📋 What You Have

Your landing page includes:

1. **Navbar** - Sticky navigation with mobile menu
2. **Hero Section** - Eye-catching headline with CTA buttons
3. **Services** - 6 core service offerings with icons
4. **Beauty Industry Focus** - Specific solutions for beauty businesses
5. **TWILIO Security** - SMS verification and communication
6. **Contact Form** - Lead capture form
7. **Footer** - Navigation links and company info

## 🎨 Customization Quick Tips

### Change Company Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#667eea',      // Purple/blue
  secondary: '#764ba2',    // Secondary purple
  dark: '#1a1a2e',         // Dark navy
  accent: '#00d4ff',       // Cyan
}
```

### Update Hero Headline
In `src/components/Hero.jsx`, find:
```jsx
<h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
  Custom Booking Websites<br />
  <span>Designed for Growth</span>
</h2>
```

### Add Your Logo
1. Place logo image in `public/` folder
2. Update Navbar.jsx:
```jsx
<img src="/your-logo.png" alt="ARKSecurity IT" className="h-10" />
```

### Update Contact Information
In `src/components/Contact.jsx` and `Footer.jsx`, update email addresses and links to your actual contact details.

## 🌐 Deployment (Choose One)

### Vercel (Fastest for React)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Select `dist` folder as source

## 📝 Next Steps

1. **Update Content**
   - Replace placeholder text with your actual value proposition
   - Add your company story
   - Update service descriptions

2. **Set Up Contact Form**
   - Connect to Emailjs, Formspree, or your own backend
   - See ROADMAP.md for integration options

3. **Add More Sections**
   - Testimonials
   - Pricing
   - FAQ
   - Blog

4. **Optimize for SEO**
   - Update meta tags in index.html
   - Add Google Analytics
   - Set up Google Search Console

5. **Test Everything**
   - Test all links
   - Test on mobile
   - Test contact form
   - Check site speed with Lighthouse

## 🛠️ Common Tasks

### Add a New Section
1. Create file: `src/components/MySectionName.jsx`
2. Build your component with Tailwind CSS
3. Import in `App.jsx`
4. Add to return statement

### Change a Service
Edit the `services` array in `src/components/Services.jsx`:
```javascript
const services = [
  {
    icon: '📅',
    title: 'Your Service Name',
    description: 'Your service description'
  },
  // ...
];
```

### Update Footer Links
Edit the footer links in `src/components/Footer.jsx` to point to your actual pages.

## 📊 Performance Tips

- Images: Keep under 200KB, use WebP when possible
- CSS: Tailwind CSS is already optimized
- JavaScript: Already minified in production build
- Target Lighthouse score: 90+

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Node modules broken?**
```bash
rm -r node_modules package-lock.json
npm install
```

**Build failing?**
```bash
npm run build -- --verbose
```

## 📚 Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

## 💡 Pro Tips

1. Use `#services`, `#industry`, `#contact` anchors for smooth scrolling
2. Tailwind CSS classes are in `index.html` via CDN - no build step needed
3. Mobile-first design - test on phone first
4. Alt text on images helps with SEO
5. Use semantic HTML: `<section>`, `<nav>`, `<footer>`

---

**Need help?** Check the ROADMAP.md for detailed implementation guides.

Happy building! 🎉
