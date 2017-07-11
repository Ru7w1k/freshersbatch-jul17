function check() {
	var str = document.getElementById('str').value;
	var vowels = ['a','e','i','o','u'];
	var res = "<br> Consonant";
	if (str.length == 1) {
		for(var i in vowels) {
			if(vowels[i] == str) {
				res = "<br> Not Consonant";
				break;
			}
		}
		
	}
	else  {
		res = "<br> Palindrome String";
		var i = 0;
		var j = str.length - 1;
		for( ; i <= j ; i++, j--) {
			if(str[i] != str[j]) {
				res = "<br> Not a Palindrome String";
				break;
			}
		}
	}

	document.getElementById('ans').innerHTML = res;
}