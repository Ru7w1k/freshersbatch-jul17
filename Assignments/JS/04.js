function table() {
	var num = prompt("Enter Number : ");
	var data = "";
	for (var i = 1; i <= 10; i++) {
		var tmp = num * i;
		data += tmp + "<br>";
	}
	document.getElementById('table').innerHTML = data;

	setTimeout( function again() {
		var ans = confirm("Enter Another Number?");
		if(ans == true) {
			table();
		}
	}, 2000);
}

