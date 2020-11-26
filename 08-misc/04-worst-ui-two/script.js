/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    // paths
    const target = document.getElementById("target");
    /* const valueTargetString = target.innerText;
    const valueTarget = valueTargetString.split('');
    const valueTargetPlus = valueTarget[0]
    const valueTarget1 = valueTarget.join(1,3)
    console.log(valueTargetPlus); */
    const button1 = document.getElementById('part-one');
    const button2 = document.getElementById('part-two');
    const button3 = document.getElementById('part-three');
    const button4 = document.getElementById('part-four');
    // Variables
    let value1 = Number(button1.innerText);
    let value2;
    let value02;
    let value3;
    let value03;
    let value4;
    let value04;

    // Remove text function
    function removeText () {
        target.innerText = '';
    }
    //  To add 0 digit before Nos below 10!! TERNARY operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    function digits0 (number) {
        return (number <10 ? '0':'') + number
    }

    function compileNumber () {
        // removeText();

        // Buttons to actions
        button1.addEventListener('click', function one(){

            value1 += 1;
            button1.innerText = value1;
            target.innerText[1]
        });
        button2.addEventListener('click', function two(){
            value2 = Number(button2.innerText);

            value2 += 1;
            value02 = digits0(value2);
            button2.innerText = value02;
        });
        button3.addEventListener('click', function three(){
            value3 = Number(button3.innerText);

            value3 += 1;
            value03 = digits0(value3);
            button3.innerText = value03;
        });
        button4.addEventListener('click', function four(){
            value4 = Number(button4.innerText);

            value4 = value4 + 1;
            value04 = digits0(value4);
            button4.innerText = value04;
        });
        target.innerText = '+'+ value1 + value02 + value03 + value04;

    }
    compileNumber();
// TODO: getting numbers to change in target

    // target.innerText = '+'+button1.innerText+button2.innerText+button3.innerText+button4.innerText;

    /*
    const button1 = document.getElementById('part-one');
    button1.addEventListener('click', function(){
    });
    document.getElementById("target").innerText = '+'+ value1 + value2 + value3 + value4;

    document.getElementById("target").innerText = toString(['+', value1, value2, value3, value4]);
*/
})();
