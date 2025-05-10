const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');
const strengthIndicator = document.getElementById('strengthIndicator');

const errors = {
    name: document.getElementById('nameError'),
    email: document.getElementById('emailError'),
    phone: document.getElementById('phoneError'),
    password: document.getElementById('passwordError'),
    confirmPassword: document.getElementById('confirmPasswordError')
};

function validateName() {
    const nameValue = nameInput.value.trim();
    const valid = /^[A-Za-zА-Яа-я\s]+$/.test(nameValue);
    toggleValidation(nameInput, valid, 'Тек әріптер мен бос орын рұқсат етіледі.', errors.name);
    return valid;
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    toggleValidation(emailInput, valid, 'Дұрыс email форматын енгізіңіз.', errors.email);
    return valid;
}

function validatePhone() {
    const phoneValue = phoneInput.value.trim();
    const valid = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phoneValue);
    toggleValidation(phoneInput, valid, 'Телефон форматы: +7 (777) 777-77-77', errors.phone);
    return valid;
}

function validatePassword() {
    const value = passwordInput.value;
    const valid = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
    toggleValidation(passwordInput, valid, 'Құпия сөзде кемінде 8 таңба, 1 сан және 1 бас әріп болу керек.', errors.password);
    updateStrength(value);
    return valid;
}

function validateConfirmPassword() {
    const valid = passwordInput.value === confirmPasswordInput.value;
    toggleValidation(confirmPasswordInput, valid, 'Құпия сөздер сәйкес келмейді.', errors.confirmPassword);
    return valid;
}

function toggleValidation(input, isValid, message, errorElement) {
    if (!isValid) {
        input.classList.add('error-border');
        errorElement.textContent = message;
    } else {
        input.classList.remove('error-border');
        errorElement.textContent = '';
    }
}

function updateStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;

    const strengthIndicator = document.getElementById('strengthIndicator');

    switch (strength) {
        case 1:
            strengthIndicator.style.backgroundColor = 'red';
            break;
        case 2:
            strengthIndicator.style.backgroundColor = 'orange';
            break;
        case 3:
            strengthIndicator.style.backgroundColor = 'green';
            break;
        default:
            strengthIndicator.style.backgroundColor = '#eee';
    }
}

function checkForm() {
    const allValid = [
        validateName(),
        validateEmail(),
        validatePhone(),
        validatePassword(),
        validateConfirmPassword()
    ].every(value => value === true);

    submitBtn.disabled = !allValid;
    return allValid;
}


nameInput.addEventListener('input', () => {
    validateName(); checkForm();
});
emailInput.addEventListener('input', () => {
    validateEmail(); checkForm();
});
phoneInput.addEventListener('input', () => {
    validatePhone(); checkForm();
});
passwordInput.addEventListener('input', () => {
    validatePassword(); checkForm();
});
confirmPasswordInput.addEventListener('input', () => {
    validateConfirmPassword(); checkForm();
});

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    if (checkForm()) {
        const user = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            password: passwordInput.value
        };

        localStorage.setItem('user', JSON.stringify(user));
        alert('Регистрация прошла успешна!');
        window.location.href = 'login.html';
    } else {
        alert('Пожалуйста, заполните все поля правильно!');
    }
});
