//inputs validations
let inputs = document.querySelectorAll("#billvalue, #peoplevalue");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function() {
    if (this.id === "billvalue") {
      if (this.value === "0") {
        this.classList.add("false");
        document.getElementById("bill-error").innerText = "* CANNOT be 0"
      } else {
        this.classList.remove("false");
        document.getElementById("bill-error").innerText = ""
      }

    } else if (this.id === "peoplevalue") {
      if (this.value === "0") {
        this.classList.add("false");
        document.getElementById("num-people-error").innerText = "* CANNOT be 0"
      } else {
        this.classList.remove("false");
        document.getElementById("num-people-error").innerText = ""
      }
    }
  });
}


// deactivate activated buttons once the custom input is selected
const customValue = document.getElementById("custom");

function isFocused() {
  return customValue === document.activeElement;
}

function activateCustom () {
  if (isFocused()){
    activeButton.classList.remove("active");
    activeButton.classList.add("default");
  }
}

// clears the value of the custom button once a tip button is activated 
function clearCustom (button) {
  if (button.classList.contains("active")){
    customValue.value = "";
  }
}


// changes the state of the button once a button is selected
let activeButton = null;

function activateButton(button) {
  if (activeButton !== null) {
    // deactivate activated buttons
    activeButton.classList.remove("active");
    activeButton.classList.add("default");
  }

  //  activated buttons
  button.classList.remove("default");
  button.classList.add("active");
  activeButton = button;
}

customValue.addEventListener("focus", () => {
  if (activeButton !== null) {
    activeButton.classList.remove("active");
    activeButton.classList.add("default");
    activeButton = null;
  }
});


