let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
var audio = new Audio();
audio.src = "sounds/sounds.wav";

var error = new Audio();
error.src = "sounds/error.wav";

var success = new Audio();
success.src = "sounds/success.wav";

var clear = new Audio();
clear.src = "sounds/clear.wav";

var bclear = new Audio();
bclear.src = "sounds/bclear.wav";

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                display.classList.remove("error-field");
                clear.play();
                break;

            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                    bclear.play();
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                    success.play();
                } catch {
                    display.innerText = 'SYNTAX ERROR';
                    display.classList.add("error-field");
                    error.play();
                }
                display.innerText = eval(display.innerText);
                break;
            default:    
                display.innerText += e.target.innerText;
        }
    });
});