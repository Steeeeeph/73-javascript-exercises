/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    // your code here
const d= new Date();
const currentYear = d.getFullYear();
const currentMonth = d.getMonth()+1;
const currentDay = d.getDate();
// console.log(currentDay, currentMonth, currentYear);

document.getElementById("run").addEventListener("click", function getBirthday() {
   const day = +document.getElementById("dob-day").value;
   const month = +document.getElementById("dob-month").value;
   const year = +document.getElementById("dob-year").value;
//    console.log(day, month, year);
   let age = currentYear-year;
   if (currentMonth > month) {
        alert('You are '+age+' years old.');
   } else if (currentMonth === month && currentDay >= day) {
        alert('You are '+age+' years old.');
   } else {
       age=currentYear-year-1;
        alert('You are '+age+' years old.');
   }
});
