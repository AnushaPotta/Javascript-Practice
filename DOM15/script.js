const inputPwd = document.getElementById("inputPwd");
const pwdStrength = document.getElementById("pwdStrength");

inputPwd.addEventListener("input", (event) => {
  const value = event.target.value;
  if (value.length < 8) {
    pwdStrength.style.color = "red";
    pwdStrength.textContent = "Strength: Too weak";
  } else if (!/[0-9]/.test(value)) {
    pwdStrength.style.color = "red";
    pwdStrength.textContent = "Strength: Include atleast one number";
  } else if (!/[!@#$%^&*()_+{}]/.test(value)) {
    pwdStrength.style.color = "red";
    pwdStrength.textContent = "Strength: Include atleast one special character";
  } else {
    pwdStrength.style.color = "green";
    pwdStrength.textContent = "Strength: Strong";
  }
});
