const Account = require('../lib/account')

describe('Account', () => {
    it ('returns the balance of the account', () => {
        const account = new Account;
        expect(account.getBalance()).toEqual(1000);
    });

    it ('returns the new balance after a credit of £1000', () => {
        const account = new Account;
        account.newBalance(2000);
        expect(account.getBalance()).toBe(3000);
    });
});

