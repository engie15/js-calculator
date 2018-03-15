//Create required general var 's for calculator
//(e.g. var entries; var total; var temp)

var entries = [] //an empty array to represent a part of the numerical expression yet to be calculated.
var temp = ''  //an empty string.  This will hold a partially entered number.
var result = 0 //this is where the calculation will be stored when equals

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

function processNumber (evt) {
    
}

//Numbers add to temp

//Symbol other than equals, add temp to entries
//Add symbol and clear temp (AC Button)

//Change divide symbol
//Change multiply symbol

//Clear last entry (CE Button)

//Equals symbol to perform calculation

//Push number