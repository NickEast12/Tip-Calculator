function myFunction() {
// Assigning the user input to the variables
var input = document.getElementById('bill').value;
var tipRate = document.getElementById('tip').value;
var people = document.getElementById('people').value;
// form validation
if (isNaN(input)) {
	document.getElementById('yourBill').innerHTML = 
		"This is not a number!";
	document.getElementById('yourBill').style.color = "red";
}
if (isNaN(tipRate)) {
	document.getElementById('theTip').innerHTML = 
		"This is not a number!";
	document.getElementById('theTip').style.color = "red";
}
if (isNaN(people)) {
	document.getElementById('peopleNo').innerHTML = 
		"This is not a number!";
	document.getElementById('peopleNo').style.color = "red";
}


// The POP Up 
var results = document.getElementById('answers');
var button = document.getElementById('submit');
var close = document.getElementById('cross');
// The Maths
var theTip = input / 100 * tipRate;
var newTotal =  1 * input + 1 * tipRate;
var split =   newTotal / people;
// displaying the answer pop up
button.onclick = function() {
	answers.style.display = "block";
};
close.onclick = function() {
    results.style.display = "none";
};
// Pushing answers to HTML
document.getElementById('answer1').innerHTML = 'Your bill' + ' £' + input;
document.getElementById('answer2').innerHTML = 'Tip Rate ' + tipRate + '%';
document.getElementById('answer3').innerHTML = people + ' people';
document.getElementById('answer4').innerHTML = 'The Tip ' + '£' + theTip;
document.getElementById('answer5').innerHTML = '£' + split + ' per person';
// stops the page from reloading 
return false;
}