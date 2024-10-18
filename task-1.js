const buttonCheck = document.querySelector("[data-btn]");
const firstInput = document.querySelector("[data-input1]");
const secondInput = document.querySelector("[data-input2]");
buttonCheck.addEventListener("click", function () {
  const firstFill = firstInput.value;
  const secondFill = secondInput.value;
  if (firstFill && secondFill) {
    console.log("Обидва поля заполненні");
  } else {
    console.log("не всі поля заполненні");
  }
});
