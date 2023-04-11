// Initialize an empty string to store the input values
let string = '';

// Get the input element by ID
const inputvalue = document.getElementById('inputvalue');

// Get all the buttons by class name
const allbutton = document.getElementsByClassName('button');

// Convert the collection of buttons to an array using Array.from()
// This allows us to use Array methods like forEach() to loop through the buttons
Array.from(allbutton).forEach(function(button) {
    button.addEventListener('click', function(e) {
        // If the button is the equals sign, evaluate the expression
        if (e.target.innerHTML == '=') {
            string = eval(string);
            inputvalue.value = string;
        }
        // If the button is the clear button, reset the input string
        else if (e.target.innerHTML == 'C') {
            string = '';
            inputvalue.value = string;
        }
        // If the button is a number or operator, append it to the input string
        else {
            string = string + e.target.innerHTML;
            inputvalue.value = string;
        }
    });
});


/*note: In this code, Array.from(allbutton) is used to convert the allbutton 
collection returned by getElementsByClassName() into an array,
 so that we can use the forEach() method to loop through each 
 button and add event listeners to them. Without converting 
 the collection to an array, we would not be able to use f
 orEach(), because it is not a method of the HTMLCollection 
 interface returned by getElementsByClassName()
*/