function div() {
	try {
		var num1 = parseInt(document.getElementById('num1').value);
		var num2 = parseInt(document.getElementById('num2').value);

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