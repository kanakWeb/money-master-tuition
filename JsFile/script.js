//document.getElementById('calculate-button').addEventListener('click', function() {

/*  const foodField = document.getElementById('food-field').value;
 const rentField = document.getElementById('rent-field').value;
 const clothesField = document.getElementById('clothes-field').value;


 const calculateValue = parseFloat(foodField) + parseFloat(rentField) + parseFloat(clothesField);



 const totalExpenses = document.getElementById('total-expenses').innerText = calculateValue; */
//expensesCalculate();

/* const incomeField = document.getElementById('income-field').value;

const totalBalence = parseFloat(incomeField) - parseFloat(calculateValue) */

// const BalenceOf = document.getElementById('Balance').innerText = totalBalence
//})

// document.getElementById('discount-button').addEventListener('click', function() {
/* const incomeField = document.getElementById('income-field').value;

const discounField = document.getElementById('discoun-field').value;


const Discount = (parseFloat(incomeField) * parseFloat(discounField)) / 100;


const savingAmount = document.getElementById('saving-amount').innerText = Discount; */
// DiscountCalculate();

/* const BalenceOf = document.getElementById('Balance').innerText;

const remainingBalence = parseFloat(BalenceOf) - parseFloat(savingAmount) */

// document.getElementById('remaining-balance').innerText = remainingBalence;
// })

// total expensesCalculate

function expensesCalculate() {
    const foodField = document.getElementById('food-field').value;
    const rentField = document.getElementById('rent-field').value;
    const clothesField = document.getElementById('clothes-field').value;


    const calculateValue = parseFloat(foodField) + parseFloat(rentField) + parseFloat(clothesField);



    const totalExpenses = document.getElementById('total-expenses').innerText = calculateValue;
    const incomeField = document.getElementById('income-field').value;

    const totalBalence = parseFloat(incomeField) - parseFloat(calculateValue)
    const BalenceOf = document.getElementById('Balance').innerText = totalBalence
}

function DiscountCalculate() {
    const incomeField = document.getElementById('income-field').value;

    const discounField = document.getElementById('discoun-field').value;


    const Discount = (parseFloat(incomeField) * parseFloat(discounField)) / 100;


    const savingAmount = document.getElementById('saving-amount').innerText = Discount;

    const BalenceOf = document.getElementById('Balance').innerText;

    const remainingBalence = parseFloat(BalenceOf) - parseFloat(savingAmount)
    document.getElementById('remaining-balance').innerText = remainingBalence;
}


ClickButton('calculate-button', true);
ClickButton('discount-button', false);



function ClickButton(Buttonclick, isAdd) {
    document.getElementById(Buttonclick).addEventListener('click', function() {
        if (isAdd == true) {
            expensesCalculate();
        } else if (isAdd == false) {
            DiscountCalculate();
        }
    })

}