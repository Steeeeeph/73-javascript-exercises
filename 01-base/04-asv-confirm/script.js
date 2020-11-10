/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// function myfunction(){
var age = prompt("Hey! What's your age?");
var gender = prompt("And your gender?");
var location = prompt("Where are you living?");

if (age && gender && location != null){
    alert("Are you "+age+" years old, "+gender+" and you live in"+location+"?");
}
else {
    alert("Please fill in all forms!");
}

// if (confirm("true"){txt= "Thanks for sharing!"})
// else {txt= "Please complete the form."}
// }

