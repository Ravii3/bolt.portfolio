function initializeNavbar() {
    const navbar = document.getElementById('navbar');
    
    const navContent = `
        <div class="nav-container">
            <a href="#" class="nav-logo">RK</a>
            <div class="nav-links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    `;

    navbar.innerHTML = navContent;
}