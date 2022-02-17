function expensesIncomesCalculate() {

    // here is catch value food input,rent input,clothes input
    const foodField = document.getElementById('food-field').value;
    const rentField = document.getElementById('rent-field').value;
    const clothesField = document.getElementById('clothes-field').value;
    const incomeField = document.getElementById('income-field').value;

    if (foodField == '' && rentField == '' && clothesField == '') {
        alert('Error! check input')
    } else if (foodField < 0 || foodField == '') {
        //empty string and negative error handle food input
        alert('Error! please enter a number input')

        alert('Error! please enter a number and positve number of your food input')


    } else if (rentField < 0 || rentField == '') {
        //empty string and negative error handle rent input

        alert('Error! please enter a number and positve number of your rent input')


    } else if (clothesField < 0 || clothesField == '') {

        alert('Error! please enter a number and positve number of your clothes input')


    } else if (foodField > 0 || clothesField > 0 || rentField > 0) {

        //here is check  input field food,clothes,rent and error handle
        const calculateValue = parseFloat(foodField) + parseFloat(rentField) + parseFloat(clothesField);

        if (calculateValue > incomeField) {
            const totalExpenses = document.getElementById('total-expenses').innerText = '00';
        } else if (calculateValue < incomeField) {
            const totalExpenses = document.getElementById('total-expenses').innerText = calculateValue;
        }


        if (incomeField < 0) {

            //empty string and negative error handle income input

            alert("Error! please postive number income filed")

        }

        // here is income low and calculateValue high then output totalbalence 
        if (incomeField < calculateValue) {


            alert('Error! your income is low.No expense update your income')
            const BalenceOf = document.getElementById('Balance').innerText = '00'

            // here is income high and calculateValue low then output totalbalence 
        } else if (incomeField > calculateValue) {

            const totalBalence = parseFloat(incomeField) - parseFloat(calculateValue)
            const BalenceOf = document.getElementById('Balance').innerText = totalBalence

        }


    }
}








//here is count Saving Remining Calculate

function DiscountSavingReminingCalculate() {

    // here is income input value catch and discount value
    const discountField = document.getElementById('discount-field').value;
    const incomeField = document.getElementById('income-field').value;



    //empty string and negative error handle discount input


    if (incomeField == '' || incomeField < 0 && discountField == ' ' || discountField < 0) {
        //empty string and negative error handle income input
        alert('Error! please enter valid number input field')



    } else {

        //here is discount 
        const Discount = (parseFloat(incomeField) * parseFloat(discountField)) / 100;


        const savingAmount = document.getElementById('saving-amount').innerText = Discount;

        const BalenceOf = document.getElementById('Balance').innerText;

        //comapre banenceof less then saving amount
        if (BalenceOf < savingAmount) {

            // here is remainingBalence for negative number
            alert('Error! you Balence is low .No remain ')
            document.getElementById('remaining-balance').innerText = '00';


        } else {

            // here is  remainingBalence for positive number
            const remainingBalence = parseFloat(BalenceOf) - parseFloat(savingAmount)
            document.getElementById('remaining-balance').innerText = remainingBalence;


        }
    }

}




//here is call ClickButton function 
ClickButton('calculate-button', true);
ClickButton('discount-button', false);






//button click function 
function ClickButton(Buttonclick, isAdd) {
    document.getElementById(Buttonclick).addEventListener('click', function() {
        if (isAdd == true) {
            expensesIncomesCalculate();
        } else if (isAdd == false) {
            DiscountSavingReminingCalculate();
        }
    })

}