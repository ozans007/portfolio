const p1Button = document.querySelector('#button');
const p1Display = document.querySelector('#display');
const resetButton = document.querySelector('#reset');
 
let point = 0;

function reset(){
    point = 0;
    p1Display.textContent = 0;

}

p1Button.addEventListener('click', function () {

        point +=1;
    
    p1Display.textContent = point    
    });

resetButton.addEventListener('click', reset);