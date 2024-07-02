document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            console.log("Form Submitted Successfully");
            alert("Form Submitted Successfully");
            form.submit(); 
        }
    });

    nameField.addEventListener('blur', validateNameField);
    emailField.addEventListener('blur', validateEmailField);
    messageField.addEventListener('blur', validateMessageField);

    function validateForm() {
        let isValid = true;

        if (!validateNameField()) isValid = false;
        if (!validateEmailField()) isValid = false;
        if (!validateMessageField()) isValid = false;

        return isValid;
    }

    function validateNameField() {
        const nameValue = nameField.value.trim();
        let isValid = true;

        nameError.textContent = '';  
        
        if (nameValue === '') {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        } else if (!validateName(nameValue)) {
            nameError.textContent = "Name should only contain letters and spaces.";
            isValid = false;
        }

        return isValid;
    }

    function validateEmailField() {
        const emailValue = emailField.value.trim();
        let isValid = true;

        emailError.textContent = '';

        if (emailValue === '') {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!validateEmail(emailValue)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        return isValid;
    }

    function validateMessageField() {
        const messageValue = messageField.value.trim();
        let isValid = true;

        messageError.textContent = '';

        if (messageValue === '') {
            messageError.textContent = "Please enter your message.";
            isValid = false;
        }

        return isValid;
    }

    function validateName(name) {
        const namePattern = /^[A-Za-z\s]+$/; // Allows only letters and spaces
        return namePattern.test(name);
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
