let clock = {
seconds: 0,
minutes: 0,
hours: 0,
time: 0,
}

var display = document.getElementById('seconds-counter');
display.innerText = clock.time;
var cancel = setInterval(incrementSeconds, 1000);
clock.time = 0 + ":" + 0 + ":" + 0;

function resetTime(){
    clock.seconds = 0;
    clock.minutes = 0;
    clock.hours = 0;
    clock.time = 0; 
}

function incrementSeconds(){
    if (clock.seconds == 59){
        clock.seconds = 0;
        clock.minutes += 1;
    } else if (clock.minutes == 59){
        clock.minutes = 0;
        clock.hours += 1;
    } else {
        clock.seconds += 1;
    }
    clock.time = clock.hours.toString() + ":" + clock.minutes.toString() + ":" + clock.seconds.toString();
    display.innerText = clock.time;
}