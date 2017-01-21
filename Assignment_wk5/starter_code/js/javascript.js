
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
			$("body").css("background-image", "url(images/nyc.jpg)");
		}else if(cityInput == "San Francisco" || cityInput == "SF" || cityInput == "Bay Area"){
			$("body").css("background-image", "url(images/sf.jpg)");
		}else if(cityInput == "Los Angeles" || cityInput == "LA" || cityInput == "LAX"){
			$("body").css("background-image", "url(images/la.jpg)");
		}else if(cityInput == "Austin" || cityInput == "ATX"){
			$("body").css("background-image", "url(images/austin.jpg)");
		}else if(cityInput == "Sydney" || cityInput == "STD"){
			$("body").css("background-image", "url(images/sydney.jpg)");
		}
	}


	//San Fran
	//if cityInput = 


	//"New York" or "New York City" or "NYC"
	
	

	//Austin