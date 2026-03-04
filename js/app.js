function login() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const data = new URLSearchParams();
  data.append("username", username);
  data.append("password", password);

  fetch("https://script.google.com/macros/s/AKfycbxDLnMXNuzOCQKAeH5KQd4jHejloqDtLU2e89hR2x2XXp9w0qIPgFYzhAioRRqtTLNjfQ/exec", {
    method: "POST",
    body: data
  })
  .then(res => res.json())
  .then(res => {
    if (res.status === "success") {
      window.location.href = "dashboard.html";
    } else {
      alert("Login gagal");
    }
  })
  .catch(err => console.error(err));
}
