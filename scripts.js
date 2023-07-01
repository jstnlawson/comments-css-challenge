let num = 0;
 
//get the default number
document.getElementsByClassName("number-display").innerText = num;
 
function addOne() {
 num = num + 1;
    document.getElementByClassName("number-display").innerText = num;
}

function minusOne() {
 num = num - 1;
    document.getElementByClassName("number-display").innerText = num;
}