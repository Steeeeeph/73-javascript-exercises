/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// function() {

document.getElementById("run").addEventListener("click", function(squareNumber) {
        // your code here
    
    let text = '';
    let i= 1;
    let maxSquareNo = 21; 

    while (i*i <= maxSquareNo) {
        text += i*i+', '; i++;
    }

    alert('The square numbers between 1 and 21 are: '+text)
})

// for(let i=0; i<22; i++){ alert(squareNumber[i]*squareNumber[i]) };
// };
