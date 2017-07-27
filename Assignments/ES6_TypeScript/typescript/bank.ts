class Account {
    accId : number;
    accName : string;
    accBal : number;

    constructor(accId : number, accName : string, accBal : number) {
        this.accId = accId;
        this.accName = accName;
        this.accBal = accBal;
    }

    balance() : number {
        return this.accBal;
    }
}

class SavingsAccount extends Account {
    interest : number;

    constructor(accId : number, accName : string, accBal : number, interest : number) {
        super(accId, accName, accBal);
        this.interest = interest;
    }

    balance() : number {
        return this.accBal + this.interest;
    }
}

class CurrentAccount extends Account {
    cashCredit : number;

    constructor(accId : number, accName : string, accBal : number, cashCredit : number) {
        super(accId, accName, accBal);
        this.cashCredit = cashCredit;
    }

    balance() : number {
        return this.accBal + this.cashCredit;
    }
}

function getTotalCashInBank(accnts : Array<Account>) : number {
    let totalCash : number = 0;
    accnts.map((acnt) => totalCash += acnt.balance());
    return totalCash;
}

function testBank() : void {
    console.log("test");
    let sa1 : SavingsAccount = new SavingsAccount(101, 'Cust1', 10000, 1000);
    let sa2 : SavingsAccount = new SavingsAccount(102, 'Cust2', 15000, 1050);
    let sa3 : SavingsAccount = new SavingsAccount(103, 'Cust3', 17000, 1200);
    let sa4 : SavingsAccount = new SavingsAccount(104, 'Cust4', 20000, 2000);
    let ca1 : CurrentAccount = new CurrentAccount(105, 'Cust5', 10700, 1200);
    let ca2 : CurrentAccount = new CurrentAccount(106, 'Cust6', 15000, 1020);
    let ca3 : CurrentAccount = new CurrentAccount(107, 'Cust7', 10050, 3000);
    let ca4 : CurrentAccount = new CurrentAccount(108, 'Cust8', 12000, 1200);

    let accnts : Array<Account> = [sa1,sa2,sa3,sa4,ca1,ca2,ca3,ca4];
    let totalCash : number = getTotalCashInBank(accnts);
    console.log('Total Cash', totalCash);
}

testBank();