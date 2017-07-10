function load() {
	try {
		var letter = prompt("Enter Alphabet");
		if (letter.length > 1 || letter.length < 1) {
			throw "SingleCharacterRequired";
		}		

		var vowels = ['a','e','i','o','u'];
		
		var isVowel = false;
		letter.toLowerCase();
		for (var x in vowels) {
			if (vowels[x] == letter) {
				isVowel = true;
				break;
			}			
		}

		if (isVowel) {
			alert(letter + " Letter is Vowel");
		}
		else {
			alert(letter + " is Not Vowel");
		}
	}
	catch(err) {
		if (err == "SingleCharacterRequired" ) {
			alert("Only One Character Required!");
			load();
		}
	}
}