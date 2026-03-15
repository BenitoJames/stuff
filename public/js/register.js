document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.getElementById("registerForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email"); // FIXED
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const avatarInput = document.getElementById("avatar");
    const avatarPreview = document.getElementById("avatarPreview");
    const bioInput = document.getElementById("bio");

    // Avatar preview
    avatarInput.addEventListener("change", function () {
        const file = avatarInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                avatarPreview.src = e.target.result;
                avatarPreview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const bio = bioInput.value.trim();
        const avatar = avatarPreview.src || "";

        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill in all required fields.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if username already exists
        const userExists = users.some(user => user.username === username || user.email === email);

        if (userExists) {
            alert("Username or Email already exists.");
            return;
        }

        const newUser = {
            username,
            email,
            password,
            bio,
            avatar
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users)); // users saved to localStorage as for now

        alert("Registration successful!");
        window.location.href = "login.html";
    });

});
