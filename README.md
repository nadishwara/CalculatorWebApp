Calculator App

Overview

The Simple Calculator App is a web-based calculator that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The interface is user-friendly and built using HTML, CSS, and JavaScript.

Features

Perform basic arithmetic operations (+, -, *, /)

Supports decimal numbers

Includes a clear (C) button to reset the display

Responsive and interactive UI

Error handling for invalid inputs

Technologies Used

HTML: Structure of the calculator

CSS (Tailwind CSS CDN): Styling the calculator

JavaScript: Logic for button operations

Project Structure

calculator-app/
│── index.html      # Main HTML structure
│── style.css       # Styling for the calculator
│── script.js       # JavaScript for functionality

Setup Instructions

Clone the repository or create an index.html, style.css, and script.js file.

Ensure that the files are linked properly in index.html.

Open index.html in a web browser to run the calculator.

Usage

Enter numbers by clicking the respective buttons.

Use the arithmetic operators (+, -, *, /) to perform calculations.

Press = to display the result.

Press C to clear the display.

Code Explanation

HTML (index.html)

Defines the calculator layout with an input field for display and buttons for numbers and operations.

<input type="text" id="display" readonly />
<button>1</button>
<button>+</button>

JavaScript (script.js)

Handles button clicks and evaluates expressions.

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();
        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});

Future Enhancements

Add a Backspace button

Implement keyboard support

Improve UI with animations

Conclusion

This Simple Calculator App is a beginner-friendly project that demonstrates how HTML, CSS, and JavaScript work together to create an interactive web application.