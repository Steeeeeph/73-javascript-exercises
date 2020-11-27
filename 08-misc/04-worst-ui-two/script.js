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
    const valueTargetString = target.innerText;
        console.log(valueTargetString);

    const valueTarget1 = valueTargetString.slice(1,4);
        console.log(valueTarget1);
    const valueTarget2 = valueTargetString.slice(4,6);
        console.log(valueTarget2);
    const valueTarget3 = valueTargetString.slice(6,8);
        console.log(valueTarget3);
    const valueTarget4 = valueTargetString.slice(8,10);
        console.log(valueTarget4);

    const button1 = document.getElementById('part-one');
    const button2 = document.getElementById('part-two');
    const button3 = document.getElementById('part-three');
    const button4 = document.getElementById('part-four');
    // Variables


    // Remove text function
    function removeText () {
        target.innerText = '';
    }
    //  To add 0 digit before Nos below 10!! TERNARY operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    function digits0 (number) {
        return (number <10 ? '0':'') + number
    }

    function compileNumber () {
        let value1 = Number(button1.innerText);
        let value2;
        let value02;
        let value3;
        let value03;
        let value4;
        let value04;
        // removeText();

        // Buttons to actions
        button1.addEventListener('click', function one(){

            value1 += 1;
            button1.innerText = value1;
            valueTarget1 =value1;
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
        valueTargetString = '+'+ value1 + value02 + value03 + value04;

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
 /*
 (function () {
  Array.from(document.querySelectorAll('.actions > button')).forEach((btn) => {
    btn.addEventListener('click', () => {
      let minValue = Number(btn.dataset.min);
      let maxValue = Number(btn.dataset.max);
      let value = Number(btn.textContent);
      if (value < maxValue) {
        value++;
      } else {
        value = minValue;
      }
      btn.textContent = value > 9 ? value : `0${value}`;
      updatePhoneNr();
    });
  });

  const updatePhoneNr = () => {
    let phoneNrText = '0';
    Array.from(document.querySelectorAll('.actions > button')).forEach(
      (btn) => {
        phoneNrText += btn.textContent;
      }
    );
    document.getElementById('target').textContent = phoneNrText;
  };
})();
*/