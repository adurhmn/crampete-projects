////////////////////////////////////
/// GLOBAL PROPERTIES SECTION
////////////////////////////////////
//flags
let calcString = '';
let parenthesisOpening = 0;
//buttons
const operatorBtns = document.querySelectorAll('.buttons-op');
const valueBtns = document.querySelectorAll('.buttons-value');
const ansBtn = document.querySelector('.buttons-ans');
const bracketEndbtn = document.querySelector('.buttons-brac-e');

//properties
const screen = document.querySelector('.screen-context');
const refreshScreen = () => screen.innerText = calcString;
const disableOperators = function () {
    for (let btn of operatorBtns) {
        btn.disabled = true;
    }
}
const enableOperators = function () {
    for (let btn of operatorBtns) {
        btn.disabled = false;
    }
}
const validateParenthesisAccess = function () {
    //we shouldn't leave parenthesis unclosed,
    //this code makes sure it doesn't happen.
    if (parenthesisOpening === 0) {
        bracketEndbtn.disabled = true; //if all parenthesis are closed, then close parenthesis is diabled
        ansBtn.disabled = false;} //if all parenthesis are closed, the '=' btn is enabled back 
    else {
        bracketEndbtn.disabled = false; //if parenthesis are unclosed, then close parenthesis is enabled
        ansBtn.disabled = true;} //if parenthesis are unclosed, the '=' btn is disabled
}
const finalValidation = function () {
    //makes sure there is no operand or at the end of expression
    const l = calcString.slice(-1)
    if (l === '+' || l === '-' || l === '*' || l === '/') calcString = calcString.slice(0, -1);
    //removes empty parenthesis (still not an efficient solution)
    while (true) {
        if (calcString.includes('()')) calcString = calcString.replaceAll('()', '');
        else break;
    }
}

////////////////////////////////////
/// FUNCIONALITY SECTION
////////////////////////////////////

///BACKSPACE SUB-SECTION 
document.querySelector('.buttons-back').addEventListener('click', function () {
    //we shouldn't leave parenthesis unclosed,
    //this code makes sure it doesn't happen.
    if (calcString.slice(-1) === '(') { 
        parenthesisOpening -= 1;
        validateParenthesisAccess();
    }
    if (calcString.slice(-1) === ')') {
        parenthesisOpening += 1;
        validateParenthesisAccess();
    }
    //removes last value of calcString
    calcString = calcString.slice(0 , -1);
    refreshScreen();

});

///RESET SUB-SECTION
document.querySelector('.buttons-reset').addEventListener('click', function () {
    calcString = '';
    parenthesisOpening = 0;
    validateParenthesisAccess();
    enableOperators();
    refreshScreen();
});

///VALUE-BTNS SUB-SECTION
for (let btn of valueBtns) {
    btn.addEventListener('click', function () {
        let btnVal = btn.getAttribute('data-value');
        calcString += btnVal;
        refreshScreen();
        enableOperators(); //this function prevents user from entering two operators touching eachother.
        
        //we shouldn't leave parenthesis unclosed,
        //below code makes sure it doesn't happen.
        if (btnVal === '(') {
            parenthesisOpening += 1; 
            validateParenthesisAccess();} 
        if (btnVal === ')') {
            parenthesisOpening -= 1; 
            validateParenthesisAccess();} 
    })
}

//OPERATOR-BTNS SUB-SECTION
for (let btn of operatorBtns) {
 btn.addEventListener('click', function () {
        calcString += btn.getAttribute('data-value');
        refreshScreen();
        disableOperators(); //this function prevents user from entering two operators touching eachother.
    })
}

//ANSWER-BTN SUB-SECTION 
ansBtn.addEventListener('click', function () {
    finalValidation();
    enableOperators();
    screen.innerText = `Result: ${eval(calcString) || 0}`;
    calcString = '';
});


//////TODO
/* VALIDATION - check for empty paranthesis*/
/* VALIDATION - fix parenthesis-function-call bug*/
/* ORGANIZATION - make the code logic understandable. make it DRY*/