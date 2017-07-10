function getFactorial() {
	var num = document.getElementById('num').value;
	var ans = 1;

	for(var i = num ; i > 0 ; i--) {
		ans *= i;
	}
	
	document.getElementById('ans').innerHTML = num + "! = " + ans;
}