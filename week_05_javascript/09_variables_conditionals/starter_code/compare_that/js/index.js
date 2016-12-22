$( document ).ready(function(){

	// when button clicked compare numbers
	// output symbol

	function compareNumbers(){
		var first = $("#a").val();
		var second = $("#b").val();
		// compare the two and output accordingly
		if(first > second){
			$('#comparison').text(">");
		} else if(first < second){
			$('#comparison').text("<");
		} else if(first === second){
			$('#comparison').text("===");
		}
	}

	$("#submit").click(compareNumbers);

});