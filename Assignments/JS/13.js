function verifyEmail() {
	var email = document.getElementById('mail').value;
	var re = new RegExp("([A-Z]|[0-9]|[a-z])+[@]([A-Z]|[a-z])+[.]([A-Z]|[a-z])+");
	if (re.test(email)) {
		document.getElementById('ans').innerHTML = "Valid Email ID!";
	}
	else {
		document.getElementById('ans').innerHTML = "Not a Valid Email ID!";
	}

}