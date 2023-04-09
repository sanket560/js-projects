const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
let number = document.getElementById("number");

let count = 0;

function increase(){
    count++;
    number.innerHTML = count;
}
function decrease(){
    count--;
    number.innerHTML = count;
}
function reset(){
    if(count > 0 || count < 0){
        count=0;
        number.innerHTML = count;
    }
}