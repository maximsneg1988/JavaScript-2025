// 1
// function stringToArray(str) {
//   return str.split(" ");
// }

// let sentence = "Hello World";
// console.log(stringToArray(sentence));

// 2

// function deleteCharacters(str, length) {
//   return str.substring(0, length);
// }

// let result = deleteCharacters("Hello World", 6);
// console.log(result);

// 3

// function insertDash(str) {
//   return str.toUpperCase().split(" ").join("-");
// }

// let result = insertDash("hello world from javascript");
// console.log(result);

// 4

// function capitalizeFirstChar(str) {
//   if (!str) return str;
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalizeFirstChar("привет"));

// 5

// function capitalize(str) {
//   return str
//     .trim()
//     .split(/\s+/)
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
// }

// console.log(capitalize("прИвет миР из JAVASCRIPT"));

// 6

// function changeRegister(str) {
//   return str
//     .split("")
//     .map((char) =>
//       char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
//     )
//     .join("");
// }

// console.log(changeRegister("HeLLo WoRLd"));

// 7

// function removeChar(str) {
//   return str.replace(/[^a-zA-Zа-яА-Я0-9]/g, "");
// }

// console.log(removeChar("Hello@World#2025"));

// 8

// function zeros(num, len) {
//   let sign = num >= 0 ? "+" : "-";
//   let absNumStr = Math.abs(num).toString();
//   let zerosNeeded = len - sign.length - absNumStr.length;
//   let paddedZeros = "0".repeat(Math.max(0, zerosNeeded));
//   return sign + paddedZeros + absNumStr;
// }

// console.log(zeros(9, 5));
// console.log(zeros(-22, 6));

// 9

// function comparison(str1, str2) {
//   return str1.toLowerCase() === str2.toLowerCase();
// }

// console.log(comparison("Привет", "привет"));

// 10

// function insensitiveSearch(str1, str2) {
//   return str1.toLowerCase().includes(str2.toLowerCase());
// }

// console.log(insensitiveSearch("Hello World", "world"));

// 11

// function initCap(str) {
//   return str
//     .split(" ")
//     .map((word, index) =>
//       index === 0
//         ? word.toLowerCase()
//         : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//     )
//     .join("");
// }

// console.log(initCap("Hello world from js"));

// 12

// function initSnake(str) {
//   return str.replace(/([A-ZА-Я])/g, "_$1").toLowerCase();
// }

// console.log(initSnake("helloWorldFromJs"));

// 13

// function repeatStr(str, n) {
//   return str.repeat(n);
// }

// console.log(repeatStr("Hello", 5));

// 14

// function path(pathname) {
//   return pathname.split("\\").pop();
// }

// console.log(path("E:\\downloads\\image.png"));

// 15

// function endsWith(str, str1) {
//   return str.slice(-str1.length) === str1;
// }

// console.log(endsWith("Hello, world!", "world!"));

// 16

// function getSubstr(str, char, pos) {
//   const index = str.indexOf(char);

//   if (index === -1) return "";

//   if (pos === "before") {
//     return str.slice(0, index);
//   } else if (pos === "after") {
//     return str.slice(index + 1);
//   } else {
//     return "";
//   }
// }

// console.log(getSubstr("Hello, world!", ",", "before"));

// 17

// function insert(str, substr, pos = 0) {
//   return str.slice(0, pos) + substr + str.slice(pos);
// }

// console.log(insert("Hello, world!", "Beautiful ", 7));

// 18

// function limitStr(str, n, symb = "...") {
//   if (str.length > n) {
//     return str.slice(0, n - symb.length) + symb;
//   }
//   return str;
// }

// console.log(limitStr("Hello, world!", 8));

// 19

// function count(str, stringsearch) {
//   return (str.match(new RegExp(stringsearch, "g")) || []).length;
// }

// console.log(count("hello world", "o"));

// 20

// function strip(str) {
//   return str.trim().replace(/\s+/g, " ");
// }

// console.log(strip("   Hello   world   "));

// 21

// function cutString(str, n) {
//   const words = str.split(" ");
//   return words.slice(0, n).join(" ");
// }

// console.log(cutString("JavaScript is awesome", 2));

// 22

function findWord(word, str) {
  const regex = new RegExp(`\\b${word}\\b`, "i");
  return regex.test(str);
}

console.log(findWord("hello", "Hello world!"));
