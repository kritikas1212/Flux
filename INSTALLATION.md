# Flux Theme - Installation & Setup Guide

Complete guide for installing and customizing the Flux Shopify theme.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation Methods](#installation-methods)
3. [Initial Setup](#initial-setup)
4. [Customization](#customization)
5. [Development Workflow](#development-workflow)
6. [Troubleshooting](#troubleshooting)

---

## ✅ Prerequisites

Before installing Flux, ensure you have:

- A Shopify store (any plan)
- Admin access to your Shopify store
- (For development) Node.js 14+ installed
- (For development) Shopify CLI installed (optional)

---

## 🚀 Installation Methods

### Method 1: Direct Upload (Recommended for Most Users)

1. **Download the theme files** as a ZIP archive

2. **Log in to your Shopify Admin**
   - Go to `Online Store` → `Themes`

3. **Upload the theme**
   - Click `Add theme` → `Upload zip file`
   - Select the `flux_theme.zip` file
   - Wait for the upload to complete

4. **Preview the theme**
   - Click `Customize` to preview and edit
   - Or click `Actions` → `Preview` to see it on your store

5. **Publish when ready**
   - Click `Actions` → `Publish` to make it live

### Method 2: Using Shopify CLI (For Developers)

```bash
# Install Shopify CLI (if not already installed)
npm install -g @shopify/cli @shopify/theme

# Navigate to the theme directory
cd flux_theme

# Log in to your store
shopify login --store your-store-name.myshopify.com

# Push theme to your store
shopify theme push

# Or push to a development theme
shopify theme push --development

# Serve theme for live development
shopify theme dev
```

### Method 3: GitHub Integration

1. **Fork or clone the repository**
   ```bash
   git clone https://github.com/yourusername/flux-theme.git
   cd flux-theme
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the CSS**
   ```bash
   npm run build:css
   ```

4. **Use Shopify CLI** to push to your store (see Method 2)

---

## ⚙️ Initial Setup

### 1. Configure Theme Settings

After installing, go to `Customize` in your theme:

#### Logo & Branding
- Upload your logo under `Theme Settings` → `Logo`
- Set logo width (default: 150px)
- Upload favicon (32x32px)

#### Colors
- Customize color palette under `Theme Settings` → `Colors`
- Default palette is futuristic dark theme
- All colors support hex values

#### Typography
- Select fonts under `Theme Settings` → `Typography`
- Choose heading and body fonts
- Adjust font sizes with scale sliders

#### Social Media
- Add social links under `Theme Settings` → `Social Media`
- Facebook, Instagram, Twitter, Pinterest, YouTube, TikTok supported

### 2. Set Up Navigation

#### Main Menu
1. Go to `Navigation` in Shopify Admin
2. Edit `Main menu`
3. Add your main navigation links
4. Supports dropdown menus (add child items)

#### Footer Menu
1. Create or edit `Footer` menu
2. Add links for About, Contact, Policies, etc.

### 3. Configure Homepage

The homepage uses sections. To customize:

1. Go to `Online Store` → `Themes` → `Customize`
2. Edit existing sections:
   - **Hero Section**: Update heading, image, CTAs
   - **Featured Collection**: Select collection to display
3. Add more sections:
   - Click `Add section`
   - Choose from: Rich Text, Image Banner, Featured Collection

### 4. Product Setup

For optimal display:

- **Product Images**: Minimum 1000x1000px (square recommended)
- **Multiple Images**: Add 2-4 images per product for hover effect
- **Variants**: Color variants display as swatches
- **Descriptions**: Use rich formatting for better presentation

### 5. Collection Setup

1. Create collections in Shopify Admin
2. Add collection images (1200x800px recommended)
3. Write compelling collection descriptions
4. Products display in 4-column grid on desktop

---

## 🎨 Customization

### Editing Colors

#### Via Theme Editor (No Code)
1. `Customize` → `Theme Settings` → `Colors`
2. Click color swatches to change
3. Changes apply instantly

#### Via Code (Advanced)
Edit `assets/theme.css`:

```css
:root {
  --color-bg-primary: #0A0D14;
  --color-accent: #3B82F6;
  /* Add your custom colors */
}
```

### Editing Fonts

#### Via Theme Editor
1. `Customize` → `Theme Settings` → `Typography`
2. Select from Shopify font library
3. Adjust size scales

#### Via Code
Edit `layout/theme.liquid`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Update `tailwind.config.js`:

```js
fontFamily: {
  sans: ["Your Font", "sans-serif"],
}
```

### Adding Custom CSS

Add to `assets/theme.css` (before TailwindCSS builds):

```css
/* Your custom styles */
.my-custom-class {
  /* styles */
}
```

Then rebuild:
```bash
npm run build:css
```

### Adding Custom JavaScript

Add to `assets/theme.js` or create new JS file:

```javascript
// Your custom JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Your code here
});
```

### Creating Custom Sections

1. Create new file in `/sections/` folder
2. Name it `your-section-name.liquid`
3. Add Liquid code and schema:

```liquid
<section>
  <!-- Your HTML -->
</section>

{% schema %}
{
  "name": "Your Section",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading"
    }
  ],
  "presets": [
    {
      "name": "Your Section"
    }
  ]
}
{% endschema %}
```

---

## 💻 Development Workflow

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flux_theme
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start TailwindCSS watch mode**
   ```bash
   npm run watch:css
   ```
   Leave this running while developing

4. **Start Shopify dev server**
   ```bash
   shopify theme dev
   ```
   Opens live preview with hot reload

### Making Changes

1. **Edit Liquid files** in `sections/`, `templates/`, `snippets/`
2. **Edit styles** in `assets/theme.css`
3. **Edit JavaScript** in `assets/theme.js`
4. Changes sync automatically with `shopify theme dev`

### Building for Production

Before deploying:

```bash
# Build minified CSS
npm run build:css

# Push to store
shopify theme push
```

### Version Control

Recommended `.gitignore` is included. Commit workflow:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

---

## 🔧 Troubleshooting

### CSS Not Loading

**Issue**: Styles not appearing after upload

**Solution**:
1. Rebuild CSS: `npm run build:css`
2. Verify `assets/theme.min.css` exists
3. Clear browser cache
4. Check theme editor for CSS errors

### Images Not Displaying

**Issue**: Product/section images broken

**Solution**:
1. Verify image files are uploaded to Shopify
2. Check image URLs in theme editor
3. Use Shopify's image CDN (automatic)
4. Ensure images are under 20MB

### Cart Not Working

**Issue**: Add to cart not functioning

**Solution**:
1. Check `assets/theme.js` is loaded
2. Clear browser cache
3. Check browser console for errors
4. Verify cart routes in Liquid

### Search Not Working

**Issue**: Search returns no results

**Solution**:
1. Ensure products are published
2. Check search settings in theme editor
3. Verify predictive search is enabled
4. Reindex products in Shopify Admin

### Mobile Menu Not Opening

**Issue**: Hamburger menu not responsive

**Solution**:
1. Clear cache
2. Check JavaScript console for errors
3. Verify `theme.js` is loading
4. Test in incognito mode

### Slow Performance

**Issue**: Theme loading slowly

**Solution**:
1. Optimize images (use Shopify CDN)
2. Minimize third-party apps
3. Enable lazy loading (already included)
4. Check Shopify's performance recommendations

---

## 📞 Getting Help

### Documentation
- Full docs: [Link to docs]
- Shopify docs: https://shopify.dev/docs/themes

### Support Channels
- GitHub Issues: [Create issue]
- Email: support@fluxtheme.com
- Community forum: [Link]

### Useful Resources
- [Shopify Liquid Cheat Sheet](https://www.shopify.com/partners/shopify-cheat-sheet)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Shopify Theme Store Requirements](https://shopify.dev/docs/themes/store/requirements)

---

## 🎯 Next Steps

After installation:

1. ✅ Upload logo and favicon
2. ✅ Configure colors and fonts
3. ✅ Set up navigation menus
4. ✅ Customize homepage sections
5. ✅ Add products with quality images
6. ✅ Create collections
7. ✅ Test checkout process
8. ✅ Preview on mobile devices
9. ✅ Review accessibility
10. ✅ Publish theme

---

**Congratulations! Your Flux theme is ready to go.** 🎉

For questions or support, reach out via GitHub or email.

_Happy selling!_

