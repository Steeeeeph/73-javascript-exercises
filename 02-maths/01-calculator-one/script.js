/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// function calc() {
    // to get the value of an input: document.getElementById("element-id").value
let opOne = +document.getElementById("op-one").value;
let opTwo = +document.getElementById("op-two").value;
console.log(opOne, opTwo);

    document.getElementById("addition").addEventListener("click", function () {
        // perform an addition
        alert(opOne + opTwo);
    });

    document.getElementById("substraction").addEventListener("click", function () {
        // perform an substraction
        alert(opOne - opTwo);
    });

    document.getElementById("multiplication").addEventListener("click", function () {
        // perform an multiplication
        alert(opOne * opTwo);
    });

    document.getElementById("division").addEventListener("click", function () {
        // perform an division
        alert(opOne / opTwo);
    });
// };
