// pass arguments in
// use $().val
// all inputs are strings
// turn string into integer parseInt

function addFiveOnIt(Num){
	return Num + 5;
}

function add5(){
	var inputNumNum = $("#inputNumber").val();
	inputNumNum = parseInt(inputNumNum)
	var total = addFiveOnIt(inputNumNum)
	$("#output").text(total);
}

$("#add").click(add5);


