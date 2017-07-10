function calcYear() {
	var age = document.getElementById('age').value;
	var today = new Date();
	var yob = new Date();
	yob.setDate(today.getDate() - (age * 365));
	console.log(today.getYear());
	alert("Your year of bitrh is" + yob.getFullYear());
}