function clearDisplay() {
    var display = document.querySelector('.value');
    if (display) {
        display.value = '';
    } else {
        console.error('Display element not found');
    }
}
function appendCharacter(character) {
    var display = document.querySelector('.value');
    if (display) {
        display.value += character;
    } else {
        console.error('Display element not found');
    }
}


function calculateResult() {
    var display = document.querySelector('.value');
    if (display) {
        try {
            display.value = eval(display.value);
        } catch (error) {
            console.error('Error in calculation:', error);
        }
    } else {
        console.error('Display element not found');
    }
}