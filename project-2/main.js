// Get the 'add' button from the HTML document and add a 'click' event listener to it
const addbtn = document.getElementById('add_btn');
addbtn.addEventListener('click', addTask);

// Get the parent list element from the HTML document
let parentlist = document.getElementById('parent');

// Function to add a new task to the list
function addTask(e) {
    // Check if there are any tasks in the list and remove the "no tasks" message if it exists
    if (parentlist.children.length > 0 && parentlist.children[0].className == 'newmsgclass') {
        parentlist.children[0].remove();
    }

    // Get the button and input field that triggered the event
    let currentbtn = e.currentTarget;
    let currentinput = currentbtn.previousElementSibling;
    // Get the text entered in the input field
    let currenTask = currentinput.value;

    // Create a new list item with the task text and two buttons (edit and remove)
    let newli = document.createElement('li');
    newli.className = "list-group-item bg-dark text-light d-flex justify-content-between"
    newli.innerHTML = `
                <span class="flex-grow-1">${currenTask}</span> 
                <button class="mx-3 bg-warning text-white border-0 px-3" onclick="edittask(this)">edit</button>
                <button class="bg-danger text-white border-0 px-3" onclick="removetask(this)">remove</button>
    `
    // Add the new list item to the parent list
    parentlist.append(newli)
}

// Function to remove a task from the list
function removetask(curtask) {
    // Remove the task's parent (the list item) from the list
    curtask.parentElement.remove();

    // If there are no more tasks in the list, display a "no tasks" message
    if (parentlist.children.length <= 0) {
        let newMsg = document.createElement('h3');
        newMsg.classList.add('newmsgclass')
        newMsg.textContent = " No Task Yet Created"
        parentlist.appendChild(newMsg)
    }
}

// Function to edit a task in the list
function edittask(curtask) {
    // If the edit button was clicked, switch to edit mode
    if (curtask.textContent == 'done') {
        curtask.textContent = 'edit';
        // Get the new text from the input field
        let currentnewtext = curtask.previousElementSibling.value;
        // Create a new heading element with the new text
        let currentheading = document.createElement('span');
        currentheading.className = 'flex-grow-1';
        currentheading.textContent = currentnewtext;
        // Replace the input field with the new heading element
        curtask.parentElement.replaceChild(currentheading, curtask.previousElementSibling)
        // If the done button was clicked, switch to display mode
    } else {
        curtask.textContent = 'done';
        // Get the current text from the heading element
        let current_text = curtask.previousElementSibling.textContent;
        // Create a new input field with the current text
        let currentinput = document.createElement('input');
        currentinput.type = "text";
        currentinput.className = "form-control bg-dark border-0 text-white";
        currentinput.placeholder = "enter task";
        currentinput.value = current_text;
        // Replace the heading element with the new input field
        curtask.parentElement.replaceChild(currentinput, curtask.previousElementSibling)
    }

}
