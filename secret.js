1.
	function oneToTwoFiveFive(){
		var arr = [];
		for (var i = 1; i < 256; i++){
			arr.push(i);
		}
		return arr;
	}
	console.log(oneToTwoFiveFive());

2.
	function getEven(){
		var sum = 0;
		for (var i = 1; i < 1001; i++){
			if(i % 2 === 0){
				sum += i;
			}
		}
		return sum;
	}
	console.log(getEven());

3.
	function getOdd(){
		var sum = 0;
		for (var i = 1; i < 5001; i++){
			if(i % 2 === 1){
				sum += i;
			}
		}
		return sum;
	}
	console.log(getOdd());

4.
	function iterateAnArray(arr){
		var sum = 0;
		for (var i = 0; i < arr.length; i++){
			sum += arr[i];
		}
		return sum;
	}
	console.log(iterateAnArray([-5,2,5,12]));

5.
	function findMax(arr){
		var max = arr[0];
		for (var i = 0; i < arr.length; i++){
			if(max < arr[i]){
				max = arr[i];
			}
		}
		return max;
	}
	console.log(findMax([-3,3,7,-5]));

	6.
		function findAverage(arr){
			var avg = 0;
			for (var i = 0; i < arr.length; i++){
				avg += arr[i];
			}
			return avg / arr.length;
		}
		console.log(findAverage([1,3,5,7,20]));

	7.
		function arrayOdd(){
			var arr = [];
			for (var i = 1; i < 51; i++){
				if(i % 2 === 1){
					arr.push (i);
				}
			}
			return arr;
		}
		console.log(arrayOdd());