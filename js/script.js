onload = function load() { // primary functions
    curr_op = 0;
    signn = '';
    prev_op = 0;
    document.getElementById("output").value = curr_op;
};

let signn = ''; // global variables
let curr_op = 0; // global variables
let prev_op = 0; // global variables

function display() {
    document.getElementById("output").value = 0;
}

function allClear() { // primary functions
    curr_op = 0;
    signn = '';
    prev_op = 0;
    document.getElementById("output").value = 0;
}

function print(num) {
    if (document.getElementById("output").value === '0') {
        curr_op = parseFloat(num);
        document.getElementById("output").value = curr_op;
    } else if (num == '.') {
        if (document.getElementById("output").value.indexOf(".") == -1)
        curr_op *= 0.1; // works only if we enter needed number and after that we press the dot
        document.getElementById("output").value = curr_op;
    } else if (!(num == '.')){
        display();
        curr_op = parseFloat(curr_op) * 10 + parseFloat(num);
        document.getElementById("output").value = curr_op;
    }
}

function plusMinus() { // primary functions
    curr_op = parseFloat(curr_op) * -1;
    document.getElementById("output").value = curr_op;
}

function action(sign) { // primary functions
    switch (sign) {
        case('+'):
            signn = '+';
            display();
            prev_op = curr_op;
            break;

        case('-'):
            signn = '-';
            display();
            prev_op = curr_op;
            break;

        case('*'):
            signn = '*';
            display();
            prev_op = curr_op;
            break;

        case('/'): 
            signn = '/';
            display();
            prev_op = curr_op;
            break;
    }
    curr_op = 0;
}

function calculate() { // primary functions
    switch (signn) {
        case('+'):
        res = parseFloat(curr_op) + parseFloat(prev_op);
        break;

        case('-'):
        res = parseFloat(curr_op) - parseFloat(prev_op);
        break;

        case('*'):
        res = parseFloat(curr_op) * parseFloat(prev_op);
        break;

        case('/'): 
        res = parseFloat(curr_op) / parseFloat(prev_op);
        break;
    }
    document.getElementById("output").value = res;
    signn = '';
}
