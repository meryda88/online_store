const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn'); 

const errors = {
    email: document.getElementById('emailError'),
    password: document.getElementById('passwordError')
};

function validateEmail() {
    const emailValue = emailInput.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    toggleValidation(emailInput, valid, 'Дұрыс email форматын енгізіңіз.', errors.email);
    return valid;
}

function validatePassword() {
    const value = passwordInput.value;
    const valid = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
    toggleValidation(passwordInput, valid, 'Құпия сөзде кемінде 8 таңба, 1 сан және 1 бас әріп болу керек.', errors.password);
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

function checkForm() {
    const allValid = [
        validateEmail(),
        validatePassword()
    ].every(value => value === true);

    loginBtn.disabled = !allValid; 
    return allValid;
}

emailInput.addEventListener('input', () => {
    validateEmail(); checkForm();
});
passwordInput.addEventListener('input', () => {
    validatePassword(); checkForm();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    if (checkForm()) {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && emailInput.value === storedUser.email && passwordInput.value === storedUser.password) {
            alert('Добро пожаловать в Allure Mode!');
            window.location.href = 'dashboard.html';  // Басты бетке өту
        } else {
            alert('Неверный email или пароль!');
        }
    } else {
        alert('Пожалуйста, заполните все поля правильно!');
    }
});
