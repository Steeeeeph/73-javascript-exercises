/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //resusable directory of img
let x = document.querySelector('img');

    // not needed variable
// let beforeHover = x.getAttribute('src');

    // variable containing the source of data-hover attribute to reuse later
let onHover = x.getAttribute('data-hover');

// console.log(beforeHover);
// console.log(onHover);

x.addEventListener('mouseover', function (){
    x.src = onHover;
});
})();
