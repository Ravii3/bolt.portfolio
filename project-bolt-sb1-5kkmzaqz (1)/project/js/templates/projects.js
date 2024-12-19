function initializeProjects() {
    const projectsSection = document.getElementById('projects');
    
    const projectsContent = `
        <div class="container">
            <h2 class="section-title">My Projects</h2>
            <div class="projects-grid">
                ${projects.map(project => `
                    <div class="project-card">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                        <div class="project-content">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <div class="project-links">
                                <a href="${project.github}" class="project-link">
                                    <i class="fab fa-github"></i> Code
                                </a>
                                <a href="${project.demo}" class="project-link">
                                    <i class="fas fa-external-link-alt"></i> Demo
                                </a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    projectsSection.innerHTML = projectsContent;
}