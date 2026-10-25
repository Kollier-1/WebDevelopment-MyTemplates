const tripForm = document.querySelector("#tripForm");
const result = document.querySelector("#result");

function calculateCost(distance) {
  const kilometersPerGallon = 35;
  const pricePerGallon = 3.45;
  const gallons = distance / kilometersPerGallon;
  const cost = gallons * pricePerGallon;
  return { gallons, cost };
}

tripForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const distance = Number(document.querySelector("#distance").value);

  if (!Number.isFinite(distance) || distance <= 0) {
    result.textContent = "Enter a distance greater than zero.";
    return;
  }

  const calculation = calculateCost(distance);
  result.textContent =
    `Distance: ${distance} km. Estimated gallons: ${calculation.gallons.toFixed(2)}. ` +
    `Estimated fuel cost: $${calculation.cost.toFixed(2)}.`;
});
