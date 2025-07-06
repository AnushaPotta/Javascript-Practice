const inputPwd = document.getElementById("inputPwd");
const pwdStrength = document.getElementById("pwdStrength");
const strengthBar = document.getElementById("strengthBar");

inputPwd.addEventListener("input", (event) => {
  const value = event.target.value;

  let Strength = 0;

  if (value.length >= 8) Strength++;
  if (/[0-9]/.test(value)) Strength++;
  if (/[!@#$%^&*()_+{}]/.test(value)) Strength++;
  if (Strength === 0) {
    pwdStrength.style.color = "red";
    strengthBar.style.width = "0%";
    pwdStrength.textContent = "Strength: Too weak";
  } else if (Strength === 1) {
    pwdStrength.style.color = "red";

    pwdStrength.textContent = "Strength: Weak";
    strengthBar.style.width = "33%";
  } else if (Strength === 2) {
    pwdStrength.style.color = "red";
    strengthBar.style.width = "66%";

    pwdStrength.textContent = "Strength: Medium";
    strengthBar.style.backgroundColor = "orange";
  } else if (Strength === 3) {
    pwdStrength.style.color = "green";
    strengthBar.style.width = "100%";

    pwdStrength.textContent = "Strength: Strong";
    strengthBar.style.backgroundColor = "green";
  }
});
