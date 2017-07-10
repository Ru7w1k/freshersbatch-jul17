function calc() {
	var arr = [10,54,84,74,21,59,84,87,9,6,48,49,65,887];
	var res = "";

	var curmax = arr[0];
	var curmin = arr[0];
	var total = 0;
	for(var i = 0 ; i < arr.length ; i++) {
		if (arr[i] > curmax) {
			curmax = arr[i];
		}

		if (arr[i] < curmin) {
			curmin = arr[i];
		}

		total += arr[i];
	}
	var avg = total / arr.length;
	res += "max : " + curmax + "<br><br>";
	res += "min : " + curmin + "<br><br>";
	res += "avg : " + avg + "<br><br>";
	res += "sum : " + total + "<br><br>";

	document.getElementById('ans').innerHTML = res;

}