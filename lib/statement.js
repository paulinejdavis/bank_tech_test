class Statement{
    constructor() {
        this.statement = [];
    }
    getTransaction(date, total, balance) {
        this.statement.push({date: date, total: total, balance: balance});
    }

    printStatement() {
        let statement = 'date || credit || debit || balance';
        this.statement.forEach((transaction) => {
            if(transaction.total > 0) {
                statement += `\n${transaction.date} || ${transaction.total} || || ${transaction.balance}`;
            } else {
                statement += `\n${transaction.date} || || ${-transaction.total} || ${transaction.balance}`;
            }
        });
        return statement;
    }

    deposit(total, datestring = this.dateNow()) {
        this.account.newBalance(total);
        this.statement.getTransaction(datestring, total, this.account.getBalance());
    }
}

module.exports = Statement;