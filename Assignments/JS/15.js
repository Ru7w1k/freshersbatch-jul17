function removeSpaces() {
	var str = document.getElementById('str').value;
	str = str.trim();
	document.getElementById('ans').innerHTML = "<h3>" + str + "</h3>";
}