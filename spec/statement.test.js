const Statement = require('../lib/statement');

describe('Statement', () => {
    
    it('returns an empty table', () => {
        const myStatement = new Statement();
        expect(myStatement.printStatement()).toBe('date || credit || debit || balance');
    });
});


     