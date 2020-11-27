
/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    const days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }
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
    let d = new Date();     // standard var for linking all time related variables to
    let day = d.getDay()
    let dayNumber = d.getDate();
    let month = d.getMonth();
    let year = d. getFullYear();
    let hour = d.getHours();
    let minutes = d.getMinutes();

    document.getElementById("target").innerHTML = days[day] + ' ' + dayNumber + ' ' + months[month] + ' ' + year + ', ' + hour + 'h' + minutes;


})();
