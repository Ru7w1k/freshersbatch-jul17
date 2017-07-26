/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _account = __webpack_require__(1);

	var _symbols = __webpack_require__(2);

	var _iterators = __webpack_require__(3);

	// testBank();
	// testFib();
	(0, _iterators.getNextArmstrong)();
	(0, _iterators.getNextArmstrong)();
	(0, _iterators.getNextArmstrong)();
	(0, _iterators.getNextArmstrong)();
	(0, _iterators.getNextArmstrong)();
	(0, _iterators.getNextArmstrong)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.testBank = testBank;

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Account = function Account(accId, accName, accBal) {
	    _classCallCheck(this, Account);

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
	;

	var SavingsAccount = function (_Account) {
	    _inherits(SavingsAccount, _Account);

	    function SavingsAccount(accId, accName, accBal, interest) {
	        _classCallCheck(this, SavingsAccount);

	        var _this = _possibleConstructorReturn(this, (SavingsAccount.__proto__ || Object.getPrototypeOf(SavingsAccount)).call(this, accId, accName, accBal));

	        _this.interest = interest;
	        return _this;
	    }

	    _createClass(SavingsAccount, [{
	        key: 'balance',
	        value: function balance() {
	            return this.accBal + this.interest;
	        }
	    }]);

	    return SavingsAccount;
	}(Account);

	var CurrentAccount = function (_Account2) {
	    _inherits(CurrentAccount, _Account2);

	    function CurrentAccount(accId, accName, accBal, cashCredit) {
	        _classCallCheck(this, CurrentAccount);

	        var _this2 = _possibleConstructorReturn(this, (CurrentAccount.__proto__ || Object.getPrototypeOf(CurrentAccount)).call(this, accId, accName, accBal));

	        _this2.cashCredit = cashCredit;
	        return _this2;
	    }

	    _createClass(CurrentAccount, [{
	        key: 'balance',
	        value: function balance() {
	            return this.accBal + this.cashCredit;
	        }
	    }]);

	    return CurrentAccount;
	}(Account);

	function testBank() {

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

	function getTotalCashInBank(accnts) {
	    var totalCash = 0;
	    accnts.map(function (acnt) {
	        return totalCash += acnt.balance();
	    });
	    return totalCash;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.testFib = testFib;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var preNo = Symbol();
	var curNo = Symbol();

	var fiboncci = function () {
	    function fiboncci() {
	        _classCallCheck(this, fiboncci);

	        this[preNo] = 0;
	        this[curNo] = 1;
	    }

	    _createClass(fiboncci, [{
	        key: "next",
	        value: function next() {
	            var _ref = [this[curNo] + this[preNo], this[curNo]];
	            this[curNo] = _ref[0];
	            this[preNo] = _ref[1];

	            return this[curNo];
	        }
	    }]);

	    return fiboncci;
	}();

	function testFib() {
	    var fib = new fiboncci();
	    console.log(fib.next());
	    console.log(fib.next());
	    console.log(fib.next());
	    console.log(fib.next());
	    console.log(fib.next());
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getNextArmstrong = getNextArmstrong;
	var cur = 0;

	function getNextArmstrong() {
	    while (!isArmstrong(cur)) {
	        cur += 1;
	    }
	    console.log('Armstrong Number', cur);
	    cur += 1;
	};

	function isArmstrong(num) {

	    var sum = 0;
	    while (num > 0) {
	        var r = num % 10;
	        sum = sum + r * r * r;
	        num = Math.floor(num / 10);
	    }

	    if (cur == sum) {
	        return true;
	    } else {
	        return false;
	    }
	};

/***/ }
/******/ ]);