# 🌐 Project Context – Personal Portfolio Website

---
## 🧭 Business Goals
- Create a modern, single-page portfolio website that showcases my professional experience, skills, and projects
- Make a strong first impression on potential employers with engaging visual effects and clean design
- Deploy directly to GitHub Pages for easy maintenance and updates
- Ensure the portfolio stands out with "wow factor" effects (fireworks, animations) without being annoying
- Mobile-responsive design that works across all devices

---
## ⚙️ Technical Stack

- **Frontend**: HTML5, CSS3 (with CSS animations and transitions), Vanilla JavaScript
- **Effects Library**: Canvas Confetti for celebration effects
- **Styling**: CSS Grid and Flexbox for layout, CSS Custom Properties for theming
- **Icons**: Font Awesome or similar for social media and contact icons
- **Deployment**: GitHub Pages (static hosting)
- **Version Control**: Git/GitHub

---

## 🧩 Architecture & Structure

```
portfolio/
├── index.html              # Main single-page HTML
├── css/
│   └── style.css          # All styles including animations
├── js/
│   └── main.js            # Interactive effects and animations
├── assets/
│   ├── profile-photo.jpg  # Professional photo
│   └── favicon.ico        # Browser tab icon
└── README.md              # Project documentation
```

### Page Sections (in order):
1. **Hero Section** - Name, title, profile photo with subtle animation
2. **About Me** - Brief professional summary based on CV experience
3. **Skills** - Technical skills visualized with progress bars or tags
4. **Experience** - Timeline of work history from CV
5. **Education & Certificates** - Academic background and certifications
6. **Contact** - Email, phone, LinkedIn, GitHub links with icons

---
## 🔒 Project Assumptions

- **Single Page**: No scrolling required, all content fits in viewport with smooth sections or tabs
- **No Backend**: Pure static site, no server-side processing
- **GitHub Pages Ready**: Must work with GitHub Pages deployment out of the box
- **Modern Browsers**: Target Chrome, Firefox, Edge, Safari (last 2 versions)
- **Performance**: Fast load times, minimal external dependencies
- **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels where needed
- **Professional Yet Fun**: Balance between professional presentation and engaging effects

---
## 🧠 Scope

### Content (from CV):
- Display 4 years of professional experience (SoftwareOne, Predica, TietoEVRY)
- Highlight key technical skills: C#, TypeScript, Azure, Kubernetes, Angular
- Show 5 active certifications (AZ-305, CKAD, AZ-104, GitHub Actions, AZ-204)
- Include education (MSc in progress, BSc completed)
- Contact information: Phone, Email, LinkedIn

### Features:
- **Celebration Effects**: Subtle fireworks/confetti on page load or interaction
- **Smooth Animations**: Fade-ins, slide-ins for sections
- **Interactive Elements**: Hover effects on skills, experience cards
- **Responsive Design**: Mobile-first approach
- **Dark/Light Theme Toggle**: Optional theme switcher
- **Smooth Scrolling**: If using scroll, smooth transitions between sections
- **Copy to Clipboard**: For email/phone contact info

### Visual Effects Ideas:
- Particle background animation (subtle, not distracting)
- Typed text effect for hero section
- Progress bars animating on scroll/load for skills
- Card flip effects for certifications
- Confetti burst on contact section hover
- Smooth fade-in animations using Intersection Observer

---
## ⚖️ Out of Scope

- Multi-page navigation
- Backend/database integration
- Blog functionality
- Complex JavaScript frameworks (React, Vue, Angular)
- User authentication
- CMS integration
- Dynamic content loading
- Heavy 3D animations or WebGL
- Video backgrounds
- Music/sound effects (unless explicitly requested)
- Contact form with backend submission
- Analytics integration (can be added later)
- Cookie consent banners
- Multiple language support

---
## 📝 Development Guidelines

### Code Style:
- Use semantic HTML5 elements (`<header>`, `<section>`, `<article>`, `<nav>`)
- CSS: BEM naming convention for classes
- JavaScript: ES6+ syntax, modular functions
- Comments for complex logic and effects

### Performance:
- Lazy load images
- Minimize CSS/JS file size
- Use CDN for external libraries
- Optimize images (WebP format preferred)

### Accessibility:
- Alt text for all images
- Proper heading hierarchy (h1 → h2 → h3)
- Focus states for interactive elements
- ARIA labels for icon links

### GitHub Pages Deployment:
- No build process required
- All paths relative
- Include `.nojekyll` file if needed
- README with deployment instructions

---
## 🎨 Design Principles

- **Professional First**: Effects enhance, not distract
- **Clean Layout**: Whitespace, clear typography
- **Visual Hierarchy**: Important info stands out
- **Consistent**: Unified color scheme and spacing
- **Fast**: Effects are performant, no janky animations
- **Subtle Motion**: Respect `prefers-reduced-motion` media query
