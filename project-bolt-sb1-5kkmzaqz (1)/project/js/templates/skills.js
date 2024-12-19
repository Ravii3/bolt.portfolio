function initializeSkills() {
    const skillsSection = document.getElementById('skills');
    
    const skillsContent = `
        <div class="container">
            <h2 class="section-title">Skills</h2>
            <div class="skills-grid">
                ${skills.map(skill => `
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-percentage">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: ${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    skillsSection.innerHTML = skillsContent;
}