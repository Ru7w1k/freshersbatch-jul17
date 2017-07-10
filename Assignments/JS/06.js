function prime() {
	try {
		var num1 = 0;
		var num2 = 0;
		num1 = prompt("Enter 1st number");
		num1 = parseInt(num1);
		if(num1 < 0) {
			throw "LessThanZero";
		}
		num2 = prompt("Enter 2nd number");
		num2 = parseInt(num2);
		if(num2 < 0) {
			throw "LessThanZero";
		}

		if(num1 == num2) {
			throw "NoRange";
		}

		var primes = getPrimes(num1, num2);

		if(primes.length < 1) {
			document.write("No Prime Numbers between " + num1 + "and " + num2);
			return;
		}

		for(var x in primes) {
			document.write(primes[x] + "<br><br>");
		}
	}

	catch(err) {
		if(err == "LessThanZero") {
			alert("Number Cannot be less than zero");
			prime();
		}

		if(err == "NoRange") {
			alert("Please provide two different numbers");
			prime();
		}
	}
}

function getPrimes(num1, num2) {
	var max = (num1 > num2)? num1 : num2;
	var min = (num1 < num2)? num1 : num2;
	var primes = [];

	for(var i = min ; i <= max ; i++) {
		if(isPrime(i)) {
			primes.push(i);
		}
	}	
	return primes;
}

function isPrime(num) {
	if(num%2 == 0) {
		return false;
	}

	for(var i = 3 ; i <= Math.sqrt(num) ; i++) {
		if(num % i == 0) {
			return false;
		}		
	}
	return true;
}