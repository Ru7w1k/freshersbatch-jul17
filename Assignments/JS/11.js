function vowels() {
	var str = "This is a test sentence.";
	var vowels = ['a','e','i','o','u'];
	var acnt = 0;
	var ecnt = 0;
	var icnt = 0;
	var ocnt = 0;
	var ucnt = 0;

	for(var i = 0 ; i < str.length ; i++) {
		if(str[i] == "a" ) {
			acnt++;
			continue;			
		}
		if(str[i] == "e" ) {
			ecnt++;
			continue;
		}
		if(str[i] == "i" ) {
			icnt++;
			continue;
		}
		if(str[i] == "o" ) {
			ocnt++;
			continue;
		}
		if(str[i] == "u" ) {
			ucnt++;
			continue;
		}
	}

	var res = "";
	res += " a = " + acnt + "<br>";
	res += " e = " + ecnt + "<br>";
	res += " i = " + icnt + "<br>";
	res += " o = " + ocnt + "<br>";
	res += " u = " + ucnt;

	document.getElementById('ans').innerHTML = res;
}