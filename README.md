# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](https://github.com/oduwole-ayomipo/tip-calculator/blob/main/tip-calculator-app-main/Screenshot.png)


### Links

- Solution URL: (https://your-solution-url.com)
- [Live Site URL](https://ayooo-tip-calc.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

My knowledge in DOM manipulation in Javascript heightened. I also learnt how to think critically when it comes to writing javaScript programs; from the problem definition, to writing Pseudo codes, then finally coding the actual solution.

- These are some snippets I am proud of

```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

```
```js
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

```

### Useful resources

- [Example resource 1](https://www.stackoverflow.com) - 

- [Example resource 2](https://www.w3schools.com)



## Author

- Website - [AYOOO](https://www.twitter.com/ayooo.eth)
- Frontend Mentor - [Oduwole Ayomipo](https://www.frontendmentor.io/profile/oduwoleayomipo)
- Twitter - [JUST AYOOO](https://www.twitter.com/ayooo.eth)


## Acknowledgments
ME and OpenAI
