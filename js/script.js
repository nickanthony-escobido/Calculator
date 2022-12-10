let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                display.classList.remove("error-field");
                break;

            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'SYNTAX ERROR';
                    display.classList.add("error-field");
                }
                display.innerText = eval(display.innerText);
                break;
            default:    
                display.innerText += e.target.innerText;
        }
    });
});