/** Ex 1: write the clearDelay && clearLap functions 
 *  Both receive just one parameter and cancel the associated
 *      timeout or interval
*/
var delayId = delay(/*...*/);

clearDelay(delayId); //cancels the timeout with id 22
clearLap(lapId); // cancels the interval with id 34


/** Ex 2: write a small counter app. The app will have a 
 * button ("Start"/"Stop") and a text which by default is "0";
 * 
 * When clicking "Start"  the text will start to increase by
 * 1 every second. Also the text on the Button will change to
 * "STOP". 
 * 
 * When clicking the button again, the text will stop
 * increasing and the text will change to "Start";
 * 
 * If I click it again, the process repeats itself from the number
 * it is right now.
 * 
 * hint: take it step by step
 *  1) clicking the button will change the text
 *  2) clicking the button starts the "countdown" but doesn't stop it
 *  3) clikcing it again stops the countdown 
  */