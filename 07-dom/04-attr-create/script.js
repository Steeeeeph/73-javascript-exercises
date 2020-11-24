/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here 
    // (https://www.youtube.com/watch?v=a5T1MiQmgKQ)
    // getting link from data-image attribute
    let imageSrc = document.getElementById('source').getAttribute('data-image');
    // creating <img>
    let newImg = document.createElement('img');
    // setting the src attribute of <img>
    newImg.setAttribute('src', imageSrc);
    // adding the tag with source under the right id
    document.getElementById("target").appendChild(newImg);
    // selecting the to be removed element
    let tagSpan = document.getElementById("source");
    // removing the span element by addressing the variable of to be deleted element  
    tagSpan.parentNode.removeChild(tagSpan);
})();
