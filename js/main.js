// Create a Variable called total with a value of 0
var total = 0;


// Use onsubmit that calls the function enter
document.getElementbyId('entry').onsubmit = enter;


// Create a function called enter
// It should have a variable for the form entry that gets the value from newEntry
// It should then change the value of entry to a number
// It should have then assign a value to the currency variable using the currencyFormat function you'll create below.
// It should set the innerHTML of the entries to the currency value
// It should reassign the value of total by adding entry to total
// It should set the innerHTML of the total to the total value using the currencyFormat function
// It should then clear the value of newEntry
// It should return false to close the function
// Google ParseFloat

function enter() {
	var entry = 
	document.getElementbyId('newEntry').value;
	entry = parseFloat(entry);
	currency = currencyFormat(entry);

	document.getElementbyId('entries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
  total += entry;

  	document.getElementbyId('total').innerHTML = currencyFormat(total);

// Create the currencyFormat 
// It should take one parameter that it will store in the a currency variable and return that variable
// Google toFixed(2)
