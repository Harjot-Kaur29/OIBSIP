//function for displaying value
function display(value){
    var display = document.getElementById("result");
    display.value+=value;
}
//function for clearing value from the display
function clr(){
    var display= document.getElementById("result");
    display.value="";
}
//function for calculation
function calculate(){
    var display = document.getElementById("result");
    var expression=display.value;
    var result;

    if (expression.includes('+')){
        var operands = expression.split('+');
        result = parseFloat(operands[0]) + parseFloat(operands[1]);
    }
    else if (expression.includes('-')){
        var operands = expression.split('-');
        result = parseFloat(operands[0]) - parseFloat(operands[1]);
    }
    else if (expression.includes('*')){
        var operands = expression.split('*');
        result = parseFloat(operands[0]) * parseFloat(operands[1]);
    }
    else if (expression.includes('/')){
        var operands = expression.split('/');
        result = parseFloat(operands[0]) / parseFloat(operands[1]);
    }
    display.value=result;
}