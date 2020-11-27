/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // get string
    const target = document.getElementById("target");
    const string = target.textContent;
    // splitting the string into letters
    const characters = string.split("");
    let fontSize = 0;
    let direction = 'up';
        console.log(string);
        console.log(characters);
    let result = '';

    for (let i=0; i < characters.length; i++){
        if (fontSize >= 4) {
            direction = 'down';
        } else if (fontSize <= 0) {
            direction = 'up';
        }
        console.log(fontSize);

        if (direction === 'up') {
            fontSize++;
        } else {
            fontSize--;
        }

        result += '<span>' + characters[i].fontsize(fontSize) + '</span>';

        // result += '<span style = "font-size: fontSize">'+ characters[i]+'</span>';
    }
    target.innerHTML = result;
})();

