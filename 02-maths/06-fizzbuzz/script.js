/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    // your code here
// .addEventListener('load', pageOpened, function promptBox() {

function fizzBuzz(i) {
    // for (var i = 1; i <= 100; i){
        if (i%3 === 0 && i%5 === 0 && i>= 1 && i<=100) {
            console.log('Fizzbuzz');
        }
        else if (i%3 === 0 && i>= 1 && i<=100){
            console.log('Fizz');
        }
        else if (i%5 === 0 && i>= 1 && i<=100){
            console.log('Buzz');
        }
        else{
            console.log (i);
        }
}
