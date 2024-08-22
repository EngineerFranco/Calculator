// Specific functionality for the calculator
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            display.value = eval(display.value);
        } else {
            display.value += button.textContent;
        }
    });
});
