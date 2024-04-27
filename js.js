"use strict";
//1
// const button = document.querySelector("[data-btn]");
// const input1 = document.querySelector("[data-input1]");
// const input2 = document.querySelector("[data-input2]");
// button.addEventListener("click", function () {
//   const firstFill = input1.value;
//   const secondFill = input2.value;
//   if (firstFill & secondFill) {
//     console.log("Обидва поля заполненні");
//   } else {
//     console.log("не всі поля заполненні");
//   }
// });
//2
// const button = document.querySelector("[data-btn]");
// const input1 = document.querySelector("[data-input1]");
// const input2 = document.querySelector("[data-input2]");
// button.addEventListener("click", function () {
//   const firstFill = parseFloat(input1.value);
//   const secondFill = parseFloat(input2.value);
//   const sum = firstFill + secondFill;
//   if (sum > 10) {
//     console.log("значення більша за 10");
//   } else {
//     console.log("значення менше фбо дорівнюе 10");
//   }
// });
//3
// const button = document.querySelector("[data-btn]");
// const input = document.querySelector("[data-input]");
// button.addEventListener("click", function () {
//   const firstFill = input.value.toLowerCase();
//   if (firstFill.includes("javascript")) {
//     alert("містить");
//   } else {
//     alert("не містить");
//   }
// });
//4
// const button = document.querySelector("[data-btn]");
// const input = document.querySelector("[data-input]");
// button.addEventListener("click", function () {
//   const firstFill = parseFloat(input.value);
//   if ((firstFill > 10) & (firstFill < 20)) {
//     alert("входить в діапозон");
//   } else {
//     alert("не входить в діапозон");
//   }
// });
//5
const button = document.querySelector("[data-btn]");
const input1 = document.querySelector("[data-input1]");
const input2 = document.querySelector("[data-input2]");
const input3 = document.querySelector("[data-input3]");
button.addEventListener("click", function () {
  const firstFill = String(input1.value);
  const secondFill = String(input2.value);
  const trirdFill = parseFloat(input2.value);
  if ((firstFill.length > 3) & secondFill.includes("@.") & (trirdFill > 6)) {
    console.log(" все вірно. зараз ми вас перекинемо на іншу вкладку");
  } else {
    console.log("ви десь щось наплутали. переробить");
  }
});
