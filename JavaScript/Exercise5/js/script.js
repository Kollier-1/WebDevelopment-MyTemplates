const numberForm = document.querySelector("#numberForm");
const result = document.querySelector("#result");

function getEvenAndOddNumbers(lowerLimit, upperLimit) {
  const evenNumbers = [];
  const oddNumbers = [];

  for (let number = lowerLimit; number <= upperLimit; number++) {
    if (number % 2 === 0) evenNumbers.push(number);
    else oddNumbers.push(number);
  }
  return { evenNumbers, oddNumbers };
}

numberForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const lowerLimit = Number(document.querySelector("#lowerLimit").value);
  const upperLimit = Number(document.querySelector("#upperLimit").value);

  if (!Number.isInteger(lowerLimit) || !Number.isInteger(upperLimit)) {
    result.textContent = "Enter whole numbers.";
    return;
  }
  if (lowerLimit > upperLimit) {
    result.textContent = "The lower limit cannot be greater than the upper limit.";
    return;
  }
  if (upperLimit - lowerLimit > 10000) {
    result.textContent = "The range is too large. Use an interval of up to 10,001 numbers.";
    return;
  }

  const numbers = getEvenAndOddNumbers(lowerLimit, upperLimit);
  result.replaceChildren();

  const evenTitle = document.createElement("h2");
  evenTitle.textContent = `Even (${numbers.evenNumbers.length})`;
  const evenList = document.createElement("p");
  evenList.textContent = numbers.evenNumbers.length ? numbers.evenNumbers.join(", ") : "No even numbers.";

  const oddTitle = document.createElement("h2");
  oddTitle.textContent = `Odd (${numbers.oddNumbers.length})`;
  const oddList = document.createElement("p");
  oddList.textContent = numbers.oddNumbers.length ? numbers.oddNumbers.join(", ") : "No odd numbers.";

  result.append(evenTitle, evenList, oddTitle, oddList);
});
