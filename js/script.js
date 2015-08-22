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
    * When qualifier changes, it is off sync with the others
        *> 8/22
    * Need to create a better way to cycle through the IDs.
* To Add:
    *

*/

// Select all of the time markers
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

// Declare qualifier ID variables
var it      = document.querySelector('#it'),
    is      = document.querySelector('#is'),
    past    = document.querySelector('#past'),
    half    = document.querySelector('#half'),
    to      = document.querySelector('#to'),
    fveQual = document.querySelector('#fiveQual-relation'),
    tenQual = document.querySelector('#ten-relation'),
    twenty  = document.querySelector('#twenty-relation'),
    quarter = document.querySelector('#quarter'),
    minutes = document.querySelector('#minutes');


document.addEventListener('DOMContentLoaded', startClock);
function startClock(){
    setInterval(updateClock, 500);
    updateClock();
}

function updateClock(){
    // Update the digital clock in upper left corner
    // with the correct format. Steal the hour, minute,
    // and seconds from new Date, and place colons onto each of them
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

function formatHour(hour){
    var hour = hour%12;

    if (hour==0){
        hour = 12;
    }
    return String(padZeros(hour,2));
}

function changeHours(hours, minutes, seconds){
    if(hours == 1 || hours == 13){
        one.className = "current-time";
        twelve.className = "third";
        half.className= "quarter";
        fveQual.className = "third";

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('FIve past');
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
        }else if(minutes <= 13 && minutes >= 7){
            console.log('Ten past');
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className   = "third";
        }else if(minutes <= 17 && minutes >= 14){
            console.log('Quarter past');
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            console.log('Twenty past');
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('Half Past');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            two.className   = "quarter current-time";
            one.className   = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            two.className   = "quarter current-time";
            one.className   = "third";
        }else if (minutes < 59 && minutes >53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            two.className   = "quarter current-time";
            one.className   = "third";
        }

    }
    else if (hours == 2 || hours == 14){
        console.log('Hour: 2');

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('FIve past');
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
            eleven.className    = "third current-time";
        }else if(minutes <= 13 && minutes >= 7){
            console.log('Ten past');
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className   = "third";
        }else if(minutes <= 17 && minutes >= 14){
            console.log('Quarter past');
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            console.log('Twenty past');
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('Half Past');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            three.className   = "quarter current-time";
            two.className   = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            three.className   = "quarter current-time";
            two.className   = "third";
        }else if (minutes < 59 && minutes >53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            three.className   = "quarter current-time";
            two.className   = "third";
        }

    }
    else if (hours == 3 || hours == 15){
        //console.log('Hour ' + hours);
        three.className = "current-time";
        two.className       = "third";

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('FIve past');
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
            eleven.className    = "third current-time";
        }else if(minutes <= 13 && minutes >= 7){
            console.log('Ten past');
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className   = "third";
        }else if(minutes <= 17 && minutes >= 14){
            console.log('Quarter past');
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            console.log('Twenty past');
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('Half Past');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            four.className   = "quarter current-time";
            three.className   = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            four.className   = "quarter current-time";
            three.className   = "third";
        }else if (minutes < 59 && minutes >53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            four.className   = "quarter current-time";
            three.className   = "third";
        }
    }
    else if (hours == 4 || hours == 16){
        four.className          = "current-time";
        three.className         = "third";

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('FIve past');
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
            eleven.className    = "third current-time";
        }else if(minutes <= 13 && minutes >= 7){
            console.log('Ten past');
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className   = "third";
        }else if(minutes <= 17 && minutes >= 14){
            console.log('Quarter past');
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            console.log('Twenty past');
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('Half Past');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            five.className   = "quarter current-time";
            four.className   = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            five.className   = "quarter current-time";
            four.className   = "third";
        }else if (minutes < 59 && minutes >53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            five.className   = "quarter current-time";
            four.className   = "third";
        }
    }
    else if (hours == 5 || hours == 17){
        five.className = "current-time";
        four.className       = "third";

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('FIve past');
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
            eleven.className    = "third current-time";
        }else if(minutes <= 13 && minutes >= 7){
            console.log('Ten past');
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className   = "third";
        }else if(minutes <= 17 && minutes >= 14){
            console.log('Quarter past');
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            console.log('Twenty past');
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('Half Past');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            six.className   = "quarter current-time";
            five.className   = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            six.className   = "quarter current-time";
            five.className   = "third";
        }else if (minutes < 59 && minutes >53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            six.className   = "quarter current-time";
            five.className   = "third";
        }
    }
    else if (hours == 6 || hours == 18){
        six.className = "current-time";
        five.className       = "third";

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('FIve past');
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
            eleven.className    = "third current-time";
        }else if(minutes <= 13 && minutes >= 7){
            console.log('Ten past');
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className   = "third";
        }else if(minutes <= 17 && minutes >= 14){
            console.log('Quarter past');
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            console.log('Twenty past');
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('Half Past');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            seven.className   = "quarter current-time";
            six.className   = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            seven.className   = "quarter current-time";
            six.className   = "third";
        }else if (minutes < 59 && minutes >53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            seven.className   = "quarter current-time";
            six.className   = "third";
        }
    }
    else if (hours == 7 || hours == 19){
        seven.className = "current-time";
        six.className       = "third";

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('FIve past');
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
            eleven.className    = "third current-time";
        }else if(minutes <= 13 && minutes >= 7){
            console.log('Ten past');
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className   = "third";
        }else if(minutes <= 17 && minutes >= 14){
            console.log('Quarter past');
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            console.log('Twenty past');
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('Half Past');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            eight.className   = "quarter current-time";
            seven.className   = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            eight.className   = "quarter current-time";
            seven.className   = "third";
        }else if (minutes < 59 && minutes >53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            eight.className   = "quarter current-time";
            seven.className   = "third";
        }
    }
    else if (hours == 8 || hours==20){
        eight.className = "third current-time";
        seven.className       = "third";

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('FIve past');
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
            eleven.className    = "third current-time";
        }else if(minutes <= 13 && minutes >= 7){
            console.log('Ten past');
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className   = "third";
        }else if(minutes <= 17 && minutes >= 14){
            console.log('Quarter past');
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            console.log('Twenty past');
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('Half Past');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            nine.className   = "quarter current-time";
            eight.className   = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            nine.className   = "quarter current-time";
            eight.className   = "third";
        }else if (minutes < 59 && minutes >53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            nine.className   = "quarter current-time";
            eight.className   = "third";
        }
    }
    else if (hours == 9 || hours == 21){
        nine.className = "third current-time";
        eight.className       = "third";


        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('FIve past');
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
            eleven.className    = "third current-time";
        }else if(minutes <= 13 && minutes >= 7){
            console.log('Ten past');
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className   = "third";
        }else if(minutes <= 17 && minutes >= 14){
            console.log('Quarter past');
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            console.log('Twenty past');
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('Half Past');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            ten.className   = "quarter current-time";
            nine.className   = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            ten.className   = "quarter current-time";
            nine.className   = "third";
        }else if (minutes < 59 && minutes >53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            ten.className   = "quarter current-time";
            nine.className   = "third";
        }
    }
    else if (hours == 10 || hours == 22){
        ten.className = "third current-time";
        nine.className       = "third";

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('FIve past');
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
            eleven.className    = "third current-time";
        }else if(minutes <= 13 && minutes >= 7){
            console.log('Ten past');
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className   = "third";
        }else if(minutes <= 17 && minutes >= 14){
            console.log('Quarter past');
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            console.log('Twenty past');
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('Half Past');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            eleven.className   = "quarter current-time";
            ten.className   = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            eleven.className   = "quarter current-time";
            ten.className   = "third";
        }else if (minutes < 59 && minutes >53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            eleven.className   = "quarter current-time";
            ten.className   = "third";
        }
    }
    else if (hours == 11 || hours == 23){
        eleven.className    = "current-time";
        ten.className       = "third";


        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('FIve past');
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
            eleven.className    = "third current-time";
        }else if(minutes <= 13 && minutes >= 7){
            console.log('Ten past');
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className   = "third";
        }else if(minutes <= 17 && minutes >= 14){
            console.log('Quarter past');
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            console.log('Twenty past');
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('Half Past');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            twelve.className   = "quarter current-time";
            eleven.className   = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            twelve.className   = "quarter current-time";
            eleven.className   = "third";
        }else if (minutes < 59 && minutes >53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            twelve.className   = "quarter current-time";
            eleven.className   = "third";
        }
    }
    else if (hours == 12 || hours == 0){
        twelve.className    = "third current-time";
        eleven.className    = "third";

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('FIve past');
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
            eleven.className    = "third current-time";
        }else if(minutes <= 13 && minutes >= 7){
            console.log('Ten past');
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className   = "third";
        }else if(minutes <= 17 && minutes >= 14){
            console.log('Quarter past');
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            console.log('Twenty past');
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('Half Past');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            one.className   = "quarter current-time";
            twelve.className   = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            one.className   = "quarter current-time";
            twelve.className   = "third";
        }else if (minutes < 59 && minutes >53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            one.className   = "quarter current-time";
            twelve.className   = "third";
        }
    }
}