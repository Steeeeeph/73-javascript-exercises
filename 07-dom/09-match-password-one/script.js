/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const password1 = document.getElementById('pass-one').value;
    const password2 = document.getElementById('pass-two').value;
   
    document.getElementById("run").addEventListener('click', function() {
        if (password1 != password2) {
        //    document.querySelectorAll("#pass-one, #pass-two").style.borderColor = "red"; DOESNT WORK IDK WHY
           document.getElementById("pass-one").style.borderColor = "red";
           document.getElementById("pass-two").style.borderColor = "red";
        }
    });
    
// console.log(password1 + password2);
})();
