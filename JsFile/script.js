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

    if (foodField < 0 || foodField == '') {
        alert('Error! please enter a number and positve number of your food input')
    } else if (rentField < 0 || rentField == '') {
        alert('Error! please enter a number and positve number of your rent input')

    } else if (clothesField < 0 || clothesField == '') {
        alert('Error! please enter a number and positve number of your clothes input')

    } else if (clothesField > 0 || clothesField > 0 || rentField > 0) {
        const calculateValue = parseFloat(foodField) + parseFloat(rentField) + parseFloat(clothesField);



        const totalExpenses = document.getElementById('total-expenses').innerText = calculateValue;
        const incomeField = document.getElementById('income-field').value;
        if (incomeField < 0) {
            alert("Error! please postive number income filed")
        }
        if (incomeField < calculateValue) {
            alert('Error! your income is low.please update your income')
            const totalBalence = parseFloat(incomeField) - parseFloat(calculateValue)
            const BalenceOf = document.getElementById('Balance').innerText = totalBalence
        } else if (incomeField > calculateValue) {
            const totalBalence = parseFloat(incomeField) - parseFloat(calculateValue)
            const BalenceOf = document.getElementById('Balance').innerText = totalBalence
        }


    }
}

function DiscountCalculate() {
    const incomeField = document.getElementById('income-field').value;
    const discounField = document.getElementById('discoun-field').value;
    if (incomeField == '' || incomeField < 0) {
        alert('Error! please enter valid number your income field')

    } else if (discounField == ' ' || discounField < 0) {
        alert('Error! please enter number or positive Your discount input')

    } else {

        const Discount = (parseFloat(incomeField) * parseFloat(discounField)) / 100;


        const savingAmount = document.getElementById('saving-amount').innerText = Discount;

        const BalenceOf = document.getElementById('Balance').innerText;

        if (BalenceOf < savingAmount) {
            alert('Error! you Balence is low .Nosaving ')
            const remainingBalence = parseFloat(BalenceOf) - parseFloat(savingAmount)
            document.getElementById('remaining-balance').innerText = remainingBalence;
        } else {
            const remainingBalence = parseFloat(BalenceOf) - parseFloat(savingAmount)
            document.getElementById('remaining-balance').innerText = remainingBalence;
        }
    }

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