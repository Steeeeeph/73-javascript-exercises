/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
    // your code here

const steph = {firstname:'Stephanie', lastname:'Van Bockhaven', age:32, city:'Ghent', country:'Belgium'};
document.getElementById("run").addEventListener("click", function(){
    console.log('Hi! I\'m '+steph.firstname+' '+steph.lastname+'. I\'m '+steph.age+' years old and I live in '+steph.city+', located in '+steph.country+'.')
});