//PasswordManager Class
//Create a PasswordManager class with the following requirements:

//✅ Requirements:
//A private field #password that stores the actual password.

//A constructor that sets the password.

//A method updatePassword(oldPassword, newPassword):

//Only updates the password if oldPassword matches the current one.

//If it doesn’t match, print "Incorrect old password!".

//A getter maskedPassword that returns the password masked as asterisks (*) of the same length.

class PasswordManager {
  #password;

  constructor(pwd) {
    this.#password = pwd;
  }

  updatePassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
    } else {
      console.log("Incorrect old password ");
    }
  }

  get maskedPassword() {
    let maskedPassword = "";
    for (let i = 0; i < this.#password.length; i++) {
      maskedPassword += "*";
    }
    return maskedPassword;
  }
}

const pwd1 = new PasswordManager("Hello");
pwd1.updatePassword("Hello", "Red");
console.log(pwd1.maskedPassword);
