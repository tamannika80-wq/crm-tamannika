const API_URL = "https://script.google.com/macros/s/AKfycbxTmX6ZONqCPowAz-agZm3_kSmI5F7pIVpLudt1jzX4CegyUNunxQVNl3miwrhTKRZKXg/exec";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            action: "login",
            username: username,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {

            // Simpan session login
            localStorage.setItem("isLoggedIn", "true");

            // Redirect ke dashboard
            window.location.href = "dashboard.html";

        } else {
            document.getElementById("message").innerText = "Login gagal!";
        }
    })
    .catch(err => {
        document.getElementById("message").innerText = "Terjadi kesalahan koneksi.";
        console.error(err);
    });
}
