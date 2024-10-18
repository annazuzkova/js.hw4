const buttonCheck = document.querySelector("[data-btn]");
const input = document.querySelector("[data-input]");
buttonCheck.addEventListener("click", function () {
  const firstFill = parseFloat(input.value);
  if (firstFill > 10 && firstFill < 20) {
    alert("входить в діапозон");
  } else {
    alert("не входить в діапозон");
  }
});
