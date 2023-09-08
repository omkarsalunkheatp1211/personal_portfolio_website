// strong passsword
function submitForm(event) {
    event.preventDefault();

    var passwordInput = document.getElementById("signup-password").value;

    if (validatePassword(passwordInput)) {
        var successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";
        event.target.reset();
    } else {
        var passwordError = document.getElementById("password-error");
        passwordError.style.display = "block";
    }
}

function validatePassword(password) {
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    var passwordToggle = document.getElementById("password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        passwordToggle.textContent = "Show";
    }
}
// show/hide password 
function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    var passwordToggle = document.getElementById("password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        passwordToggle.textContent = "Show";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var passwordToggle = document.getElementById("password-toggle");

    if (passwordToggle) {
        passwordToggle.addEventListener("click", function () {
            togglePasswordVisibility("signup-password");
        });
    }

    var passwordText = document.getElementById("password-text");

    if (passwordText) {
        passwordText.addEventListener("click", function () {
            togglePasswordVisibility("signup-password");
        });
    }
});

function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
