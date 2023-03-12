"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;

  if (d === 0) {
    const radical = -b / (2 * a);
    arr.push(radical);
  } else if (d > 0) {
    const radicalOne = (-b + Math.sqrt(d)) / (2 * a);
    const radicalTwo = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(radicalOne, radicalTwo);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false
  }

  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let n = countMonths;

  const paymentPerMonth = S * (P + (P / (((1 + P) ** n) - 1)));
  const sum = Number((paymentPerMonth * n).toFixed(2));

  return sum;
}