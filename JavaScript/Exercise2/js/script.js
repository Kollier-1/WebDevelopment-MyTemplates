const calculatorForm = document.querySelector("#calculatorForm");
const result = document.querySelector("#result");

function calculateInterest(capital) {
  const rate = 0.06;
  const years = 4;
  const interest = capital * rate * years;
  const finalCapital = capital + interest;
  return { interest, finalCapital };
}

calculatorForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const capital = Number(document.querySelector("#initialCapital").value);

  if (!Number.isFinite(capital) || capital <= 0) {
    result.textContent = "Enter an amount greater than zero.";
    return;
  }

  const calculation = calculateInterest(capital);
  result.textContent =
    `Initial capital: ${capital.toLocaleString("en-US", { style: "currency", currency: "USD" })}. ` +
    `Simple interest: ${calculation.interest.toLocaleString("en-US", { style: "currency", currency: "USD" })}. ` +
    `Final capital: ${calculation.finalCapital.toLocaleString("en-US", { style: "currency", currency: "USD" })}.`;
});
