// function square(num) {
//   return num * num;
// }

// console.log(square(10));

// const square = (num) => num * num;

// console.log(square(5));

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5, 4));

// const sum = (a, b) => a + b;

// console.log(sum(20, 4));

// function calculate(a, b, c) {
//   if (c === 0) {
//     return "Ошибка!";
//   }
//   return (a - b) / c;
// }

// console.log(calculate(20, 10, 0));

// function getDayOfWeek(num) {
//   switch (num) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     case 7:
//       return "Воскресенье";
//     default:
//       return "Ошибка! Введите число от 1 до 7.";
//   }
// }

// console.log(getDayOfWeek(8));

// function isEqual(a, b) {
//   return a === b;
// }

// console.log(isEqual(5, 8));

// function isSumGreaterThanTen(a, b) {
//   return (a + b) > 10;
// }

// console.log(isSumGreaterThanTen(5, 2));

// function isNegative(num) {
//   return num < 0;
// }

// console.log(isNegative(-1));

// function isNumberInRange(num) {
//   return num > 0 && num < 10;
// }

// console.log(isNumberInRange(2));

// function getDigitsSum(num) {
//   return Math.abs(num)
//     .toString()
//     .split("")
//     .map(Number)
//     .reduce((sum, digit) => sum + digit, 0);
// }

// console.log(getDigitsSum(567));

// function getDigitsSum(num) {
//   return Math.abs(num)
//     .toString()
//     .split("")
//     .map(Number)
//     .reduce((sum, digit) => sum + digit, 0);
// }

// function findYearsWithSumOfDigits(sum) {
//   const yearsWithSum13 = [];
//   for (let year = 1; year <= 2020; year++) {
//     if (getDigitsSum(year) === sum) {
//       yearsWithSum13.push(year);
//     }
//   }

//   return yearsWithSum13;
// }

// const result = findYearsWithSumOfDigits(13);
// console.log(result);

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(9));

// function getDigitsSum(num) {
//   return Math.abs(num)
//     .toString()
//     .split("")
//     .map(Number)
//     .reduce((sum, digit) => sum + digit, 0);
// }

// function sumDigitsUntilSingleDigit(num) {
//   let sum = getDigitsSum(num);
//   while (sum > 9) {
//     sum = getDigitsSum(sum);
//   }

//   return sum;
// }

// console.log(sumDigitsUntilSingleDigit(999));

const isPalindrome = (str) => {
  const newStr = str.toLowerCase().replace(/\W/g, "");
  return newStr === newStr.split("").reverse().join("");
};

console.log(isPalindrome("yes"));
console.log(isPalindrome("mom"));
