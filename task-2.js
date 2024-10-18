const buttonCheck = document.querySelector("[data-btn]");
const firstInput = document.querySelector("[data-input1]");
const secondInput = document.querySelector("[data-input2]");
buttonCheck.addEventListener("click", function () {
  const firstNumber = parseFloat(firstInput.value);
  const secondNumber = parseFloat(secondInput.value);
  const sum = firstNumber + secondNumber;
  if (sum > 10) {
    console.log("значення більша за 10");
  } else {
    console.log("значення менше aбо дорівнюе 10");
  }
});
