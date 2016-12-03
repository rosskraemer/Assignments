$(document).ready(function(){
	$(".readmore a").click(showmore);
	function showmore(){
		event.preventDefault();
		$("#show-this-on-click").slideDown();
		$(".readless").show();
		$(".readmore").hide();	
	}

	$(".readless a").click(showless);
	function showless(){
		event.preventDefault();
		$("#show-this-on-click").slideUp();
		$(".readless").hide();
		$(".readmore").show();
		
	}

	$(".learnmore").click(showlearnmore);
	function showlearnmore(){
		event.preventDefault();
		$("#learnmoretext").slideDown();
		$(".learnmore").hide();
	}

});
