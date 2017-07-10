var logins = [
	{
		uname : "admin",
		passwd : "admin"
	},
	{
		uname : "test",
		passwd : "test"
	},
	{
		uname : "rutwik",
		passwd : "rutwik"
	}

];


var attempts = 0;

function login() {
	noOfAttempts();
	if(attempts > 3) {
		alert("3 Invalid Attempts! Blocking access..");
		window.location = "failed.html";
	}

	var uname = document.getElementById('uname').value;
	var passwd = document.getElementById('passwd').value;
	var invalid = true;

	for (var i in logins) {
		if (uname == logins[i]['uname'] && passwd == logins[i]['passwd']) {
			var invalid = false;
			alert("Login successful!");
			window.location = "success.html";
			break;
		}
		else {
			invalid = true;
		}
	}

	if(invalid) {
		alert("Invalid Username or password!")
	}
}

function noOfAttempts() {
	attempts++;	
}