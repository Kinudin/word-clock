// Utilize local storage to store background colors, text color, or font choice

// Setting up the ID variables to select during the change hours function

/*
* Issues:
    * Digital Clock on sidebar wasn't updating correctly
        *> Solved
        *> currentTime was only being declared once, moved
        *> var currentTime = new Date(); into updateClock()
        *> so it would update every startClock()
    * Word clock wouldn't update when currentHour > 12
        *> Added || hours == currentHour+12
    * Need to create a better way to cycle through the IDs.

*/

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
    setInterval(updateClock, 1000);
    updateClock();
}

function updateClock(){
    // Update the digital clock in upper left corner
    // with the correct format. Steal 
    var currentTime = new Date(),
        h = currentTime.getHours(),
        m = currentTime.getMinutes(),
        s = currentTime.getSeconds();
    currentTime = formatHour(h) + ":" + padZeros(m,2) + ":" + padZeros(s,2);
    document.querySelector('#digital-clock').innerHTML = currentTime;
    changeHours(h, m, s, currentTime);
}

function padZeros(num, size){
    var s = "0000" + num;
    return s.substr(s.length - size);
}

function changeHours(hours, minutes, seconds, timeString){
    console.log('Hours: ' + hours + " Minutes: " + minutes + " Seconds: " + seconds + " timeString: " + timeString);

    if(hours == 1 || hours == 13){
        one.className = "current-time";
        twelve.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (hours == 2 || hours == 14){
        two.className = "current-time";
        one.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (hours == 3 || hours == 15){
        three.className = "current-time";
        two.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (hours == 4 || hours == 16){
        four.className = "current-time";
        three.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (hours == 5 || hours == 17){
        five.className = "current-time";
        four.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (hours == 6 || hours == 18){
        six.className = "current-time";
        five.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (hours == 7 || hours == 19){
        seven.className = "current-time";
        six.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (hours == 8 || hours==20){
        eight.className = "third current-time";
        seven.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (hours == 9 || hours == 21){
        nine.className = "third current-time";
        eight.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (hours == 10 || hours == 22){
        ten.className = "third current-time";
        nine.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (hours == 11 || hours == 23){
        eleven.className = "current-time";
        ten.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    } else if (hours == 12 || hours == 0){
        twelve.className = "current-time";
        eleven.className.replace( /(?:^|\s)current-time(?!\S)/g , '' );
    }

    console.log(hours + typeof(hours));

}

function formatHour(hour){
    var hour = hour%12;

    if (hour==0){
        hour = 12;
    }
    return String(padZeros(hour,2));
}


