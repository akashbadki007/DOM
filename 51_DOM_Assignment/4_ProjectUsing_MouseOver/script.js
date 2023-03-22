const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const displayValue = document.getElementById("displayValue");
const resetBtn = document.getElementById("resetBtn");


// for decrement button click
decrementBtn.addEventListener("mouseout", () => {
    const value = Number(displayValue.innerText);
    if (value > 0) {
      displayValue.innerText = value - 1;
    } else {
      alert("Negative value not allowed");
    }
  });
  
  // for increment button click
  incrementBtn.addEventListener("mouseout", () => {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      displayValue.innerText = value + 1;
    }
  });
  
  // for reset button click
  resetBtn.addEventListener("mouseout", () => {
    displayValue.innerText = 0;
  });