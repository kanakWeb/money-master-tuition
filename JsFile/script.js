document.getElementById('calculate-button').addEventListener('click', function() {

    const foodField = document.getElementById('food-field').value;
    const rentField = document.getElementById('rent-field').value;
    const clothesField = document.getElementById('clothes-field').value;

    const calculateValue = parseFloat(foodField) + parseFloat(rentField) + parseFloat(clothesField);
    console.log(calculateValue);


    const totalExpenses = document.getElementById('total-expenses').innerText = calculateValue;

})