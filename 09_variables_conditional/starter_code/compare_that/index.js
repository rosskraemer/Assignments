$( document ).ready(function(){

function compareNumbers(){
	var first = $("#a").val();
	var second = $("#b").val();

	if(first < second){
		$("#comparison").text("<");
	}
	else if(first > second){
		$("#comparison").text(">");
	}
	else if(first === second){
		$("#comparison").text("=");
		console.log("hello")
	}
};


});