const amountForm = document.querySelector("#amountForm");
const result = document.querySelector("#result");
const amountInput = document.querySelector("#amount");
let total = 0;

amountForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const amount = Number(amountInput.value);

  if (!Number.isFinite(amount) || amount < 0) {
    result.textContent = "Enter a valid amount greater than or equal to zero.";
    return;
  }

  total += amount;
  result.textContent = `Running total: $${total.toFixed(2)}`;
  amountInput.value = "";
  amountInput.focus();
});
