# Exchron Landing Page - Static Website

A static HTML/CSS/JS version of the Exchron landing page, converted from Next.js for GitHub Pages hosting.

## Overview

Exchron is an exoplanet exploration platform that uses machine learning to classify transit data. This landing page showcases the platform's features, including:

- **Playground**: Pre-trained models for instant exoplanet classification
- **Classroom**: Interactive learning environment for building custom ML models
- **Key Features**: Interactive models, real-time training, data visualization, and more

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactivity
├── favicon.ico         # Website icon
├── public/             # Assets and images
│   ├── placeholder-logo.svg
│   ├── dashboard-placeholder.svg
│   ├── arrow-outward.svg
│   ├── team-circle.svg
│   ├── profile-placeholder.svg
│   └── ...other SVG assets
└── README.md           # This file
```

## Features

### Interactive Elements
- Smooth scrolling navigation
- Animated FAQ accordion
- Hover effects and transitions
- Responsive design for all devices
- Intersection Observer animations

### Design Features
- Modern gradient backgrounds
- Clean typography using Inter font
- Card-based layout components
- Professional color scheme
- Mobile-first responsive design

### Performance Optimizations
- Minimal JavaScript footprint
- CSS animations instead of JS animations
- Lazy loading for images
- Optimized asset loading

## GitHub Pages Deployment

### Quick Setup

1. **Upload to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Exchron static website"
   git branch -M main
   git remote add origin https://github.com/yourusername/exchron-landing.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access your site:**
   - Your site will be available at: `https://yourusername.github.io/exchron-landing`

### Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in the root directory with your domain:
   ```
   yourdomain.com
   ```

2. Configure your domain's DNS to point to GitHub Pages:
   - Create a CNAME record pointing to `yourusername.github.io`

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Local Development

To run locally:

1. Clone the repository
2. Open `index.html` in a web browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## Customization

### Colors
The main colors are defined in CSS custom properties:
- Primary: `#000000` (Black)
- Secondary: `#6b7280` (Gray)
- Accent: `#6366f1` (Indigo)

### Typography
- Primary font: Inter (Google Fonts)
- Fallback: system-ui, -apple-system, sans-serif

### Layout
- Mobile-first responsive design
- Flexbox and CSS Grid layouts
- Max width: 1440px for large screens

## Assets

All assets are in the `public/` directory and include:
- Logo and branding elements
- Dashboard mockups
- Icon set (arrows, circles, etc.)
- Team photos

## SEO Optimization

The site includes:
- Semantic HTML structure
- Meta tags for description and viewport
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## Maintenance

### Adding New Sections
1. Add HTML structure to `index.html`
2. Add corresponding styles to `styles.css`
3. Add any interactive functionality to `script.js`

### Updating Content
- Edit text directly in `index.html`
- Update images in the `public/` directory
- Modify styles in `styles.css`

## Performance

The static site is optimized for:
- Fast loading times
- Minimal HTTP requests
- Efficient CSS and JavaScript
- Mobile performance

## License

This project is part of the NASA Space Apps Challenge and is available under the MIT License.

## Contact

For questions about Exchron: info.exchron@gmail.com

---

Built with ❤️ for the NASA Space Apps Challenge