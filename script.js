/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Call of Duty Color Palette */
    --primary-green: #4a7c59;
    --dark-green: #2d5a3d;
    --accent-green: #6fb96f;
    --military-black: #0f1419;
    --charcoal: #1a1f2e;
    --dark-gray: #2a2f3a;
    --medium-gray: #3d4450;
    --light-gray: #8b8e95;
    --tactical-orange: #ff6b35;
    --warning-red: #ff4757;
    --electric-blue: #3742fa;
    
    /* Typography */
    --font-primary: 'Orbitron', monospace;
    --font-secondary: 'Rajdhani', sans-serif;
    
    /* Spacing */
    --section-padding: 100px 0;
    --container-padding: 0 20px;
    
    /* Transitions */
    --transition-fast: 0.3s ease;
    --transition-medium: 0.5s ease;
    --transition-slow: 0.8s ease;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-secondary);
    background-color: var(--military-black);
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--container-padding);
}

/* Navigation Styles */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(15, 20, 25, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid var(--primary-green);
    z-index: 1000;
    transition: var(--transition-fast);
}

.navbar.scrolled {
    background: rgba(15, 20, 25, 0.98);
    box-shadow: 0 2px 20px rgba(74, 124, 89, 0.3);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 15px;
}

.logo-img {
    width: 40px;
    height: 40px;
}

.nav-title {
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--accent-green);
    letter-spacing: 2px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 10px 15px;
    border-radius: 5px;
    transition: var(--transition-fast);
    position: relative;
}

.nav-link:hover {
    color: var(--accent-green);
    background: rgba(74, 124, 89, 0.1);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--accent-green);
    transition: var(--transition-fast);
    transform: translateX(-50%);
}

.nav-link:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
}

.bar {
    width: 25px;
    height: 3px;
    background: var(--accent-green);
    transition: var(--transition-fast);
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(135deg, var(--military-black) 0%, var(--charcoal) 100%);
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: 1;
}

.tactical-pattern {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-content {
    text-align: center;
    z-index: 2;
    position: relative;
}

.hero-title {
    font-family: var(--font-primary);
    margin-bottom: 20px;
}

.rank {
    display: block;
    font-size: 1.5rem;
    color: var(--tactical-orange);
    font-weight: 400;
    letter-spacing: 3px;
    margin-bottom: 10px;
}

.name {
    display: block;
    font-size: 4rem;
    color: var(--accent-green);
    font-weight: 900;
    letter-spacing: 5px;
    text-shadow: 0 0 20px rgba(111, 185, 111, 0.5);
}

.hero-subtitle {
    font-size: 1.5rem;
    color: var(--light-gray);
    margin-bottom: 50px;
    letter-spacing: 2px;
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-top: 50px;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-family: var(--font-primary);
    font-size: 2.5rem;
    color: var(--accent-green);
    font-weight: 700;
    text-shadow: 0 0 10px rgba(111, 185, 111, 0.3);
}

.stat-label {
    display: block;
    font-size: 0.9rem;
    color: var(--light-gray);
    letter-spacing: 1px;
    margin-top: 5px;
}

.scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--accent-green);
    font-size: 1.5rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
    }
    40% {
        transform: translateX(-50%) translateY(-10px);
    }
    60% {
        transform: translateX(-50%) translateY(-5px);
    }
}

/* Section Styles */
.section {
    padding: var(--section-padding);
    position: relative;
}

.section:nth-child(even) {
    background: rgba(26, 31, 46, 0.5);
}

.section-header {
    text-align: center;
    margin-bottom: 80px;
}

.section-title {
    font-family: var(--font-primary);
    font-size: 2.5rem;
    color: var(--accent-green);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}

.section-number {
    color: var(--tactical-orange);
    font-weight: 900;
    font-size: 1.8rem;
}

.section-line {
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-green), var(--accent-green));
    margin: 0 auto;
}

/* About Section */
.about-card {
    max-width: 800px;
    margin: 0 auto;
    background: linear-gradient(135deg, var(--charcoal), var(--dark-gray));
    border: 2px solid var(--primary-green);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.card-header {
    background: var(--primary-green);
    padding: 20px 30px;
    display: flex;
    align-items: center;
    gap: 15px;
}

.card-header i {
    font-size: 1.5rem;
    color: #ffffff;
}

.card-header h3 {
    font-family: var(--font-primary);
    font-size: 1.3rem;
    color: #ffffff;
    letter-spacing: 2px;
}

.card-body {
    padding: 40px 30px;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.info-item {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid var(--medium-gray);
}

.label {
    color: var(--light-gray);
    font-weight: 600;
    letter-spacing: 1px;
}

.value {
    color: #ffffff;
    font-weight: 700;
}

.status-active {
    color: var(--accent-green);
    text-shadow: 0 0 5px rgba(111, 185, 111, 0.5);
}

.bio p {
    margin-bottom: 20px;
    color: var(--light-gray);
    font-size: 1.1rem;
    line-height: 1.8;
}

/* Hobbies Section */
.hobbies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.hobby-card {
    background: linear-gradient(135deg, var(--charcoal), var(--dark-gray));
    border: 2px solid var(--medium-gray);
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    transition: var(--transition-medium);
    position: relative;
    overflow: hidden;
}

.hobby-card:hover {
    transform: translateY(-10px);
    border-color: var(--accent-green);
    box-shadow: 0 15px 40px rgba(74, 124, 89, 0.3);
}

.hobby-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(111, 185, 111, 0.1), transparent);
    transition: var(--transition-medium);
}

