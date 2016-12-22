// pass arguments in
// use $().val
// all inputs are strings
// turn string into integer parseInt

function addFive(number) {
    return number + 5;
}

function add(){
	var inputNumber = $("#inputNumber").val();
	inputNumber = parseInt(inputNumber);
	var output = addFive(inputNumber);
	$("#output").text(output);
}

$('#add').click(add);

