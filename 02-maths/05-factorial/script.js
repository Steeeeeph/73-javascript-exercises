/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function () {
        // your code here
        let num = +document.getElementById("number").value;
        function x(num) { // creating a function (x) with the var (num).
          if(num <= 1){
              return num;
          }
          else {
              return num * x(num - 1);
          }
      }
      x(document.getElementById("number").value); 

      alert(x(num)); // Be sure to call out the function WITH the var instead of only the var (num).

  });
/*        let result = num
        if (num === (0||1)) {
            return 1;
        }
        
        while (num > 1) {
           num--;
           return result = result*num;  
        }
      });
      facterialize(document.getElementById("number").value);
      alert(facterialize);


function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
factorialize(5);


        if (num === 0 || num === 1)
          return 1;
        for (var i = num - 1; i >= 1; i--) {
          num *= i;
        }
       }
        console.log(num);

        return num;
    });
      */



    /*
    function factorialize(num) {
        if (num === 0 || num === 1)
          return 1;
        for (var i = num - 1; i >= 1; i--) {
          num *= i;
        }
        return num;
      }
      factorialize(5);
      */