document.addEventListener('DOMContentLoaded', () => {
    // Initialize all sections
    initializeNavbar();
    initializeHero();
    initializeAbout();
    initializeProjects();
    initializeSkills();
    initializeContact();

    // Initialize animations
    initializeScrollAnimations();
});

// Scroll to section smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});