/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    // your code here

document.getElementById("red").addEventListener("click", function redBackground () {
    document.body.style.backgroundColor = "red";
});

document.getElementById("green").addEventListener("click", function greenBackground () {
    document.body.style.backgroundColor = "green";
});

document.getElementById("yellow").addEventListener("click", function yellowBackground () {
    document.body.style.backgroundColor = "yellow";
});

document.getElementById("blue").addEventListener("click", function blueBackground () {
    document.body.style.backgroundColor = "blue";
});