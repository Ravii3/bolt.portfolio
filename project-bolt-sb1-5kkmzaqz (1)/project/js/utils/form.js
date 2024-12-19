function initializeContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Validate form
            if (!validateForm(data)) {
                return;
            }

            try {
                // Here you would typically send the form data to a server
                console.log('Form submitted:', data);
                showFormMessage('Message sent successfully!', 'success');
                form.reset();
            } catch (error) {
                showFormMessage('Failed to send message. Please try again.', 'error');
            }
        });
    }
}

function validateForm(data) {
    const { name, email, message } = data;
    
    if (!name || !email || !message) {
        showFormMessage('Please fill in all fields.', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(message, type) {
    const messageElement = document.querySelector('.form-message');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = `form-message ${type}`;
        setTimeout(() => {
            messageElement.textContent = '';
            messageElement.className = 'form-message';
        }, 5000);
    }
}