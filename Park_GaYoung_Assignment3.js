/**
 * Resets the state of the calculator and the display
 */
var result = 0; //hold the current value 
var buffer = 0; //to hold the previous value 
var currentOp = ''; //represent the operation being used
resetCalc();

function resetCalc() {
   // reset all values of the calculator
   setDisplay('0');
   result = 0;
   buffer = 0;
   currentOp = ''
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
   document.getElementById("output").innerText = str;
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   result = "" + result + num;
   result = parseInt(result);

   if (result > 999999999){
      result = 999999999;
   }
   else if (result < -999999999){
      result = -999999999;
   }
   setDisplay(result);
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */

function pressOp(op) {
   if (currentOp == ''){
   currentOp = op;
   buffer = result;
   result = 0;
   setDisplay('0');}
   if(document.getElementById("output").innerText == "0"){
   currentOp = op;
   }
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   console.log(result);
   console.log(buffer);
   console.log(currentOp);
   if (currentOp === '+'){
      result = result + buffer;
   }
   if (currentOp === '-'){
      result = buffer - result;
   }
   if (currentOp === '/'){
      if (result == 0){
         setDisplay("ERROR")
      }
      else {
         result = Math.floor(buffer/result);
      }
   }
   if (currentOp === '*'){
      result = buffer * result;
   }
   if (result > 999999999){
      result = 999999999;
   }
   else if (result < -999999999){
      result = -999999999;
   }
   if (document.getElementById("output").innerText != "ERROR"){
   setDisplay(result);
   }
}