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

//password
function validateLogin(event) {
    event.preventDefault();
    var usernameOrEmail = document.getElementById("login-username").value.toLowerCase();
    var password = document.getElementById("login-password").value;

    var storedUsernameOrEmail = "omkar";
    var storedPassword = "Qwerty@123";

    if (
        (usernameOrEmail === storedUsernameOrEmail || usernameOrEmail === "omkarsalunkheatp1211@gmail.com") &&
        password === storedPassword
    ) {

        document.getElementById("login-message").innerHTML = "Login Successful!";
    } else {

        document.getElementById("login-message").innerHTML = "Invalid Username or Password. Please try again";
    }
}

function togglePasswordVisibility(passwordFieldId) {
    var passwordField = document.getElementById(passwordFieldId);

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}