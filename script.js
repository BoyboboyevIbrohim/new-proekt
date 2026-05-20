const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const showLogin = document.getElementById("showLogin");
const showRegister = document.getElementById("showRegister");

if (showLogin)
  showLogin.onclick = () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  };
if (showRegister)
  showRegister.onclick = () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  };


  function togglePassword(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (!input || !icon) return;
  icon.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      icon.textContent = "🫣";
    } else {
      input.type = "password";
      icon.textContent = "😑";
    }
  });
}
togglePassword("loginPassword", "toggleLoginPassword");
togglePassword("regPassword", "toggleRegPassword");
togglePassword("regConfirm", "toggleRegConfirm");

const regBtn = document.getElementById("registerBtn");
if (regBtn)
  regBtn.onclick = () => {
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const pass = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regConfirm").value;
    const error = document.getElementById("regError");
    error.textContent = "";
    if (!name || !email || !pass || !confirm) {
      error.textContent = "All fields are required.";
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      error.textContent = "Invalid email format.";
      return;
    }
    if (pass.length < 6) {
      error.textContent = "Password must be at least 6 characters.";
      return;
    }
    if (pass !== confirm) {
      error.textContent = "Passwords do not match.";
      return;
    }
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", pass);
    alert("Registration successful! Now you can log in.");
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  };

const loginBtn = document.getElementById("loginBtn");
if (loginBtn)
  loginBtn.onclick = () => {
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPassword").value;
    const error = document.getElementById("loginError");
    error.textContent = "";
    const savedEmail = localStorage.getItem("userEmail");
    const savedPass = localStorage.getItem("userPassword");
    if (!email || !pass) {
      error.textContent = "All fields are required.";
      return;
    }
    if (email !== savedEmail || pass !== savedPass) {
      error.textContent = "Incorrect email or password.";
      return;
    }
    alert("Login successful!");
  };
