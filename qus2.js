let oddNumber = [];
for (let i = 61; i <= 100; i++) {
    if (i % 2 !== 0) {
        oddNumber.push(i);
    }
}
console.log(oddNumber);
// 2no
let evenNumber = [];
for (let i = 78; i <= 98; i++) {
    if (i % 2 === 0) {
        evenNumber.push(i);
    }
}
console.log(evenNumber);

// 3no
let sum = 0;
for (let i = 81; i <= 131; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

console.log("Sum of all odd numbers from 81 to 131:", sum);
// 4no
let sum1 = 0;
for (let i = 206; i <= 311; i++) {
  if (i % 2 === 0) {
    sum1 += i;
  }
}

console.log("Sum of all even numbers from 81 to 131:", sum1);