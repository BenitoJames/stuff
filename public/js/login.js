document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const identifierInput = document.getElementById("identifier");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("rememberMe");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const identifier = identifierInput.value.trim();
        const password = passwordInput.value.trim();
        const rememberMe = rememberMeCheckbox.checked;

        if (!identifier || !password) {
            alert("Please fill in all fields.");
            return;
        }

        // Load registered users
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Find user by username OR email
        const user = users.find(user =>
            user.username === identifier || user.email === identifier
        );

        if (!user) {
            alert("User not found.");
            return;
        }

        if (user.password !== password) {
            alert("Incorrect password.");
            return;
        }

        // Save login session
        if (rememberMe) {
            localStorage.setItem("loggedInUser", user.username);
        } else {
            sessionStorage.setItem("loggedInUser", user.username);
        }

        alert("Login successful!");
        window.location.href = "profile.html";
    });

});
