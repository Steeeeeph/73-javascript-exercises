/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here
// Working code, button not involved though
// fruits.forEach(element => console.log(element)); 

document.getElementById("run").addEventListener("click", function() {

fruits.forEach(element => console.log(element)); 
});

/*
var txt = "";
array.forEach(elementFruits);

document.getElementById("run").addEventListener("click", function elementFruits (value, index, array) {
    console.log(txt=txt+value+"<br>");
    
});
*/
