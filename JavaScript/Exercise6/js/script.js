const discountForm = document.querySelector("#discountForm");
const result = document.querySelector("#result");

function calculateDiscount(total) {
  let discountRate = 0;
  if (total <= 75) discountRate = 0;
  else if (total <= 150) discountRate = 0.05;
  else discountRate = 0.10;

  const discount = total * discountRate;
  const finalAmount = total - discount;
  return { discountRate, discount, finalAmount };
}

function formatCurrency(amount) {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

discountForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const customerName = document.querySelector("#customerName").value.trim();
  const total = Number(document.querySelector("#purchaseTotal").value);

  if (!customerName) {
    result.textContent = "Enter the customer's name.";
    return;
  }
  if (!Number.isFinite(total) || total < 0) {
    result.textContent = "Enter a valid purchase total greater than or equal to zero.";
    return;
  }

  const calculation = calculateDiscount(total);
  result.replaceChildren();

  const lines = [
    `Customer: ${customerName}`,
    `Original purchase: ${formatCurrency(total)}`,
    `Discount applied: ${(calculation.discountRate * 100).toFixed(0)}% (${formatCurrency(calculation.discount)})`,
    `Final amount due: ${formatCurrency(calculation.finalAmount)}`
  ];

  for (const line of lines) {
    const paragraph = document.createElement("p");
    paragraph.textContent = line;
    result.appendChild(paragraph);
  }
});
