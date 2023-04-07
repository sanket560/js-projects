// Get the input element with ID "usernum"
const input = document.getElementById("usernum").value;

// Generate a random number between 0 and 10 (inclusive)
const randomNumber = Math.floor(Math.random() * 11);

// This function is called when the user clicks the "Submit" button
function submit() {
    // Get the element with ID "guessednum"
    const guessednum = document.getElementById("guessednum");
    // Set the text content of the "guessednum" element to be the randomly generated number
    guessednum.innerHTML = randomNumber;
}

// This function is called when the user clicks the "Yes" button
function yes() {
    // Get the element with ID "congrats"
    const congrats = document.getElementById("congrats");
    // Create a new <h1> element
    const congratulation = document.createElement("h1");
    // Set the text content of the new <h1> element to be "Yeah!! I am Intelligent"
    congratulation.textContent = "Yeah!! I am Intelligent";
    // Add a class name "congo" to the new <h1> element
    congratulation.className = "congo"

    // Append the new <h1> element to the "congrats" element
    congrats.append(congratulation);
}

