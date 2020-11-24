/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
// directory in var
let x = document.querySelector('img');
// source path in var
let sourceImg = x.getAttribute('src');
// iterator
let i = 0;

document.getElementById('next').addEventListener('click', function() {
// image path to show after a click
    x.src = gallery[i+1];
// increasing the array index with 1
    i+=1;
// repeating the array for eternal clicking loop
    if (i === gallery.length-1) {
        return i = 0;
    }
});
})();
