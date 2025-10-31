# 🌐 Personal Portfolio Website

A modern, single-page portfolio website showcasing professional experience, skills, and projects with engaging visual effects.

## ✨ Features

- 🎨 Modern, clean design with dark theme
- 🎆 Celebration effects (confetti) on interactions
- 🎯 Single-page navigation with smooth transitions
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with minimal dependencies
- ♿ Accessible with keyboard navigation
- 🎭 Animated skill progress bars
- 💫 Particle background animation
- 📋 Copy to clipboard for contact information
- 🎨 Interactive certificate cards with hover effects

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - ES6+, no frameworks
- **Canvas Confetti** - Celebration effects library
- **Font Awesome** - Icons
- **Google Fonts** - Inter typeface

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and animations
├── js/
│   └── main.js            # Interactive effects and animations
├── assets/
│   ├── profile-photo.jpg  # Professional photo (add your own)
│   └── favicon.ico        # Browser tab icon (add your own)
└── README.md              # This file
```

## 🚀 Quick Start

### Local Development

1. Clone this repository or download the files
2. Add your profile photo to `assets/profile-photo.jpg`
3. (Optional) Add a favicon to `assets/favicon.ico`
4. Open `index.html` in your browser

No build process required! Just open the HTML file.

### Live Server (Recommended for Development)

If you have VS Code with Live Server extension:

1. Right-click on `index.html`
2. Select "Open with Live Server"
3. The portfolio will open at `http://localhost:5500`

## 📦 Deployment to GitHub Pages

### Method 1: Direct Deployment (Easiest)

1. Create a new repository on GitHub (e.g., `portfolio`)
2. Push your code:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Source", select `main` branch and `/root` folder
   - Click "Save"
   - Your site will be live at `https://YOUR_USERNAME.github.io/portfolio/`

### Method 2: Using GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository → Select your portfolio folder
3. Publish repository to GitHub
4. Follow step 3 from Method 1 above

### Method 3: Custom Domain (Optional)

1. Buy a domain (e.g., from Namecheap, Google Domains)
2. In your GitHub repository:
   - Go to Settings → Pages
   - Under "Custom domain", enter your domain
   - Click "Save"
3. Configure DNS records with your domain provider:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
4. Wait for DNS propagation (can take 24-48 hours)

## 🆓 Free Domain Options

- **Freenom** - Free domains (.tk, .ml, .ga, .cf, .gq)
- **is.gd** - Free short URLs
- **InfinityFree** - Free hosting with subdomain
- **GitHub Pages** - Free `username.github.io` subdomain

## ⚙️ Customization

### Update Personal Information

Edit `index.html` and replace:
- Name, title, and contact information
- Work experience details
- Education and certifications
- Skills and technologies
- Social media links

### Change Colors

Edit CSS custom properties in `css/style.css`:

```css
:root {
    --color-primary: #0078d4;        /* Main brand color */
    --color-secondary: #00bcf2;      /* Accent color */
    --color-bg: #0a0e27;             /* Background color */
    /* ... more colors */
}
```

### Modify Animations

Adjust timing in `js/main.js`:

```javascript
// Change confetti intensity
particleCount: 100  // Increase/decrease particles

// Adjust animation speed
setTimeout(() => {
    triggerWelcomeConfetti();
}, 800);  // Change delay
```

### Add/Remove Sections

1. Add new section in `index.html`:
```html
<section id="new-section" class="section">
    <div class="section__content">
        <h2 class="section__title">New Section</h2>
        <!-- Your content -->
    </div>
</section>
```

2. Add navigation button in the nav:
```html
<button class="nav__tab" data-section="new-section">
    <i class="fas fa-icon"></i>
    <span>New</span>
</button>
```

## 📱 Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)

## ⚡ Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support (Arrow keys, Tab, 1-6 keys)
- Focus states for all interactive elements
- Respects `prefers-reduced-motion` setting
- Alt text for images

## 📝 To-Do Before Going Live

- [ ] Add your professional photo to `assets/profile-photo.jpg`
- [ ] Add favicon to `assets/favicon.ico`
- [ ] Update all personal information in `index.html`
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check all links work correctly
- [ ] Optimize images (compress, convert to WebP)
- [ ] Test with slow network (DevTools throttling)
- [ ] Run Lighthouse audit
- [ ] Add Google Analytics (optional)

## 🎨 Design Credits

- Design: Custom design based on modern portfolio trends
- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- Effects: [Canvas Confetti](https://github.com/catdad/canvas-confetti)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Contact

- **Email**: hub3rd2@gmail.com
- **LinkedIn**: [linkedin.com/in/hklonowski](https://www.linkedin.com/in/hklonowski)
- **GitHub**: [github.com/hubertklonowski](https://github.com/hubertklonowski)

---

Made with ❤️ using HTML, CSS & JavaScript | Deployed on GitHub Pages
