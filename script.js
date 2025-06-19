// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Reset hamburger bars
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
            
            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const animatedElements = document.querySelectorAll('.section, .hobby-card, .project-card, .about-card, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
    
    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElement = document.querySelector('.tactical-pattern');
        
        if (parallaxElement && scrolled < window.innerHeight) {
            parallaxElement.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Typing effect for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect after a delay
    setTimeout(() => {
        const rankElement = document.querySelector('.rank');
        const nameElement = document.querySelector('.name');
        
        if (rankElement && nameElement) {
            typeWriter(rankElement, 'OPERATIVE', 150);
            setTimeout(() => {
                typeWriter(nameElement, 'IBRAHIM AHMAD', 100);
            }, 1500);
        }
    }, 1000);
    
    // Glitch effect for project status
    function glitchEffect(element) {
        const originalText = element.textContent;
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let glitchText = '';
        
        // Create glitch text
        for (let i = 0; i < originalText.length; i++) {
            if (Math.random() < 0.1) {
                glitchText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            } else {
                glitchText += originalText[i];
            }
        }
        
        element.textContent = glitchText;
        
        // Restore original text after short delay
        setTimeout(() => {
            element.textContent = originalText;
        }, 100);
    }
    
    // Apply glitch effect to project statuses
    const projectStatuses = document.querySelectorAll('.project-status');
    projectStatuses.forEach(status => {
        status.addEventListener('mouseenter', () => glitchEffect(status));
    });
    
    // Dynamic stats counter
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target === Infinity ? '∞' : Math.round(target) + '%';
                clearInterval(timer);
            } else {
                element.textContent = Math.round(current) + '%';
            }
        }, 16);
    }
    
    // Trigger counter animation when hero stats come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach((stat, index) => {
                    const text = stat.textContent;
                    if (text === '100%') {
                        animateCounter(stat, 100);
                    } else if (text === '∞') {
                        // Special animation for infinity
                        let chars = ['∞', '8', '∞', '∞'];
                        let i = 0;
                        const infinityInterval = setInterval(() => {
                            stat.textContent = chars[i % chars.length];
                            i++;
                            if (i > 8) {
                                stat.textContent = '∞';
                                clearInterval(infinityInterval);
                            }
                        }, 200);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
    
    // Email link with confirmation
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Show brief confirmation animation
            const originalText = this.textContent;
            this.style.color = 'var(--accent-green)';
            this.innerHTML = '<i class="fas fa-check"></i> TRANSMISSION SENT';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.color = '';
            }, 2000);
        });
    });
    
    // Add terminal-like loading effect on page load
    function terminalLoader() {
        const loader = document.createElement('div');
        loader.className = 'terminal-loader';
        loader.innerHTML = `
            <div class="terminal-content">
                <div class="terminal-line">INITIALIZING PORTFOLIO SYSTEM...</div>
                <div class="terminal-line">LOADING OPERATIVE DATA...</div>
                <div class="terminal-line">ESTABLISHING SECURE CONNECTION...</div>
                <div class="terminal-line">SYSTEM READY.</div>
            </div>
        `;
        
        // Add loader styles
        const loaderStyles = `
            .terminal-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--military-black);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                font-family: var(--font-primary);
                color: var(--accent-green);
            }
            .terminal-content {
                text-align: left;
            }
            .terminal-line {
                margin-bottom: 10px;
                opacity: 0;
                animation: typeIn 0.5s ease forwards;
            }
            .terminal-line:nth-child(1) { animation-delay: 0s; }
            .terminal-line:nth-child(2) { animation-delay: 0.8s; }
            .terminal-line:nth-child(3) { animation-delay: 1.6s; }
            .terminal-line:nth-child(4) { animation-delay: 2.4s; }
            @keyframes typeIn {
                to {
                    opacity: 1;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = loaderStyles;
        document.head.appendChild(styleSheet);
        document.body.appendChild(loader);
        
        // Remove loader after animation
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(loader);
                document.head.removeChild(styleSheet);
            }, 500);
        }, 3500);
    }
    
    // Initialize terminal loader
    terminalLoader();
    
    // Tactical HUD elements
    function createHUDElements() {
        const hud = document.createElement('div');
        hud.className = 'tactical-hud';
        hud.innerHTML = `
            <div class="hud-corner top-left"></div>
            <div class="hud-corner top-right"></div>
            <div class="hud-corner bottom-left"></div>
            <div class="hud-corner bottom-right"></div>
        `;
        
        const hudStyles = `
            .tactical-hud {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 1;
            }
            .hud-corner {
                position: absolute;
                width: 50px;
                height: 50px;
                border: 2px solid var(--accent-green);
                opacity: 0.3;
            }
            .hud-corner.top-left {
                top: 20px;
                left: 20px;
                border-right: none;
                border-bottom: none;
            }
            .hud-corner.top-right {
                top: 20px;
                right: 20px;
                border-left: none;
                border-bottom: none;
            }
            .hud-corner.bottom-left {
                bottom: 20px;
                left: 20px;
                border-right: none;
                border-top: none;
            }
            .hud-corner.bottom-right {
                bottom: 20px;
                right: 20px;
                border-left: none;
                border-top: none;
            }
        `;
        
        const hudStyleSheet = document.createElement('style');
        hudStyleSheet.textContent = hudStyles;
        document.head.appendChild(hudStyleSheet);
        document.body.appendChild(hud);
    }
    
    // Initialize HUD elements
    setTimeout(createHUDElements, 4000);
});

// Utility functions
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

// Performance optimization for scroll events
const optimizedScrollHandler = debounce(function() {
    // Handle scroll-based animations here if needed
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);
