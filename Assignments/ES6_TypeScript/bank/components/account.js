class Account {
    constructor(accId, accName, accBal) {
        this.accId = accId;
        this.accName = accName;
        this.accBal = accBal;
    }

    // get accBal() {
    //     return this._accBal;
    // }

    // set accBal(val) {
    //     this._accBal = val;
    // }
}

class SavingsAccount extends Account {
    constructor(accId, accName, accBal, interest) {
        super(accId, accName, accBal);
        this.interest = interest;
    }

    balance() {
        return this.accBal + this.interest;
    }
}

class CurrentAccount extends Account {
    constructor(accId, accName, accBal, cashCredit) {
        super(accId, accName, accBal);
        this.cashCredit = cashCredit;
    }

    balance() {
        return this.accBal + this.cashCredit;
    }
}

export function testBank() {

    let sa1 = new SavingsAccount(101, 'Cust1', 10000, 1000);
    let sa2 = new SavingsAccount(102, 'Cust2', 15000, 1050);
    let sa3 = new SavingsAccount(103, 'Cust3', 17000, 1200);
    let sa4 = new SavingsAccount(104, 'Cust4', 20000, 2000);
    let ca1 = new CurrentAccount(105, 'Cust5', 10700, 1200);
    let ca2 = new CurrentAccount(106, 'Cust6', 15000, 1020);
    let ca3 = new CurrentAccount(107, 'Cust7', 10050, 3000);
    let ca4 = new CurrentAccount(108, 'Cust8', 12000, 1200);

    let accnts = [sa1,sa2,sa3,sa4,ca1,ca2,ca3,ca4];
    let totalCash = getTotalCashInBank(accnts);
    console.log('Total Cash', totalCash);
}

function getTotalCashInBank(accnts) {
    let totalCash = 0;
    accnts.map((acnt) => totalCash += acnt.balance());
    return totalCash;
}