$(document ).ready(function(){


//input celsius temp


//convert to F
function convert(){
	var celsius = $(temp_celsius).val();
	var far = 0;
	far = celsius * 9 / 5 + 32;
	console.log(far);
}

$("#submit").click(convert);

//output onto the page the new temp in F

})