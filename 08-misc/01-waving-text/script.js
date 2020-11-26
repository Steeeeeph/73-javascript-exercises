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

    // your code here
    const string = document.getElementById("target").textContent;
    const characters = string.split("");
    let positionZero = characters.filter(n){
        return n % 5;
    })
    console.log(string);
    console.log(characters);
    let result = '';
    for (let i=0; i < characters.length; i++){
        if (i % 5 == 0) {
            
            result += '<span style="font-size:10px;">'+ characters[i]+'</span>';
        } 
        // result += '<span>'+ characters[i]+'</span>';
    }
    
    document.getElementById("target").innerHTML = result;
})();

