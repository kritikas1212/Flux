# Flux - Adaptive AI Commerce Theme

> An intelligent Shopify theme built for adaptive commerce, designed to evolve with your brand.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Shopify](https://img.shields.io/badge/Shopify-Theme-96bf48.svg)

---

## 🎨 Overview

**Flux** is a modern, high-performance Shopify theme designed for tech-forward brands, lifestyle stores, and DTC businesses. Built with a futuristic design language and powered by TailwindCSS, Flux combines intelligent design with adaptive commerce features.

### ✨ Key Features

- **🚀 Lightning Fast**: Optimized for performance with minimal JavaScript
- **♿ Accessible**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **📱 Fully Responsive**: Beautiful on all devices from mobile to desktop
- **🎨 TailwindCSS Powered**: Modern utility-first CSS framework
- **🛒 Smart Cart**: Drawer-style cart with real-time updates
- **🔍 Predictive Search**: Fast product search with instant results
- **🎯 SEO Optimized**: Built-in structured data and meta tags
- **🌙 Dark Theme**: Sophisticated dark mode design system
- **⚡ AI-Ready**: Designed for future AI integrations

---

## 📦 What's Included

### Layouts
- `theme.liquid` - Main theme layout with comprehensive head setup

### Templates
- `index.json` - Homepage with hero and featured collection
- `product.liquid` - Product page with image gallery and variants
- `collection.liquid` - Collection page with sorting and filtering
- `cart.liquid` - Full cart page
- `page.liquid` - Static page template

### Sections
- `header.liquid` - Sticky header with navigation and cart
- `footer.liquid` - Footer with menus and newsletter
- `announcement-bar.liquid` - Promotional banner
- `hero.liquid` - Hero section with CTA buttons
- `featured-collection.liquid` - Product grid display

### Snippets
- `product-card.liquid` - Reusable product card component
- `cart-drawer-items.liquid` - Cart drawer content
- `mobile-nav.liquid` - Mobile navigation menu
- `social-share.liquid` - Social sharing buttons
- Icon components (menu, cart, search, account, etc.)

---

## 🚀 Installation

### Method 1: Theme Store (Coming Soon)
1. Visit the Shopify Theme Store
2. Search for "Flux"
3. Click "Add theme"
4. Customize and publish

### Method 2: Manual Upload
1. Download the theme ZIP file
2. Go to your Shopify Admin → Online Store → Themes
3. Click "Upload theme"
4. Select the ZIP file
5. Click "Publish" when ready

### Method 3: Development
```bash
# Clone the repository
git clone https://github.com/yourusername/flux-theme.git
cd flux-theme

# Install dependencies
npm install

# Build TailwindCSS
npm run build:css

# For development with watch mode
npm run dev

# Use Shopify CLI to push to your store
shopify theme push
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|--------|--------|
| `--color-bg-primary` | `#0A0D14` | Main background |
| `--color-bg-secondary` | `#111827` | Section background |
| `--color-text-primary` | `#E5E7EB` | Main text |
| `--color-text-secondary` | `#9CA3AF` | Muted text |
| `--color-accent` | `#3B82F6` | Accent blue |
| `--color-border` | `#1F2937` | Border lines |

### Typography
- **Headings**: DM Sans (Variable weights)
- **Body**: Inter (400, 500, 700)
- **Base Size**: 16-18px with 1.6 line height

### Gradients
```css
/* Primary Gradient */
background: linear-gradient(135deg, #6EE7B7 0%, #3B82F6 100%);

/* Hover Gradient */
background: linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%);
```

---

## ⚙️ Customization

### Theme Settings

Access theme settings from **Shopify Admin → Online Store → Themes → Customize**

#### Available Settings:
- **Logo & Branding**: Upload logo, set dimensions
- **Colors**: Customize all color tokens
- **Typography**: Choose fonts and sizing
- **Layout**: Set page width and spacing
- **Social Media**: Add social media links
- **Cart**: Configure cart behavior
- **Search**: Enable/disable predictive search

### Code Customization

#### Adding Custom CSS
```liquid
<!-- In layout/theme.liquid, before </head> -->
<style>
  .custom-class {
    /* Your custom styles */
  }
</style>
```

#### Adding Custom JavaScript
```liquid
<!-- In layout/theme.liquid, before </body> -->
<script>
  // Your custom JavaScript
</script>
```

---

## 🛠️ Development

### Prerequisites
- Node.js 14+
- npm or yarn
- Shopify CLI (optional but recommended)

### Local Development
```bash
# Install dependencies
npm install

# Watch TailwindCSS changes
npm run watch:css

# Build for production
npm run build:css
```

### TailwindCSS Configuration

The theme uses a custom Tailwind configuration in `tailwind.config.js`. Modify this file to:
- Add custom colors
- Extend spacing scales
- Add custom utilities
- Configure plugins

### File Structure
```
flux_theme/
├── assets/          # CSS, JS, and images
├── config/          # Theme settings
├── layout/          # Theme layouts
├── locales/         # Translation files
├── sections/        # Reusable sections
├── snippets/        # Reusable code snippets
├── templates/       # Page templates
├── package.json     # Node dependencies
├── tailwind.config.js
└── README.md
```

---

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

---

## ♿ Accessibility

Flux is built with accessibility in mind:

- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus management for modals
- ✅ Screen reader announcements
- ✅ Sufficient color contrast (WCAG AA)
- ✅ Skip to content link

---

## 🚀 Performance

### Optimization Features:
- Minimal JavaScript (< 10KB gzipped)
- Lazy-loaded images
- Preconnect to external domains
- Optimized web fonts
- No jQuery dependency
- Critical CSS inlined
- Efficient Liquid code

### Expected Performance:
- **Lighthouse Score**: 90+ (desktop)
- **Mobile Score**: 80+ (mobile)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

---

## 📝 Changelog

### Version 1.0.0 (Current)
- Initial release
- Core theme structure
- TailwindCSS integration
- Responsive design system
- Product, collection, and cart pages
- Mobile navigation
- Cart drawer
- Social sharing
- Accessibility features

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This theme is released under the [MIT License](LICENSE).

---

## 🙋 Support

Need help? Here's how to get support:

- 📧 **Email**: support@fluxtheme.com
- 💬 **GitHub Issues**: [Create an issue](https://github.com/yourusername/flux-theme/issues)
- 📖 **Documentation**: [Full documentation](https://docs.fluxtheme.com)

---

## 🌟 Credits

Built with:
- [TailwindCSS](https://tailwindcss.com)
- [Shopify Liquid](https://shopify.dev/docs/themes/liquid)
- [Google Fonts](https://fonts.google.com)

Typography:
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) by Colophon Foundry
- [Inter](https://fonts.google.com/specimen/Inter) by Rasmus Andersson

---

**Made with ❤️ for the Shopify community**

_Flux - Where commerce meets intelligence._

