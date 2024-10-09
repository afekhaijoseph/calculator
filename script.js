const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const allClear = document.querySelector(".all-clear");

let isOperator = false;
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.value == 0) {
      screen.value = e.target.value;
    } else if (isOperator) {
      isOperator = false;
      screen.value = e.target.value;
      console.log(screen.value);
    } else if (screen.value.includes(".")) {
      screen.value = screen.value + "" + e.target.value.replace(".", "");
      console.log(screen.value);
    } else {
      console.log(e);
      screen.value = screen.value + e.target.value;
    }
    allClear.value = "clear";
    allClear.textContent = "C";
  });
});

let equation = [];
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    equation.push(screen.value);
    const lastItem = equation[equation.length - 1];
    if (["+" || "-" || "/" || "*"].includes(lastItem)) {
      equation.pop();
      equation.push(e.target.value);
    } else if (e.target.value == "=") {
      screen.value = eval(equation.join(""));
      equation = [];
    } else if (e.target.value == "all-clear") {
      equation = [];
      console.log(screen.value);
      screen.value = "";
      console.log(screen.value);
    } else if (e.target.value == "clear") {
      screen.value = "";
      equation.pop();
      allClear.value = "all-clear";
      console.log(allClear);
      allClear.textContent = "AC";
    } else if (e.target.value == "invert") {
      if (screen.value) {
        console.log(screen.value);
        screen.value = parseFloat(screen.value) * -1;
        equation.pop();
        equation.push(screen.value);
      }
    } else if (e.target.value == "percent") {
      console.log(screen.value);
      screen.value = parseFloat(screen.value) / 100;
      equation.pop();
      equation.push(screen.value);
    } else {
      equation.push(e.target.value);
    }
    isOperator = true;
    //console.log(equation);
  });
});
