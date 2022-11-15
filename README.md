# Your Bank Account

This command line app allows users to view their banking statement. Their statement includes all the vitals like their credit, debit, balance and dates of all these transactions.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit   || balance
-------------------------------------------
14/01/2023 ||         || 500.00  || 2500.00
13/01/2023 || 2000.00 ||         || 3000.00
10/01/2023 || 1000.00 ||         || 1000.00
```

### User Stories

```
As a bank account user
Up to date balance that updates in an instance
I would like to deposit and withdraw funds from my account
```

```
As a bank account user
I can access my monies and have financial freedom
I would like to withdraw available funds from my account
```

```
As a bank account user
I would like to be up to speed on the activity of my account
I would like a full statement of my banking activities from credits, debits, withdrawals and balances
```
```
As a bank account user
I would like to have access to my account
I would like a full statement of my banking activities from credits, debits, withdrawals and balances
```

```
As a bank account user
I would like a prompt if I'm close to overdraft
I would like to know if I'm exceeding funds in my account
```



### Diagram

This diagram shows the main class of yourBankAccount

<img width="862" alt="Screenshot 2022-11-15 at 21 30 46" src="https://user-images.githubusercontent.com/111147520/202030700-94d9c0d0-0ba6-45c9-bffb-89e636d74091.png">




## Tech Stack

This command line app uses:

* Node (v18.12)
* Jest (v29.3.1)
* NPM (8.19.2)

## How to run

Clone this repo:

```
github.com/paulinejdavis/Bank-tech-test
```

To run this command line application, install packages:

Install npm
```
$ npm install
```
Initalize this project

```
$ npm init -y
```
Add jest to this project
```
$ npm add jest
```
Install jest globally
```
$ npm install -g jest
```
To run tests
```
$ jest
```


<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---


<!-- END GENERATED SECTION DO NOT EDIT -->
