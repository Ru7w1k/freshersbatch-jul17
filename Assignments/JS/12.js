function check() {
	var str = document.getElementById('str').value;
	var vowels = ['a','e','i','o','u'];
	var res = "";
	if (str.length == 1) {
		for(var i in vowels) {
			if(vowels[i] == str) {
				res += "<br> Not Consonant";
				break;
			}
		}
		res += "<br> Consonant";
	}
	else  {
		var rev = revstr(str);
		if(rev == str) {
			res += "<br> Palindrome String";
		}
		else {
			res += "<br> Not a Palindrome String";
		}
	}

	document.getElementById('ans').innerHTML = res;
}

function revstr(str) {
	var splitString = str.split(""); 
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray; 
}