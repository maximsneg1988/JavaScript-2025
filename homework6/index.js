// 1

// const words = ["яблоко", "банан", "апельсин", "ананас"];

// const lengths = words.map((word) => word.length);

// console.log(lengths);

// 2

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// function currentSums(numbers) {
//   return numbers.reduce((acc, curr, index) => {
//     if (index === 0) {
//       acc.push(curr);
//     } else {
//       acc.push(acc[index - 1] + curr);
//     }
//     return acc;
//   }, []);
// }

// const result = currentSums(numbers);
// console.log(result);

// 3

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
// const targetSum = 7;

// const pairs = [];

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] + numbers[j] === targetSum) {
//       pairs.push([numbers[i], numbers[j]]);
//     }
//   }
// }

// console.log(pairs);

// 4

// const str = "Первая буква каждого слова этой строки";

// const firstLetters = str.split(" ").map((word) => word[0]);

// console.log(firstLetters);

// 5

// const str = "hello";

// const result = str.split("").map((char, i) => {
//   const prev = str[i - 1] || "_";
//   const curr = str[i];
//   const next = str[i + 1] || "_";
//   return prev + curr + next;
// });

// console.log(result);

// 6

// const digits = [4, 1, 9, 3, 7, 2, 8, 5, 0, 6];

// const sortedDescending = digits.sort((a, b) => b - a);

// console.log(sortedDescending);

// 7

// const arr1 = [3, 2, 4];
// const arr2 = [9, 6];
// const arr3 = [5, 0, 1, 7, 8];

// const mergedSorted = [...arr1, ...arr2, ...arr3]
//   .sort((a, b) => b - a)
//   .join(" ");

// console.log(mergedSorted);

// 8

// const arr = [[1, 2, 3], [4, 5], [6]];

// const sum = arr.flat().reduce((acc, num) => acc + num, 0);

// console.log(sum);

// 9

// const original = [1, 2, 3, 4, 5];
// const reversed = [];

// for (let i = original.length - 1; i >= 0; i--) {
//   reversed.push(original[i]);
// }

// console.log(reversed);

// 10

// const numbers = [3, 2, 3, 4, 2, 5];

// let sum = 0;
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
//   count++;

//   if (sum > 10) {
//     break;
//   }
// }

// console.log(count);

// 11

function arrayFill(value, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(value);
  }
  return result;
}

console.log(arrayFill("JS", 10));
