const buttonCheck = document.querySelector("[data-btn]");
const input = document.querySelector("[data-input]");
buttonCheck.addEventListener("click", function () {
  const firstFill = input.value.toLowerCase();
  if (firstFill.includes("javascript")) {
    alert("містить");
  } else {
    alert("не містить");
  }
});
