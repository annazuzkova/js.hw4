const button = document.querySelector("[data-btn]");
const name = document.querySelector("[data-input1]");
const email = document.querySelector("[data-input2]");
const password = document.querySelector("[data-input3]");
button.addEventListener("click", function () {
  const nameFill = String(name.value);
  const emailFill = String(email.value);
  const passwordFill = password.value;
  if (
    nameFill.length > 3 &&
    emailFill.includes("@.") &&
    passwordFill.length > 6
  ) {
    console.log(" все вірно. зараз ми вас перекинемо на іншу вкладку");
  } else {
    console.log("ви десь щось наплутали. переробить");
  }
});
