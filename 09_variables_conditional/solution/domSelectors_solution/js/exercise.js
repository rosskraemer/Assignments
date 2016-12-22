/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 * Remember to 
 */

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
 */
 


/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 */

function yourName(){
	$('h2').text('Ross Kraemer is Awesome');
	console.log(yourName)	
	};

$('#button1').click(yourName);


/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact". 
 * Using jQuery change the content to read "True Fact".
 */

function trueFact(){
	$('.falseFact').text('True Fact');
	console.log('this worked')	
	};

$('#button1').click(trueFact);


/**
 * Question 4: 
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */

function changeBackground(){
	$('html').css('backgroundColor', 'pink');
	console.log('this really worked')	
	};

$('#button1').click(changeBackground);


/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */
function h2color(){
	
}

/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */




/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */




/**
 * Question 8:
 * Have the following code execute when button 3 is clicked. Write a JavaScript comment with a description of what happened. 
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */


/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * Bonus: Try to do this with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"});
 */





