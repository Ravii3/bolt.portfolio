function initializeAbout() {
    const aboutSection = document.getElementById('about');
    
    const aboutContent = `
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-grid">
                <div class="about-card">
                    <div class="about-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Frontend Development</h3>
                    <p>Crafting beautiful and responsive user interfaces using modern web technologies.</p>
                </div>
                <div class="about-card">
                    <div class="about-icon">
                        <i class="fas fa-server"></i>
                    </div>
                    <h3>Backend Development</h3>
                    <p>Building scalable server-side applications and RESTful APIs.</p>
                </div>
                <div class="about-card">
                    <div class="about-icon">
                        <i class="fas fa-paint-brush"></i>
                    </div>
                    <h3>UI/UX Design</h3>
                    <p>Creating intuitive and engaging user experiences through thoughtful design.</p>
                </div>
            </div>
        </div>
    `;

    aboutSection.innerHTML = aboutContent;
}