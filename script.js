// Get references to the display and buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            // Clear the display
            display.value = '';
        } else if (value === '=') {
            // Evaluate the expression and display the result
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === '⌫') {
            // Handle backspace
            display.value = display.value.slice(0, -1);
        } else {
            // Append the button value to the display
            display.value += value;
        }
    });
});

// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Allow numbers, operators, and decimal point
    if (/[0-9+\-*/.=]/.test(key)) {
        if (key === '=' || key === 'Enter') {
            // Evaluate the expression when "=" or "Enter" is pressed
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            // Append the key value to the display
            display.value += key;
        }
    } else if (key === 'Backspace') {
        // Handle backspace key
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        // Clear the display when "Escape" is pressed
        display.value = '';
    }
});