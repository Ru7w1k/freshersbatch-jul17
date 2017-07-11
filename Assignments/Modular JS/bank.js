// version 1
var bnkAccObj1 = {
	accNo  : "SB5468",
	accBal : 50000,
	accName: "Rutwik",

	withdraw : function(amt) {
		if((this.accBal - amt) > 0 ) {
			this.accBal = this.accBal - amt;
			return "Succ";
		} else {
			return "Fail";
		}
	},

	deposite : function(amt) {
		this.accBal += amt;
		return "Succ";
	}
};


// version 2
function bnkAcc(_accNo, _accBal, _accName) {
	this.accNo = _accNo;
	this.accBal = _accBal;
	this.accName = _accName;

	this.withdraw = function(amt) {
		if((this.accBal - amt) > 0 ) {
			this.accBal = this.accBal - amt;
			return "Succ";
		} else {
			return "Fail";
		}
	}

	this.deposite = function(amt) {
		this.accBal += amt;
		return "Succ";
	}
};


// version 3
var bnkAccType = {
	accNo : "",
	accBal : 0,
	accName : "",
	withdraw : function(amt) {
		if((this.accBal - amt) > 0 ) {
			this.accBal -= amt;
			return "Succ";
		} else {
			return "Fail";
		}
	},
	deposite : function(amt) {
		this.accBal += amt;
		return "Succ";
	}
};

// basic modular pattern
function BankAccount(_accNo, _accBal, _accName) {
	var accNo = _accNo;
	var accBal = _accBal;
	var accName = _accName;

	return {
		getAccNo : function() {
			return accNo;
		},

		getAccBal : function() {
			return accBal;
		},

		getAccName : function() {
			return accName;
		},

		withdraw : function(amt) {
			if((accBal - amt) > 0 ) {
				accBal -= amt;
				return "Succ";
			} else {
				return "Fail";
			}
		},

		deposite : function(amt) {
			accBal += amt;
			return "Succ";
		}
	}
};

// prototype
function BankAccountPro(_accNo, _accBal, _accName) {
	this.accNo = _accNo;
	this.accBal = _accBal;
	this.accName = _accName;
};

BankAccountPro.prototype.withdraw = function(amt) {
	if((this.accBal - amt) > 0 ) {
		this.accBal -= amt;
		return "Succ";
	} else {
		return "Fail";
	}
};

BankAccountPro.prototype.deposite = function(amt) {
	this.accBal += amt;
	return "Succ";
};

BankAccountPro.prototype.getAccBal = function() {
	return this.accBal;
};

BankAccountPro.prototype.getAccName = function() {
	return this.accName;
};

BankAccountPro.prototype.getAccNo = function() {
	return this.accNo;
};





function load() {
	var obj1 = "";
	var obj2 = "";
	var obj3 = "";
	var obj4 = "";
	var obj5 = "";

	var bnkAccObj2 = new bnkAcc("AB789", 8465, "Test");

	var bnkAccObj3 = Object.create(bnkAccType);
	bnkAccObj3.accNo = "XYZ456";
	bnkAccObj3.accBal = 10000;
	bnkAccObj3.accName = "Test 2";

	var bnkAccObj4 = new BankAccount("PQR465", 95000, "User1");

	var bnkAccObj5 = new BankAccountPro("AA4565", 50000, "User2");

	obj1 += "Name : " + bnkAccObj1.accName + "<br>Account Number : " + bnkAccObj1.accNo + "<br>Balance : " + bnkAccObj1.accBal;
	obj2 += "Name : " + bnkAccObj2.accName + "<br>Account Number : " + bnkAccObj2.accNo + "<br>Balance : " + bnkAccObj2.accBal;
	obj3 += "Name : " + bnkAccObj3.accName + "<br>Account Number : " + bnkAccObj3.accNo + "<br>Balance : " + bnkAccObj3.accBal;
	obj4 += "Name : " + bnkAccObj4.getAccName() + "<br>Account Number : " + bnkAccObj4.getAccNo() + "<br>Balance : " + bnkAccObj4.getAccBal();
	obj5 += "Name : " + bnkAccObj5.accName + "<br>Account Number : " + bnkAccObj5.accNo + "<br>Balance : " + bnkAccObj5.accBal;

	bnkAccObj1.withdraw(1000);
	obj1 += "<br> withdraw 1000 rs ";
	obj1 += "<br>" + bnkAccObj1.accBal;

	bnkAccObj1.deposite(200);
	obj1 += "<br> deposite 200 rs ";
	obj1 += "<br>" + bnkAccObj1.accBal;

	bnkAccObj2.withdraw(1000);
	obj2 += "<br> withdraw 1000 rs ";
	obj2 += "<br>" + bnkAccObj2.accBal;

	bnkAccObj2.deposite(200);
	obj2 += "<br> deposite 200 rs ";
	obj2 += "<br>" + bnkAccObj2.accBal;

	bnkAccObj3.withdraw(1000);
	obj3 += "<br> withdraw 1000 rs ";
	obj3 += "<br>" + bnkAccObj3.accBal;

	bnkAccObj3.deposite(200);
	obj3 += "<br> deposite 200 rs ";
	obj3 += "<br>" + bnkAccObj3.accBal;

	bnkAccObj4.withdraw(1000);
	obj4 += "<br> withdraw 1000 rs ";
	obj4 += "<br>" + bnkAccObj4.getAccBal();

	bnkAccObj4.deposite(200);
	obj4 += "<br> deposite 200 rs ";
	obj4 += "<br>" + bnkAccObj4.getAccBal();

	bnkAccObj5.withdraw(1000);
	obj5 += "<br> withdraw 1000 rs ";
	obj5 += "<br>" + bnkAccObj5.getAccBal();

	bnkAccObj5.deposite(200);
	obj5 += "<br> deposite 200 rs ";
	obj5 += "<br>" + bnkAccObj5.getAccBal();

	document.getElementById('obj1').innerHTML = obj1;
	document.getElementById('obj2').innerHTML = obj2;
	document.getElementById('obj3').innerHTML = obj3;
	document.getElementById('obj4').innerHTML = obj4;
	document.getElementById('obj5').innerHTML = obj5;

}
