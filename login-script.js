document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (usernameValue === "admin@email.com" && passwordValue === "admin123") {
            const successModal = new bootstrap.Modal(document.getElementById("successModal"));
            successModal.show();
            setTimeout(function() {
                window.location.href = "../fb-stories/main/index.html";
            }, 2000);
        } else if (usernameValue === "admin@email.com" && passwordValue !== "admin123") {
            const invalidPasswordModal = new bootstrap.Modal(document.getElementById("invalidPasswordModal"));
            invalidPasswordModal.show();
        } else if (usernameValue !== "christianjasonsupremo@gmail.com") {
            const invalidEmailModal = new bootstrap.Modal(document.getElementById("invalidEmailModal"));
            document.getElementById("invalidEmailMessage").innerText = "Email is not associated with an account, consider Registering.";
            invalidEmailModal.show();
        } else {
            const invalidPasswordModal = new bootstrap.Modal(document.getElementById("invalidPasswordModal"));
            invalidPasswordModal.show();
        }
    });
});
