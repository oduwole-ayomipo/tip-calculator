let form = document.querySelectorAll(".reset");
let totalP = document.getElementById("total-per-person");
let tipP = document.getElementById("tip-per-person");


function clearInput() {
    for (let i = 0; i < form.length; i++) {
        if (form[i].value != ""){
            form[i].value = ""
        }
    }
    
    //resets any clicked btn
    // Get all elements with the .active class
    let activeElements = document.querySelectorAll(".active");
    
    // Loop through the elements and remove the class
    activeElements.forEach(function(element) {
      element.classList.remove("active");
    });


    //resets the total per person and tip per person value
    if ((totalP.innerText != "") && (tipP.innerText != "")) {
        totalP.innerText = "0.00"
        tipP.innerText = "0.00"
    }


    //remove the input error styling for
    // Get all elements with the .false class
    let errorInput = document.querySelectorAll(".false");

    // Loop through the elements and remove the class
    errorInput.forEach(function(element) {
        element.classList.remove("false");
      });


    //remove the input error text for the bill input
    document.getElementById("bill-error").innerText = ""

    //remove the input error text for the number of people input
    document.getElementById("num-people-error").innerText = "";

  }

    

