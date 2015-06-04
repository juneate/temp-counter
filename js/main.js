// Define our starting temp
var temp = 0;

// Create a proceedure that will calculate F
// and print both C and F to the interface
var calcandshow = function() {
	$('.degrees').html(temp + ' &deg;C, ');
	$('.degrees').append( (temp*(9/5)+32) + ' &deg;F');
	
	if (temp < 0) {
		$('body').css('background-color', '#69AEFF');
	}
	else {
		$('body').css('background-color', '#FF634E');
	}
};

// Increase temp and show it
var tempup = function() {
	temp = temp + 1;
	calcandshow();
}

// Decrease temp and show it
var tempdown = function() {
	temp = temp - 1;
	calcandshow();
}

// When the temp goes up...
$('.hotter').on('click', tempup);

// When the temp goes down...
$('.colder').on('click', tempdown);

// Call the first calculation
calcandshow();
