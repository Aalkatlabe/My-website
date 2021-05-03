/* ------------------------Multiply------------------------*/
const multiply = document.querySelectorAll('.multiply');
const multiplyGelijk = document.querySelector('.multiply-gelijk');
/* ------------------------Divide------------------------*/
const divide = document.querySelectorAll('.divide');
const divideGelijk = document.querySelector('.divide-gelijk');

/* ------------------------Add------------------------*/
const add = document.querySelectorAll('.add');
const addGelijk = document.querySelector('.add-gelijk');

/* ------------------------Substract------------------------*/
const substract = document.querySelectorAll('.substract');
const substractGelijk = document.querySelector('.substract-gelijk');

/* ------------------------Calculate------------------------*/
const buttonPrimary = document.querySelector('.calculator');

buttonPrimary.addEventListener('click', function () {

    multiplyHandeler();
    divideHandeler();
    addHandeler();
    substractHandeler();
});

function multiplyHandeler() {
    for (let i = 0; i < multiply.length; i++) {
        multiplyGelijk.textContent = Number(multiply[0].value) * Number(multiply[1].value);

    }
}

function divideHandeler() {
    for (let i = 0; i < divide.length; i++) {
        if (divide[0].value === "" || divide[1].value === "") {
            divideGelijk.textContent = 0;
        }
        else if (Number(divide[1].value) === 0) {
            divideGelijk.textContent = "Kan niet door nul delen";
        }
        else {
            divideGelijk.textContent = Number(divide[0].value) / Number(divide[1].value);
        }

    }
}

function addHandeler() {
    for (let i = 0; i < add.length; i++) {
        addGelijk.textContent = Number(add[0].value) + Number(add[1].value);

    }
}

function substractHandeler() {
    for (let i = 0; i < substract.length; i++) {
        substractGelijk.textContent = Number(substract[0].value) - Number(substract[1].value);

    }
}

/* Temperature Converter */
const inputFahrenheit = document.querySelector('.inputFahrenheit');
const outputCelcius = document.querySelector('.outputCelcius');
const buttonDanger = document.querySelector('.temperature');

buttonDanger.addEventListener('click', function () {
    if (inputFahrenheit.value === "") {
        outputCelcius.textContent = 0;
    }
    else {
        outputCelcius.textContent = (inputFahrenheit.value - 32) / 1.8;
    }
})

/* Tip Calculator */
function calculateTip() {

    resetTip();

    const billAmount = document.querySelector("#amount").value;
    const tipPercentage = document.querySelector("#tip").value;
    const numberOfPeople = document.querySelector("#numberPeople").value;

    // Validate the bill amount field.
    if (billAmount === "") {
        alert("Please enter bill amount.");
        return;
    }

    // Calculate the total tip.
    function tipCalc() {
        let tipTotal = ((billAmount * 100) * tipPercentage) / 100;
        tipTotal = tipTotal.toFixed(2);
        return tipTotal;
    }

    // Call tipCalc() function.
    const totalTip = tipCalc();

    if (numberOfPeople > 1) {
        document.querySelector("#multiple").style.display = "block";
        let bill = (billAmount / numberOfPeople);
        let tip = (totalTip / numberOfPeople);
        document.querySelector("#totalTipMultiple").innerHTML = tip.toFixed(2);

        let amountEach = parseFloat(bill) + parseFloat(tip);
        document.querySelector("#totalAmountEach").innerHTML = amountEach.toFixed(2);

        let multipleTotal = parseFloat(billAmount) + parseFloat(totalTip);
        document.querySelector("#billTotalmultiple").innerHTML = multipleTotal.toFixed(2);

    } else {
        document.querySelector("#single").style.display = "block";
        let singleTotal = (parseFloat(billAmount) + parseFloat(totalTip));
        document.querySelector("#tipAmount").innerHTML = totalTip;
        document.querySelector("#billTotal").innerHTML = singleTotal.toFixed(2);
    }
}

resetTip();

// Hide the single and multiple blocks
function resetTip() {
    document.querySelector("#single").style.display = "none";
    document.querySelector("#multiple").style.display = "none";
}