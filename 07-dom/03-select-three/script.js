/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // repeating a loop over all .target
const x = document.getElementsByClassName('target');
for (let i = 0; i < x.length; i++) {
    x[i].innerHTML = "owned";
}
})();

/* Stackoverflow:

function myFunction()
{
x=document.getElementsByClassName("demo");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Hello JavaScript!";    // Change the content
    }

}
*/