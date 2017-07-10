function div() {
	try {
		var num1 = prompt("Enter number 1 ");	

		var num2 = prompt("Enter number 2 ");	
		if (num2 == 0) {
			throw "LessThanZero";
		}
		alert("Division is " + (num1 / num2 ));
	}
	

	catch(err) {
		if(err == "LessThanZero") {
			alert("Number cannot be less than zero!");
		}
	}

	
	

}