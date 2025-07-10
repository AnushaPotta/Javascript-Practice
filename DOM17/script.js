const form = document.getElementById("formInput");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name === "" || email === "") {
    message.style.color = "red";
    message.textContent = "Enter both the fields";
  } else {
    message.style.color = "green";

    message.textContent = `Thank you ${name}! you email ${email} is submitted successfully.`;
  }
});
