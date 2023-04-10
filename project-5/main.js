// Initialize the input value to an empty string
let inputvalues = '';

// Select all elements with an id of "button"
const buttons = document.querySelectorAll('#button');

// Loop through each button element
// This line converts the buttons NodeList into an array, 
// and then loops through each element using the forEach method.
Array.from(buttons).forEach((button)=>{

  // Attach a click event listener to each button
  button.addEventListener('click',(e)=>{

    // Check if the clicked button is the equals sign
    if(e.target.innerHTML == '='){

      // Evaluate the expression stored in inputvalues
      inputvalues = eval(inputvalues);

      // Set the value of the input element to the result
      document.querySelector('input').value = inputvalues;

    }

    // Check if the clicked button is the clear button
    else if(e.target.innerHTML == 'C'){

      // Set the input value to an empty string
      inputvalues = '';

      // Set the value of the input element to an empty string
      document.querySelector('input').value = inputvalues;

    }

    // If neither of the above conditions are met
    else{

      // Concatenate the clicked button's innerHTML with the current input value
      inputvalues = inputvalues + e.target.innerHTML;

      // Set the value of the input element to the concatenated string
      document.querySelector('input').value = inputvalues;

    }
  });
});
