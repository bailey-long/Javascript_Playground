To create a stopwatch I will need some variables to start with.
1. timeSeconds
2. timeMinutes
3. timeHours

all of these will be added into a string and printed onto the screen.

The logic behind incrementing the variables will look similar to the example below:
~~~
if (timeSeconds > 59){
    timeSeconds = 0;
    timeMinutes += 1;
} else if (timeMinutes > 59){
    timeMinutes = 0;
    timeHours += 1;
} else {
    timeSeconds += 1;
}
~~~
obviously in order to incrememt the minutes and hours, I have to increment seconds.
This can be done by running a function to increment the seconds variable with setInterval 
~~~
function incrementSeconds(){
    // run logic gates from above.

}
var cancel = setInterval(incrementSeconds, 1000);
~~~