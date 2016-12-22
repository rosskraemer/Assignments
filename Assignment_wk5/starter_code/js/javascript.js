
//on button click, run function to change bkgd
$("#submit-btn").click(changeBackground);
//define that function
	//get the input value
	
	

	function changeBackground(){
		var cityInput = $("#city-type").val();
		event.preventDefault();
		console.log("hello");
		console.log(cityInput)
		if(cityInput == "New York" || cityInput == "New York City" || cityInput == "NYC"){
		//make the background change
			console.log("working")
			$("body").css("background-image", "url(images/nyc.jpg)")
		}

	}




	//San Fran
	//if cityInput = 


	//"New York" or "New York City" or "NYC"
	
	

	//Austin