.hobby-card:hover::before {
    left: 100%;
}

.card-icon {
    width: 80px;
    height: 80px;
    background: var(--primary-green);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    transition: var(--transition-fast);
}

.hobby-card:hover .card-icon {
    background: var(--accent-green);
    transform: scale(1.1);
}

.card-icon i {
    font-size: 2rem;
    color: #ffffff;
}

.card-title {
    font-family: var(--font-primary);
    font-size: 1.3rem;
    color: var(--accent-green);
    margin-bottom: 15px;
    letter-spacing: 1px;
}

.card-description {
    color: var(--light-gray);
    margin-bottom: 20px;
    line-height: 1.6;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.tag {
    background: var(--primary-green);
    color: #ffffff;
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
}

/* Projects Section */
.projects-container {
    display: grid;
    gap: 30px;
}

.project-card {
    background: linear-gradient(135deg, var(--charcoal), var(--dark-gray));
    border: 2px solid var(--medium-gray);
    border-radius: 15px;
    overflow: hidden;
    transition: var(--transition-medium);
}

.project-card:hover {
    border-color: var(--accent-green);
    box-shadow: 0 10px 30px rgba(74, 124, 89, 0.2);
}

.project-card.featured {
    border-color: var(--tactical-orange);
    background: linear-gradient(135deg, var(--charcoal), var(--dark-gray), rgba(255, 107, 53, 0.1));
}

.project-header {
    padding: 25px 30px;
    background: var(--primary-green);
    display: flex;
    align-items: center;
    gap: 20px;
}

.project-card.featured .project-header {
    background: var(--tactical-orange);
}

.project-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-icon i {
    font-size: 1.5rem;
    color: #ffffff;
}

.project-meta {
    flex: 1;
}

.project-title {
    font-family: var(--font-primary);
    color: #ffffff;
    font-size: 1.3rem;
    margin-bottom: 5px;
    letter-spacing: 1px;
}

.project-status {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
}

.project-body {
    padding: 30px;
}

.project-description {
    color: var(--light-gray);
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 25px;
}

.project-features {
    display: grid;
    gap: 12px;
}

.feature {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #ffffff;
}

.feature i {
    color: var(--accent-green);
    font-size: 0.9rem;
}

/* Contact Section */
.contact-card {
    max-width: 700px;
    margin: 0 auto;
    background: linear-gradient(135deg, var(--charcoal), var(--dark-gray));
    border: 2px solid var(--primary-green);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.contact-header {
    background: var(--primary-green);
    padding: 25px 30px;
    text-align: center;
}

.contact-header i {
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 10px;
}

.contact-header h3 {
    font-family: var(--font-primary);
    color: #ffffff;
    font-size: 1.4rem;
    letter-spacing: 2px;
}

.contact-body {
    padding: 40px 30px;
}

.contact-description {
    color: var(--light-gray);
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 40px;
    text-align: center;
}

.contact-info {
    margin-bottom: 40px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid var(--medium-gray);
}

.contact-item:last-child {
    border-bottom: none;
}

.contact-icon {
    width: 50px;
    height: 50px;
    background: var(--primary-green);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-icon i {
    color: #ffffff;
    font-size: 1.2rem;
}

.contact-details {
    flex: 1;
}

.contact-label {
    display: block;
    color: var(--light-gray);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 5px;
}

.contact-value {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    transition: var(--transition-fast);
}

.contact-value:hover {
    color: var(--accent-green);
}

.contact-cta {
    text-align: center;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: var(--accent-green);
    color: #ffffff;
    padding: 15px 30px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 1px;
    transition: var(--transition-fast);
    box-shadow: 0 5px 15px rgba(111, 185, 111, 0.3);
}

.cta-button:hover {
    background: var(--primary-green);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(111, 185, 111, 0.4);
}

/* Footer */
.footer {
    background: var(--military-black);
    border-top: 2px solid var(--primary-green);
    padding: 30px 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-text p {
    color: var(--light-gray);
    margin-bottom: 5px;
}

.footer-logo img {
    width: 40px;
    height: 40px;
    opacity: 0.7;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        top: 70px;
        right: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: rgba(15, 20, 25, 0.98);
        backdrop-filter: blur(10px);
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 50px;
        transition: var(--transition-fast);
    }
    
    .nav-menu.active {
        right: 0;
    }
    
    .nav-item {
        margin: 20px 0;
    }
    
    .nav-link {
        font-size: 1.2rem;
        padding: 15px 30px;
    }
    
    .name {
        font-size: 2.5rem !important;
    }
    
    .hero-stats {
        flex-direction: column;
        gap: 30px;
    }
    
    .section-title {
        font-size: 2rem;
        flex-direction: column;
        gap: 10px;
    }
    
    .hobbies-grid {
        grid-template-columns: 1fr;
    }
    
    .info-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }
    
    .name {
        font-size: 2rem !important;
    }
    
    .rank {
        font-size: 1.2rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    .section {
        padding: 60px 0;
    }
    
    .card-body,
    .project-body,
    .contact-body {
        padding: 25px 20px;
    }
}

/* Scroll animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.section.visible {
    animation: fadeInUp 0.8s ease forwards;
}

/* Loading animations */
@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(111, 185, 111, 0.7);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(111, 185, 111, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(111, 185, 111, 0);
    }
}

.cta-button {
    animation: pulse 2s infinite;
}
