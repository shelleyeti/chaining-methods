//select location of output
const outEl1 = document.querySelector("#output");
outEl1.innerHTML = `<h2>Descending Order</h2>`;

const outEl2 = document.querySelector("#output2");
outEl2.innerHTML = `<h2>No Numbers Great Than 19</h2>`;

const outEl3 = document.querySelector("#output3");
outEl3.innerHTML = `<h2>Multiply by 1.5 then Subtract 1</h2>`;

const outEl4 = document.querySelector("#output4");
outEl4.innerHTML = `<h2>Reduce to Single Value 1</h2>`;

function getSum(total, num) {
    return total + num;
}
//long hand method
let longDisplay = integers
  .sort(function(a, b) {
    return b - a;
  }).filter(num => {
    outEl1.innerHTML += `<span>${num} </span>`;
    if (num < 19) {
      outEl2.innerHTML += `<span>${num} </span>`;
      return num;
    }
  }).map(num => {
    outEl3.innerHTML += `<span>${(num * 1.5) - 1} </span>`;
    return num * 1.5 - 1;
  }).reduce(getSum);

  outEl4.innerHTML += `<span>${longDisplay} </span>`;


//short hand method
let final = integers
  .sort((a, b) => {return b - a;})
  .filter(num => num <= 19)
  .map(num => num * 1.5 - 1)
  .reduce((total, num) => total += num);

console.log(final);