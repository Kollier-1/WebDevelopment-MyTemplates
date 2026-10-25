const calculatorForm = document.querySelector("#calculatorForm");

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return "Cannot divide by zero.";
  return a / b;
}
function remainder(a, b) {
  if (b === 0) return "Cannot calculate a remainder with a zero divisor.";
  return a % b;
}

calculatorForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const a = Number(document.querySelector("#firstNumber").value);
  const b = Number(document.querySelector("#secondNumber").value);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    alert("Enter two valid numbers.");
    return;
  }

  alert(
    `Addition: ${add(a, b)}\n` +
    `Subtraction: ${subtract(a, b)}\n` +
    `Multiplication: ${multiply(a, b)}\n` +
    `Division: ${divide(a, b)}\n` +
    `Remainder: ${remainder(a, b)}`
  );
});
