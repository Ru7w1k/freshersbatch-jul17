var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = (function () {
    function Account(accId, accName, accBal) {
        this.accId = accId;
        this.accName = accName;
        this.accBal = accBal;
    }
    Account.prototype.balance = function () {
        return this.accBal;
    };
    return Account;
}());
var SavingsAccount = (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accId, accName, accBal, interest) {
        var _this = _super.call(this, accId, accName, accBal) || this;
        _this.interest = interest;
        return _this;
    }
    SavingsAccount.prototype.balance = function () {
        return this.accBal + this.interest;
    };
    return SavingsAccount;
}(Account));
var CurrentAccount = (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(accId, accName, accBal, cashCredit) {
        var _this = _super.call(this, accId, accName, accBal) || this;
        _this.cashCredit = cashCredit;
        return _this;
    }
    CurrentAccount.prototype.balance = function () {
        return this.accBal + this.cashCredit;
    };
    return CurrentAccount;
}(Account));
function getTotalCashInBank(accnts) {
    var totalCash = 0;
    accnts.map(function (acnt) { return totalCash += acnt.balance(); });
    return totalCash;
}
function testBank() {
    console.log("test");
    var sa1 = new SavingsAccount(101, 'Cust1', 10000, 1000);
    var sa2 = new SavingsAccount(102, 'Cust2', 15000, 1050);
    var sa3 = new SavingsAccount(103, 'Cust3', 17000, 1200);
    var sa4 = new SavingsAccount(104, 'Cust4', 20000, 2000);
    var ca1 = new CurrentAccount(105, 'Cust5', 10700, 1200);
    var ca2 = new CurrentAccount(106, 'Cust6', 15000, 1020);
    var ca3 = new CurrentAccount(107, 'Cust7', 10050, 3000);
    var ca4 = new CurrentAccount(108, 'Cust8', 12000, 1200);
    var accnts = [sa1, sa2, sa3, sa4, ca1, ca2, ca3, ca4];
    var totalCash = getTotalCashInBank(accnts);
    console.log('Total Cash', totalCash);
}
testBank();
