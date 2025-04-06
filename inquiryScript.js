function validateForm() {
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    
    // Reset previous errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    document.querySelectorAll('input, textarea').forEach(input => input.classList.remove('input-error'));

    // Name validation
    if (name.value.trim().length < 2) {
        document.getElementById('name-error').style.display = 'block';
        name.classList.add('input-error');
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('email-error').style.display = 'block';
        email.classList.add('input-error');
        isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value.replace(/\D/g, ''))) {
        document.getElementById('phone-error').style.display = 'block';
        phone.classList.add('input-error');
        isValid = false;
    }

    // Message validation
    if (message.value.trim().length === 0) {
        document.getElementById('message-error').style.display = 'block';
        message.classList.add('input-error');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('form').reset();
    }
}