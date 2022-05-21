const screen = document.getElementById("screen");
let lastButtonClicked;

const anyButtonClicked = (event) => {
    if(lastButtonClicked){
        lastButtonClicked.classList.remove('last-clicked');
    }
    lastButtonClicked = event.target;
    lastButtonClicked.classList.add('last-clicked');
};

const clearZero = () => {
    if (screen.innerHTML === "0" || screen.innerHTML === "ERROR") {
        screen.innerHTML = "";
    }
};

const buttonClicked = (event) => {
    clearZero();
    const numberClicked = event.target.innerHTML;
    screen.innerHTML += numberClicked;
    anyButtonClicked(event);
};

const equalClicked = (event) => {
    try {
        // get the input from the screen
        let input = screen.innerHTML;
        input = input.replace("x", "*");
        input = input.replace("−", "-");
        input = input.replace("÷", "/");
        // execute the input to get the output
        const output = eval(input);
        // put the output on the screen
        screen.innerHTML = output;
    } catch (error) {
        screen.innerHTML = "ERROR";
    }
    anyButtonClicked(event);
};

const clearClicked = (event) => {
    screen.innerHTML = "0";
    anyButtonClicked(event);
};

document.addEventListener('keydown', (event)=> {
    let keyString = event.code;
    // trim keycode down to last character
    keyString = keyString.substring(keyString.length-1);
    // If a number key was pressed, use it
    if(!isNaN(Number(keyString))){
        clearZero();
        screen.innerHTML += keyString;
    }
});