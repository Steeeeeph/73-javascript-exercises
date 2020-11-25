/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {
    // your code here

    let table;
    table = "<table>";

    for(let i= 1; i<= 10; i++) {
        table +="<tr>";
            for(let j = 1; j<= 10; j++){
                table +="<td>" + i * j + "</td>";
            }
        table += "</tr>";
    }

    table += "</table>";
    
    document.getElementById("target").innerHTML = table;

})();
// https://www.youtube.com/watch?v=vfTv1eHygIc
