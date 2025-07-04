const pwdBtn = document.getElementById("pwdBtn");
const pwd = document.getElementById("pwd");

pwdBtn.addEventListener("click", () => {
  if (pwd.type === "password") {
    pwd.type = "text";
    pwdBtn.textContent = "Hide";
  } else {
    pwd.type = "password";
    pwdBtn.textContent = "Show";
  }
});
