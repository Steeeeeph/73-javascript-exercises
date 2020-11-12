/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


 // your code here
//  const randomColor = Math.floor(Math.random()*1000000);
//  console.log(randomColor);

 function randomNum(){
     return Math.floor(Math.random()*16777215).toString(16); //https://css-tricks.com/snippets/javascript/random-hex-color/
 }
 let randomColor ='#'+ randomNum();
//  console.log(randomColor)
document.getElementById("run").addEventListener('click', function() {
 document.body.style.backgroundColor = randomColor;
});

/*
 function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//usage example: getRandomNumberBetween(20,400); 
*/