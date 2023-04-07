const button = document.getElementById("switchBtn")
//access button with id
const img = document.getElementById("bulbimg")
// access img with id
switchBtn.addEventListener('click', toggle)
// created event listner which is click and taking function toggle

function toggle() {
    if (switchBtn.textContent.includes('Switch on')) {
        // here if will check switchBtn contains switch on text
        img.src = "img/on.jpg"
        switchBtn.textContent = "Switch off"
    } else {
        img.src = "img/off.jpg"
        switchBtn.textContent = "Switch on"
    }
}