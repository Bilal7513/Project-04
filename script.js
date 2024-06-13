// Get DOM Element
const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountCurrencyTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch Exchange rates & Update the DOM
function calculate(){
    // Get the currency code for currency 1 and 2
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;

    // 
    fetch(` https://v6.exchangerate-api.com/v6/1ed57b0316eb63782be995d8/pair/${currencyOneCode}/${currencyTwoCode}`).then(res => res.json())
    .then(data => console.log(data));
};

// Event Listners
// Recalculate exchange rate when currency 1 change
currencyOne.addEventListener('change', calculate);
// Recalculate exchange rate when currency 1 amount change 
amountCurrencyOne.addEventListener('input', calculate);

// Recalculate exchange rate when currency 2 change
currencyTwo.addEventListener('change', calculate);
// Recalculate exchange rate when currency 2 amount change 
amountCurrencyTwo.addEventListener('input', calculate);


// Execute calculate function on page load
calculate();
