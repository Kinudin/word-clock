/**
 * Created by eric.cross on 8/21/2015.
 */

// Setting up the ID variables to select during the change hours function

var one     = document.querySelector('#one'),
    two     = document.querySelector('#two'),
    three   = document.querySelector('#three'),
    four    = document.querySelector('#four'),
    five    = document.querySelector('#five'),
    six     = document.querySelector('#six'),
    seven   = document.querySelector('#seven'),
    eight   = document.querySelector('#eight'),
    nine    = document.querySelector('#nine'),
    ten     = document.querySelector('#ten'),
    eleven  = document.querySelector('#eleven'),
    twelve  = document.querySelector('#twelve');



document.addEventListener('DOMContentLoaded', startClock);
function startClock(){
    var startClockTime = new Date(),
        h = startClockTime.getHours(),
        m = startClockTime.getMinutes(),
        s = startClockTime.getSeconds();
    startClockTime = formatHour(h) + ":" + padZeros(m,2) + ":" + padZeros(s,2);
    setInterval(updateClock, 1000);
    setInterval(changeHours, 1000);
    updateClock();
}

function updateClock(){
    var currentTime = new Date(),
        h = currentTime.getHours(),
        m = currentTime.getMinutes(),
        s = currentTime.getSeconds();
    currentTime = formatHour(h) + ":" + padZeros(m,2) + ":" + padZeros(s,2);
    document.querySelector('#digital-clock').innerHTML = currentTime;
    changeHours(h, m, s);
}

function padZeros(num, size){
    var s = "0000" + num;
    return s.substr(s.length - size);
}

function changeHours(hours, minutes, seconds){
    var h = formatHour(hours);
        m = padZeros(minutes,2);
        s = padZeros(seconds,2);
    console.log('Hours: ' + h + " Minutes: " + m + " Seconds: " + s);

    if(h == 1){
        one.className = "current-time";
        twelve.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (h == 2){
        two.className = "current-time";
        one.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (h == 3){
        three.className = "current-time";
        two.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (h == 4){
        four.className = "current-time";
        three.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (h == 5){
        five.className = "current-time";
        four.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (h == 6){
        six.className = "current-time";
        five.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (h == 7){
        seven.className = "current-time";
        six.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (h == 8){
        eight.className = "current-time";
        seven.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (h == 9){
        nine.className = "current-time";
        eight.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (h == 10){
        ten.className = "current-time";
        nine.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (h == 11){
        eleven.className = "current-time";
        ten.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (h == 12){
        twelve.className = "current-time";
        eleven.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    }

}

function formatHour(hour){
    var hour = hour%12;

    if (hour==0){
        hour = 12;
    }
    return String(padZeros(hour,2));
}


