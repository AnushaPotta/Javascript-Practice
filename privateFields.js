//Use Private Fields and Getters
//Define a BankAccount class with:

// private field #balance

//A constructor that takes an initial balance

//A method deposit(amount) that adds to the balance

//A method withdraw(amount) that subtracts from the balance (but only if there’s enough money)

//A getter balance that returns the current balance

class BankAccount {
  #balance;
  constructor(initbalance) {
    this.#balance = initbalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance = this.#balance - amount;
    } else console.log("Sorry not enough money");
  }

  get balance() {
    return this.#balance;
  }
}

const A = new BankAccount(200);
A.deposit(200);
A.withdraw(500);
console.log(A.balance);
