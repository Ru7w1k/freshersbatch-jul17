function calcChars() {
	var str = document.getElementById('str').value;
	var count = 0;
	for(var i = 0 ; i < str.length ; i++) {
		if(str[i] != ' ') {
			count++;
		}
	}

	document.getElementById('ans').innerHTML = "<h2> Character Count is : " + count + "</h2>";
}