# ARKSecurity IT - Landing Page

Professional landing page for ARKSecurity IT, LLC - Custom booking websites and admin workflow automation for beauty and service businesses.

## Features

- **Custom Booking Systems** - Intelligent scheduling with staff availability and service duration management
- **Admin Workflow Automation** - Automate confirmations, reminders, scheduling, and invoicing
- **Secure Payments** - Stripe/PayPal integration with TWILIO SMS verification
- **Beauty Industry Focus** - Built specifically for salons, spas, barbershops, and wellness centers
- **Analytics & Reporting** - Track revenue, client trends, and business metrics
- **Responsive Design** - Works perfectly on all devices

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will open at http://localhost:3000

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         - Navigation header with mobile menu
│   ├── Hero.jsx           - Hero section with CTA
│   ├── Services.jsx       - Core services showcase
│   ├── Industry.jsx       - Beauty industry focus & features
│   ├── TwilioSection.jsx  - SMS verification & communication
│   ├── Contact.jsx        - Contact form
│   └── Footer.jsx         - Footer with links
├── App.jsx                - Main app component
├── main.jsx               - React entry point
└── index.css              - Tailwind styles
```

## Customization

### Update Company Information
- **Navbar.jsx** - Update company name and navigation links
- **Hero.jsx** - Update headline and value proposition
- **Footer.jsx** - Update contact info and links

### Colors & Styling
- Edit `tailwind.config.js` for custom colors
- Update gradient colors in component `className` attributes

### Contact Form
- **Contact.jsx** - Update form destination and email service integration

## Deployment

### Vercel (Recommended for React)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
git add dist
git commit -m "Deploy to GitHub Pages"
git push
```

## Environment Variables

Create a `.env` file for sensitive data:
```
VITE_API_URL=your_api_endpoint
VITE_TWILIO_ACCOUNT_SID=your_twilio_sid
```

## Features to Implement Next

- [ ] Blog section with beauty industry tips
- [ ] Pricing table for different packages
- [ ] Testimonials/case studies carousel
- [ ] Live chat integration
- [ ] Newsletter signup form
- [ ] Portfolio/showcase of completed projects
- [ ] Mobile app details
- [ ] Integration examples (Stripe, TWILIO, etc.)

## Support & Contact

For questions or to customize this landing page for your business, reach out to ARKSecurity IT.

---

Built with ❤️ for service businesses in the beauty industry
