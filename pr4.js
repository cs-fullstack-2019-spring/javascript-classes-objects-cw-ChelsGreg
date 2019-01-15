

//Create a Bank class with the the name and balance attributes.
// Afterwards, create an object of the class and follow the instructions below:
//Creates an account named "Matt's account" with the balance of 1000
//Creates an account named "My account" with the balance of 0
//Withdraws 100.0 from Matt's account
//Deposits 100.0 to My account
//Prints both accounts



class Bank
{

    constructor(name, balance)
    {
        this.name = name;
        this.balance = balance;
    }

    withDraw()
    {
    return (this.balance - 100);
    }

    Deposit()
    {
     return (this.balance + 100);
    }





}

var mattsAccount = new Bank("Matt", 1000);
var myAccount = new Bank("Chelsea", 0);

console.log(mattsAccount.withDraw());
console.log(myAccount.Deposit());




