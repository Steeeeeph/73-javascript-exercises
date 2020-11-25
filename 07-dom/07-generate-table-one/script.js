/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
// path directory
let x = document.getElementById('target');
// creating <table> with 10 <tr>
let table = document.createElement('table');
// insert table in target
x.appendChild(table);
// insert rows in table
let pathTable = document.querySelector('table');

for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');
    let makeRow = pathTable.appendChild(row);
}

})();
/* REPEATING AN HTML TAG

for(var i=0; i < myWordLen; i++)
{
    var tr1 = document.createElement("hr");
    var someEle = document.getElementById("someID");
    someEle.appendChild(tr1);
}
*/