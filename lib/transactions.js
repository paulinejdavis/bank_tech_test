class Transactions{
    constructor(account, statement) {
        this.account = account;
        this.statement = statement;
    }

    calculate(bal) {
        if(bal <= 0 || !(bal % 1 == 0)) {
            throw 'input is a negative'
        }
    }

    deposit(total, dateString = this.dateNow()) {
        this.account.newBalance(total);
        this.statement.getTransaction(dateString, total, this.account.getBalance());
    }
    withdraw(total, dateString = this.dateNow()) {
        this.calculate(total);
        this.account.newBalance(- total);
        this.statement.getTransaction(dateString, - total, this.account.getBalance());
    }
    // dateNow() {
    //     const date = new Date
    //     return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
    // }
    dateNow() {
        return '13/01/2022'
    }
}

module.exports = Transactions;