const email = document.getElementById("emailInput");
const validate = document.getElementById("message");

email.addEventListener("input", (event) => {
  const value = event.target.value;

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    validate.textContent = "Your email is valid";
    validate.style.color = "green";
  } else {
    validate.textContent = "Enter valid email";
    validate.style.color = "red";
  }
});
