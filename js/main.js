// ===========================
// Navigation & Section Switching
// ===========================
const navTabs = document.querySelectorAll('.nav__tab');
const sections = document.querySelectorAll('.section');

function switchSection(targetSection) {
    // Remove active class from all sections and tabs
    sections.forEach(section => section.classList.remove('section--active'));
    navTabs.forEach(tab => tab.classList.remove('nav__tab--active'));
    
    // Add active class to target section
    const target = document.getElementById(targetSection);
    if (target) {
        target.classList.add('section--active');
        
        // Update active tab
        const activeTab = document.querySelector(`[data-section="${targetSection}"]`);
        if (activeTab) {
            activeTab.classList.add('nav__tab--active');
        }
        
        // Trigger animations for skills progress bars
        if (targetSection === 'skills') {
            animateSkillBars();
        }
        
        // Trigger confetti for contact section
        if (targetSection === 'contact') {
            triggerContactConfetti();
        }
    }
}

// Navigation click handlers
navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetSection = tab.dataset.section;
        switchSection(targetSection);
    });
});

// Button navigation handlers
document.querySelectorAll('[data-section]').forEach(button => {
    if (!button.classList.contains('nav__tab')) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = button.dataset.section;
            switchSection(targetSection);
        });
    }
});

// ===========================
// Particle Background Animation
// ===========================
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 80;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
        // Egyptian gold color for particles
        ctx.fillStyle = `rgba(212, 160, 23, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function connectParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
                const opacity = (1 - distance / 120) * 0.2;
                // Egyptian gold connections
                ctx.strokeStyle = `rgba(212, 160, 23, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    connectParticles();
    requestAnimationFrame(animateParticles);
}

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

// Initialize and start particle animation
initParticles();
animateParticles();

// ===========================
// Skills Progress Bar Animation
// ===========================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill__progress');
    
    skillBars.forEach((bar, index) => {
        const progress = bar.dataset.progress;
        
        // Reset animation
        bar.style.width = '0';
        
        // Trigger animation with delay
        setTimeout(() => {
            bar.style.width = progress + '%';
        }, index * 100);
    });
}

// ===========================
// Copy to Clipboard Functionality
// ===========================
const copyButtons = document.querySelectorAll('.contact__copy');

copyButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const textToCopy = button.dataset.copy;
        
        try {
            await navigator.clipboard.writeText(textToCopy);
            
            // Visual feedback
            const originalHTML = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i>';
            button.classList.add('copied');
            
            // Trigger small confetti burst with Egyptian colors
            confetti({
                particleCount: 50,
                spread: 60,
                origin: {
                    x: button.getBoundingClientRect().left / window.innerWidth,
                    y: button.getBoundingClientRect().top / window.innerHeight
                },
                colors: ['#d4a017', '#f2c75c', '#c4853f', '#8b4513']
            });
            
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });
});

// ===========================
// Confetti Effects
// ===========================
function triggerWelcomeConfetti() {
    // Initial welcome confetti with Egyptian colors
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4a017', '#f2c75c', '#c4853f', '#8b4513']
    });
    
    // Second burst
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#d4a017', '#f2c75c']
        });
    }, 250);
    
    // Third burst
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#c4853f', '#8b4513']
        });
    }, 400);
}

function triggerContactConfetti() {
    // Subtle confetti when entering contact section with Egyptian colors
    confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#d4a017', '#f2c75c'],
        ticks: 200
    });
}

// Certificate card hover effects
const certCards = document.querySelectorAll('.cert-card');
certCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Subtle glow effect on hover
        card.style.boxShadow = '0 8px 32px rgba(0, 120, 212, 0.4)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
    
    card.addEventListener('click', () => {
        // Small confetti burst on click
        const rect = card.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        
        confetti({
            particleCount: 30,
            spread: 50,
            origin: { x, y },
            colors: ['#d4a017', '#f2c75c', '#c4853f']
        });
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline__item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// ===========================
// Keyboard Navigation
// ===========================
document.addEventListener('keydown', (e) => {
    const currentSection = document.querySelector('.section--active');
    const currentIndex = Array.from(sections).indexOf(currentSection);
    
    // Arrow key navigation
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % sections.length;
        const nextSection = sections[nextIndex].id;
        switchSection(nextSection);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        const prevSection = sections[prevIndex].id;
        switchSection(prevSection);
    }
    
    // Number key navigation (1-6)
    if (e.key >= '1' && e.key <= '6') {
        e.preventDefault();
        const sectionIndex = parseInt(e.key) - 1;
        if (sections[sectionIndex]) {
            switchSection(sections[sectionIndex].id);
        }
    }
});

// ===========================
// Page Load Animations
// ===========================
window.addEventListener('load', () => {
    // Trigger welcome confetti after a short delay
    setTimeout(() => {
        triggerWelcomeConfetti();
    }, 800);
    
    // Add loaded class for any CSS transitions
    document.body.classList.add('loaded');
});

// ===========================
// Smooth Scroll for Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Performance Optimization
// ===========================
// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized resize handler
const handleResize = debounce(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
}, 250);

window.addEventListener('resize', handleResize);

// ===========================
// Accessibility Enhancements
// ===========================
// Focus trap for keyboard navigation
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const activeSection = document.querySelector('.section--active');
        const focusables = activeSection.querySelectorAll(focusableElements);
        const firstFocusable = focusables[0];
        const lastFocusable = focusables[focusables.length - 1];
        
        if (e.shiftKey && document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
        }
    }
});

// ===========================
// Contact Card Hover Effects
// ===========================
const contactCards = document.querySelectorAll('.contact__card');
contactCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add subtle animation
        card.style.transition = 'all 0.3s ease';
    });
});

// ===========================
// Console Easter Egg
// ===========================
console.log('%cHi there! 👋', 'font-size: 20px; font-weight: bold; color: #0078d4;');
console.log('%cLooking at the console? I like your curiosity!', 'font-size: 14px; color: #00bcf2;');
console.log('%cFeel free to reach out: hub3rd2@gmail.com', 'font-size: 14px; color: #7fba00;');
console.log('%c', 'font-size: 12px;');
console.log('%cBuilt with ❤️ using vanilla JavaScript, CSS3, and HTML5', 'font-size: 12px; color: #a1a1aa;');

// ===========================
// Initialize
// ===========================
console.log('Portfolio initialized successfully! 🚀');
