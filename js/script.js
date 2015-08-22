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
* To Add:
    *

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

// Declare qualifier ID variables
var it      = document.querySelector('#it'),
    is      = document.querySelector('#is'),
    past    = document.querySelector('#past'),
    half    = document.querySelector('#half'),
    to      = document.querySelector('#to'),
    fveQual = document.querySelector('#fiveQual'),
    tenQual = document.querySelector('#ten-relation'),
    twenty  = document.querySelector('#twenty'),
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

function changeHours(hours, minutes, seconds){
    if(hours == 1 || hours == 13){
        one.className = "current-time";
        twelve.className = "third";
        half.className= "quarter";
        fveQual.className = "third";

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            fveQual.className   = "third current-time";
            past.className      = "third current-time";

        }else if(minutes <= 13 && minutes >= 7){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className = "third";
        }else if(minutes <= 17 && minutes >= 14){
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('half');
            half.className      = "quarter current-time";
            past.className      = "third current-time";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            past.className      = "third";
            half.className      = "quarter";
            one.className       = "third";
            two.className       = "quarter current-time";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            one.className       = "third";
            two.className       = "quarter current-time";
        }else if (minutes <= 59 && minutes >=54){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            one.className    = "third";
            two.className       = "quarter current-time";
        }

    }
    else if (hours == 2 || hours == 14){
        console.log('Hour: 2');

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            fveQual.className   = "third current-time";
            past.className      = "third current-time";

        }else if(minutes <= 13 && minutes >= 7){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className = "third";
        }else if(minutes <= 17 && minutes >= 14){
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('half');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            twelve.className    = "third";
            two.className       = "quarter current-time";
        }else if (minutes <= 59 && minutes >=53){
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            twelve.className    = "third";
            two.className       = "quarter current-time";
        }

    }
    else if (hours == 3 || hours == 15){
        //console.log('Hour ' + hours);
        three.className = "current-time";
        two.className       = "third";


        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            fveQual.className   = "third current-time";
            past.className      = "third current-time";

        }else if(minutes <= 13 && minutes >= 7){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className = "third";
        }else if(minutes <= 17 && minutes >= 14){
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('half');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            twelve.className    = "third";
            four.className       = "quarter current-time";
            three.className     = "third";
        }else if(minutes <= 52 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            twelve.className    = "third";
            four.className      = "quarter current-time";
            three.className     = "third"
        }else if (minutes <= 59 && minutes >=53){
            console.log('Five to');
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            twelve.className    = "third";
            four.className      = "quarter current-time";
            three.className     = "third";
        }
    }
    else if (hours == 4 || hours == 16){
        four.className          = "current-time";
        three.className         = "third";
        to.className            = "third";
        five.className          = "third";

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            fveQual.className   = "third current-time";
            past.className      = "third current-time";
            four.className      = "quarter current-time";

        }else if(minutes <= 13 && minutes >= 7){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className = "third";
        }else if(minutes <= 17 && minutes >= 14){
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('half');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            twelve.className    = "third";
            four.className       = "quarter current-time";
            four.className     = "third";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            twelve.className    = "third";
            four.className      = "quarter current-time";
            four.className     = "third"
        }else if (minutes < 59 && minutes >53){
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            twelve.className    = "third";
            four.className      = "quarter current-time";
            four.className     = "third";
        }
    }
    else if (hours == 5 || hours == 17){
        five.className = "current-time";
        four.className       = "third";


        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            fveQual.className   = "third current-time";
            past.className      = "third current-time";

        }else if(minutes <= 13 && minutes >= 7){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className = "third";
        }else if(minutes <= 17 && minutes >= 14){
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('half');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            twelve.className    = "third";
            six.className       = "quarter current-time";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            twelve.className    = "third";
            six.className       = "quarter current-time";
        }else if (minutes < 59 && minutes >53){
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            twelve.className    = "third";
            six.className       = "quarter current-time";
        }
    }
    else if (hours == 6 || hours == 18){
        six.className = "current-time";
        five.className       = "third";


        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            fveQual.className   = "third current-time";
            past.className      = "third current-time";

        }else if(minutes <= 13 && minutes >= 7){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className = "third";
        }else if(minutes <= 17 && minutes >= 14){
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('half');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if (minutes < 59 && minutes >53){
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }
    }
    else if (hours == 7 || hours == 19){
        seven.className = "current-time";
        six.className       = "third";


        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            fveQual.className   = "third current-time";
            past.className      = "third current-time";

        }else if(minutes <= 13 && minutes >= 7){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className = "third";
        }else if(minutes <= 17 && minutes >= 14){
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('half');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if (minutes < 59 && minutes >53){
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }
    }
    else if (hours == 8 || hours==20){
        eight.className = "third current-time";
        seven.className       = "third";


        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            fveQual.className   = "third current-time";
            past.className      = "third current-time";

        }else if(minutes <= 13 && minutes >= 7){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className = "third";
        }else if(minutes <= 17 && minutes >= 14){
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('half');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if (minutes < 59 && minutes >53){
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }
    }
    else if (hours == 9 || hours == 21){
        nine.className = "third current-time";
        eight.className       = "third";


        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            fveQual.className   = "third current-time";
            past.className      = "third current-time";

        }else if(minutes <= 13 && minutes >= 7){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className = "third";
        }else if(minutes <= 17 && minutes >= 14){
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('half');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if (minutes < 59 && minutes >53){
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }
    }
    else if (hours == 10 || hours == 22){
        ten.className = "third current-time";
        nine.className       = "third";


        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            fveQual.className   = "third current-time";
            past.className      = "third current-time";

        }else if(minutes <= 13 && minutes >= 7){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className = "third";
        }else if(minutes <= 17 && minutes >= 14){
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('half');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if (minutes < 59 && minutes >53){
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }
    }
    else if (hours == 11 || hours == 23){
        eleven.className    = "current-time";
        ten.className       = "third";


        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            fveQual.className   = "third current-time";
            past.className      = "third current-time";

        }else if(minutes <= 13 && minutes >= 7){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className = "third";
        }else if(minutes <= 17 && minutes >= 14){
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('half');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if (minutes < 59 && minutes >53){
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }
    }
    else if (hours == 12 || hours == 0){
        twelve.className    = "current-time";
        eleven.className    = "third";

        // Block determining the minutes, and switches
        // on or off the current-time from current time qualifier
        if(minutes<=6 && minutes >=3 ){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            fveQual.className   = "third current-time";
            past.className      = "third current-time";

        }else if(minutes <= 13 && minutes >= 7){
            console.log('Hours: ' + hours + 'Minutes: ' + minutes);
            tenQual.className   = "quarter current-time";
            past.className      = "third current-time";
            fveQual.className = "third";
        }else if(minutes <= 17 && minutes >= 14){
            quarter.className   = "third current-time";
            past.className      = "third current-time";
            tenQual.className   = "quarter";
        }else if(minutes <= 22 && minutes >= 18){
            twenty.className    = "third current-time";
            past.className      = "third current-time";
            quarter.className   = "third";
        }else if(minutes <= 37 && minutes >= 23){
            console.log('half');
            half.className      = "quarter current-time";
            past.className      = "third";
            twenty.className    = "third";
        }else if(minutes <= 48 && minutes >= 38){
            console.log('Quarter to');
            quarter.className   = "third current-time";
            to.className        = "third current-time";
            half.className      = "quarter";
            twelve.className    = "third";
            four.className       = "quarter current-time";
        }else if(minutes <= 53 && minutes >= 49){
            console.log('Ten To');
            tenQual.className   = "third current-time";
            to.className        = "third current-time";
            quarter.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }else if (minutes < 59 && minutes >53){
            fveQual.className   = "third current-time";
            to.className        = "third current-time";
            tenQual.className   = "third";
            twelve.className    = "third";
            one.className       = "quarter current-time";
        }
    }
}

function formatHour(hour){
    var hour = hour%12;

    if (hour==0){
        hour = 12;
    }
    return String(padZeros(hour,2));
}