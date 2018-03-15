//Create required general var 's for calculator
//(e.g. var entries; var total; var temp)

var entries = [] //an empty array to represent a part of the numerical expression yet to be calculated.
var temp = ''  //an empty string.  This will hold a partially entered number.
var percent = false
var zero = false

document.addEventListener('DOMContentLoaded', start)

function start () {
    buttonEventListeners('number', processNumber)
    buttonEventListeners('control', processCtrl)
    buttonEventListeners('operator', processOperator)
}

function buttonEventListeners(buttonClass, processFunction) {
    var buttons = document.getElementsByClassName(buttonClass)
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click',processFunction)
    }
}

//Numbers add to temp

//Symbol other than equals, add temp to entries
//Add symbol and clear temp (AC Button)

//Change divide symbol
//Change multiply symbol

//Clear last entry (CE Button)

//Equals symbol to perform calculation

//Push number