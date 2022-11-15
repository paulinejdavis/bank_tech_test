class Statement{
    constructor() {
        this.statement = [];
    }
    getTransaction(date, total, balance) {
        this.statement.push({date: date, total: total, balance: balance});
    }

    // printStatement() {
    //     console.log('date || credit || debit || balance');
    //     this.statement.forEach((transaction) => {
    //         if(transaction.total > 0) {
    //             console.log(`${transaction.date} || ${transaction.total} || || ${transaction.balance}`);
    //         } else {
    //             console.log(`${transaction.date} || || ${-transaction.total} || ${transaction.balance}`);
    //         }
    //     });
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

        // if (total >= 0) {
        //     this.statement.unshift(`${date} || ${total}.00 || || ${balance}.00`);
        // } else {
        //     this.statement.unshift(`${date} || || ${(total *= -1)}.00 || ${balance}.00`);
        // }
    // }
    deposit(total, datestring = this.dateNow()) {
        this.account.newBalance(total);
        this.statement.getTransaction(datestring, total, this.account.getBalance());
    }
}

module.exports = Statement;