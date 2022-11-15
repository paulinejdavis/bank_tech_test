const Account = require('../lib/account')

describe('Account', () => {
    it ('returns the balance of the account', () => {
        const account = new Account;
        expect(account.getBalance()).toBe(0);
    });
});

