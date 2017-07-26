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

	var _constants = __webpack_require__(1);

	var _scoping = __webpack_require__(2);

	var _enhanced_object_properties = __webpack_require__(3);

	var _arrow = __webpack_require__(4);

	var _extended_parameter_handling = __webpack_require__(5);

	var _template_literal = __webpack_require__(6);

	var _destructuring_assignment = __webpack_require__(7);

	(0, _constants.testConstant)();
	(0, _scoping.testScoping)();
	(0, _enhanced_object_properties.testEnhancedObjectProperties)();
	(0, _arrow.testArrow)();
	(0, _extended_parameter_handling.testExtendedParameterHandling)();
	(0, _template_literal.testTemplateLiteral)();
	(0, _destructuring_assignment.testDestructuringAssignment)();

	// document.write("<h1>Hello ES6!</h1>");
	// console.log("Hello ES6");

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.testConstant = testConstant;
	function testConstant() {
	    var a = 10;
	    //a = 20;
	    console.log("a : ", a);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.testScoping = testScoping;
	function testScoping() {
	    if (true) {
	        var a = 100;
	        console.log("a : ", a);
	    }
	    // undefined here
	    // console.log("a : ", a);
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.testEnhancedObjectProperties = testEnhancedObjectProperties;
	function testEnhancedObjectProperties() {
	    var order = {
	        id: 101,
	        title: "sample order",
	        price: 500,
	        printOrder: function printOrder() {
	            console.log("Order ID ", this.id, " Title ", this.title, " with price ", this.price);
	        },
	        getPrice: function getPrice() {
	            console.log("Price : ", this.price);
	        }
	    };

	    order.printOrder();
	    order.getPrice();

	    var copyOrder = {};
	    Object.assign(copyOrder, order);
	    console.log(copyOrder);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.testArrow = testArrow;
	function testArrow() {
	    var names = ['Tom', 'Ivan', 'Jerry'];

	    console.log(names);
	    var lens = names.map(function (name) {
	        var obj = {
	            name: name,
	            length: name.length
	        };
	        return obj;
	    });

	    console.log(lens);
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.testExtendedParameterHandling = testExtendedParameterHandling;
	function testExtendedParameterHandling() {
	    var maths = {
	        add: function add() {
	            var num1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
	            var num2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

	            return num1 + num2;
	        }
	    };

	    console.log(maths.add());
	    console.log(maths.add(30));
	    console.log(maths.add(undefined, 45));

	    var userFriends = function userFriends(username) {
	        var frnds = "";

	        for (var _len = arguments.length, friends = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            friends[_key - 1] = arguments[_key];
	        }

	        friends.map(function (frnd) {
	            return frnds += frnd + ' ';
	        });
	        console.log(username, '\'s friends : ', frnds);
	        // friends.map((frnd) => console.log(username, ' knows ', frnd));
	    };
	    userFriends('Rutwik', 'Tom', 'Ivan', 'Jerry');

	    var printCapitalNames = function printCapitalNames(n1, n2, n3, n4, n5) {
	        console.log("First : ", n1.toUpperCase());
	        console.log("Second : ", n2.toUpperCase());
	        console.log("Third : ", n3.toUpperCase());
	        console.log("Forth : ", n4.toUpperCase());
	        console.log("Fifth : ", n5.toUpperCase());
	    };

	    var names = ['Rutwik', 'Tony', 'Tom', 'Jerry', 'Ivan', 'Sample'];
	    printCapitalNames.apply(undefined, names);
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.testTemplateLiteral = testTemplateLiteral;
	function testTemplateLiteral() {
	    var laptopModel = "HP Pavilion x360 13t";
	    var deskNo = "23";
	    var name = "Rutwik";

	    var ticket = "Hello Sysnet, I'm " + name + " from desk number " + deskNo + ".\n    I'm having some problems with my laptop.\n    It's model number is " + laptopModel;

	    console.log("Ticket : ", ticket);
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.testDestructuringAssignment = testDestructuringAssignment;
	function testDestructuringAssignment() {
	    var arr = [123, 245, 563, 456];

	    var val = arr[2];

	    console.log('3rd : ', val);

	    var organization = {
	        name: "sample Organization",
	        address: {
	            street: "J. M. Road",
	            city: "Pune",
	            state: "Maharashtra",
	            pin: "411002"
	        }
	    };

	    var pin = organization.address.pin;

	    console.log("pin :", pin);
	}

/***/ }
/******/ ]);