class Account {
    constructor() {
        this.balance = 1000;
    }
   getBalance() {
        return this.balance;
    }
    newBalance(total) {
        this.balance += total;
    }
}

module.exports = Account;