// we want to run the function for pi

function getPi() {
    return 22/7;
}

function getAndOutputPi(){
	var pi = getPi();
	console.log(pi);
	$('#pi').html(pi);
}

$('#getPi').click(getAndOutputPi);