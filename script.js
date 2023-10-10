const allBtns = document.querySelectorAll("button");
const firstNumber = document.querySelector(".user-input .firstNumber");
const secondNumber = document.querySelector(".user-input .operator");
const operator = document.querySelector(".user-input .secondNumber");
const result = document.querySelector(".result");

let firstNumberInput;
let secondNumberInput;
let operatorInput;

let firstNumberPressed = true;
let secondNumberPressed = false;

const clearValues = () => {
  firstNumberPressed = true;
  secondNumberPressed = false;

  firstNumberInput = undefined;
  secondNumberInput = undefined;
  operatorInput = undefined;

  firstNumber.textContent = "";
  secondNumber.textContent = "";
  operator.textContent = "";
  result.textContent = "";
};

const validateNumber = (number) => {
  if (
    number === "0" ||
    number === "1" ||
    number === "2" ||
    number === "3" ||
    number === "4" ||
    number === "5" ||
    number === "6" ||
    number === "7" ||
    number === "8" ||
    number === "9"
  ) {
    return true;
  }
};

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "C") {
      clearValues();
    }
  });
});

document.addEventListener("keypress", (event) => {});
