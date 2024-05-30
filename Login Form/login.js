function validateLogin(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the username and password values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Hardcoded credentials for demonstration
    const validUsername = 'admin';
    const validPassword = '123';
    
    // Check if the credentials match
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        window.location.replace(); // Redirect to the home page
    } else {
        alert('Invalid username or password');
    }
}

function showRegistrationForm(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('registration-form').style.display = 'flex';
}

function hideRegistrationForm(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'flex';
    document.getElementById('registration-form').style.display = 'none';
}

window.onload = function() {
    document.getElementById('signup-btn').addEventListener('click', showRegistrationForm);
    document.getElementById('cancel-btn').addEventListener('click', hideRegistrationForm);
    document.getElementById('login-form').addEventListener('submit', validateLogin);
}