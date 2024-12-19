function initializeHero() {
    const heroSection = document.getElementById('hero');
    
    const heroContent = `
        <div class="hero">
            <div class="hero-content">
                <h1 class="hero-title">Ravi Kumar</h1>
                <p class="hero-subtitle">Web Developer</p>
                <div class="social-links">
                    <a href="https://github.com" class="social-link" aria-label="GitHub">
                        <i class="fas fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" class="social-link" aria-label="LinkedIn">
                        <i class="fas fa-linkedin"></i>
                    </a>
                    <a href="mailto:ravianp2004@gmail.com" class="social-link" aria-label="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
            <a href="#about" class="scroll-indicator" aria-label="Scroll to About section">
                <i class="fas fa-chevron-down"></i>
            </a>
        </div>
    `;

    heroSection.innerHTML = heroContent;
}