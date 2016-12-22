$(document).ready(function(){
	//setting a variable
	var numberTotal = 0;

	//when a button is clicked, do math

	//button 0 zeroes out number
		//get the button va jquerry, set the click
		$('#zero').click(zeroClick);


	//button +5 adds 5
		//get the button va jquerry, set the click
		$('#add5').click(fiveClick);

	//button +10 adds 10
		//get the button va jquerry, set the click
		$('#add10').click(tenClick);


	//button -1 subtracts 1
		//get the button va jquerry, set the click
		$('#sub1').click(subClick);

	//function for zero button
	function zeroClick(){
		//make value 0
		numberTotal = 0;
		$('#result').text(numberTotal);
	};

	//function for 5 button
	function fiveClick(){
		numberTotal = numberTotal + 5;
		$('#result').text(numberTotal);

	};

	function tenClick(){
		numberTotal = numberTotal + 10;
		$('#result').text(numberTotal)
	};


	function subClick(){
		numberTotal = numberTotal - 1;
		$('#result').text(numberTotal);

	};
	



	});
