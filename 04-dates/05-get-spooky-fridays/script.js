/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }
    const d = new Date();

    document.getElementById("run").addEventListener('click', function (){
        const yearInput = Number(document.getElementById("year").value);

        // let day = d.getDay()
        // let dayNumber = d.getDate();
        let listOfUnfortunateMonths = [];

        for (let i = 0; i <= 11; i++) {
            d.setMonth();
            console.log(d.setMonth(i));

            // if(day == 5 && dayNumber == 13) {
            //     console.log('Yep');
            // }


        }

    });

    
})();
