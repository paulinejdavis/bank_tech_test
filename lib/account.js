class Account {
    constructor() {
        alltransactions = [];
        this.balance = 0;
        this.transaction = 0; 
        this.allRows = 0

    }
    addTransaction(transaction){
        this.allTransaction.push(transaction);

    }
}

module.exports = Account;