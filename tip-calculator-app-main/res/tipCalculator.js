// Get the bill amount input element and add an event listener
const billAmountInput = document.getElementById("billvalue");
billAmountInput.addEventListener("input", calculateTip);

// Get the number of people input element and add an event listener
const numPeopleInput = document.getElementById("peoplevalue");
numPeopleInput.addEventListener("input", calculateTip);

// Get all the tip percentage buttons and add event listeners
const tipBtns = document.querySelectorAll(".button");
tipBtns.forEach(function(tipBtn) {
  tipBtn.addEventListener("click", calculateTip);
});




// Tip calculator function
function calculateTip() {
    // Get the bill amount value
    const billAmount = parseFloat(billAmountInput.value);

    // Get the number of people value
    const numPeople = parseFloat(numPeopleInput.value);

    // Get the tip percentage value
    let tipPercentage;
    const customTipInput = document.querySelector(".custom-value");
    if (customTipInput.value !== "") {
        tipPercentage = parseFloat(customTipInput.value);
    } else {
        const activeTipBtn = document.querySelector(".button.active");
        tipPercentage = parseFloat(activeTipBtn.value);
    }

    // Calculate the tip amount, total amount, tip per person, and total per person
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    const totalPerPerson = totalAmount / numPeople;
    const tipPerPerson = tipAmount / numPeople;


    // displaying the result and error handler of the total per person value
    if (isNaN(totalPerPerson)) {
        document.getElementById("total-per-person").innerText= "0.00"
    } else {
        document.getElementById("total-per-person").innerText= (totalPerPerson.toFixed(2));
    }

    // displaying the result and error handler of the tip per person value
    if (isNaN(totalPerPerson)) {
        document.getElementById("tip-per-person").innerText= "0.00"
    } else {
        document.getElementById("tip-per-person").innerText= (tipPerPerson.toFixed(2));
    }
        

}


// displaying the result and error handler 
