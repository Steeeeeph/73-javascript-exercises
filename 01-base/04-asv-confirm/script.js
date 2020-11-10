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
let age = prompt('Hey! What\'s your age?');
console.log(age);
/*
if (strValue) {
    //do something
}
*/

if(age===(false||'')) {
    console.log('age = empty');

    age=prompt('Hey! What\'s your age?');
} else {
    console.log('age = not empty');
}
let result = confirm('Are you '+age+' years old?');
if(result===(false||null)) {
    age=prompt('Hey! What\'s your age?');
}


// let gender = prompt('And your gender?');
// confirm('Are you '+gender+'?');

// let location = prompt('Where are you living?');
// confirm('Are you living in'+location+'?');

// if (age || gender || location === false){
//     alert('Please fill in the form!');
// }
// else {
//     prompt('Thanks for your information!');
// }

// if (confirm("true"){txt= "Thanks for sharing!"})
// else {txt= "Please complete the form."}
// }
/*
var txt;
var r = confirm("Press a button!");
if (r == true) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
} 
*/