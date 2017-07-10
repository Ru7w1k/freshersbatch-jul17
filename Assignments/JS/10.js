function asort() {
	var arr = [10,54,84,54,21,54,84,87,9,6,48,49,65,87];
	var res = "";	

	arr = mysort(arr);	

	for(var i in arr) {
		res += arr[i] + " ";
	}
	document.getElementById('ans').innerHTML = res;
}

function dsort() {
	var arr = [10,54,84,54,21,54,84,87,9,6,48,49,65,87];
	var res = "";	

	arr = mysort(arr);	

	for(var i = arr.length - 1 ; i >= 0 ; i--) {
		res += arr[i] + " ";
	}
	document.getElementById('ans').innerHTML = res;
}

function mysort(arr) {
	for(var i = 0 ;  i < arr.length ; i++) {
		for(var j = i ; j < arr.length ; j++) {
			if(arr[i] > arr[j]) {
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}
	return arr;
}