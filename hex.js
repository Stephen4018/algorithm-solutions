// const array = [42, 68, 22, 60, 7];

// const data = (arr) => {
//   const sort = arr.sort((a, b) => {
//     return a - b;
//   });
//   console.log(sort[sort.length - 2]);
// };
// data(array);

// const filter = (arr) => {
//   const filterArray = arr.filter((data) => {
//     if (!isNaN(data)) {
//       return data;
//     }
//   });
//   console.log(filterArray);
// };

// filter(["^$%", 567, "&&&"]);

// const sumMix = (arr) => {
//   sum = 0;
//   for (let a = 0; a < arr.length; a = a + 1) {
//     sum = sum + Number(arr[a]);
//   }
//   console.log(sum);
// };
// sumMix(["5", "0", 9, 3, 2, "9", 6, 7, 1]);

// const sumTwoSmallestNums = (arr) => {
//   const ascend = arr.sort((a, b) => a - b).filter((data) => data > 1);

//   const sum = ascend[0] + ascend[1];
//   console.log(sum);
// };

// sumTwoSmallestNums([2, 9, 6, -1]);

// const filterList = (arr) => {
//   const filter = arr.filter((data) => typeof data === "number");
//   console.log(filter);
// };
// filterList([1, 2, 123, "5", "123"]);

// const fibo = (n) => {
//   let array = [];
//   let newArray = [];

//   for (let i = 0; i < n; i++) {
//     if (n === 1) {
//       array.push(1);
//     } else if (n === 2) {
//       array.push(1, 2);
//     }
//   }
//   return array;
// };

// console.log(fibo(2));

// An ATM only has 100, 50, 20 Naira bills (NGN) available to be dispensed.
// Given an amount between 40 and 10000 Naira (inclusive) rounded to the nearest 10 and assuming that the ATM wants to use as few bills as possible. Write a function that returns the minimal number of 100, 50 and 20 Naira bills the ATM needs to dispense (in that order) in an array.

// const points = (arr) => {
//   let change = arr.map((item) => {
//     if (item[0] > item[2]) {
//       return 3;
//     } else if (item[0] < item[2]) {
//       return 0;
//     } else {
//       return 1;
//     }
//   });
//   let sum = 0;
//   add = change.map((item) => {
//     sum = sum + item;
//   });
//   console.log(sum);
// };
// points(["3:1", "2:2"]);

// const names = (theName) => {
//   if (theName[0] == "r" || theName[0] == "R") {
//     return theName + " plays banjo";
//   } else {
//     return theName + " does not play banjo";
//   }
// };
// console.log(names("rat"));

// const names = (theName) => {
//   if (theName[0].toUpperCase() == theName[0]) {
//     return theName + " plays banjo";
//   } else if (theName[0].toLowerCase() == theName[0]) {
//     return theName + " does not play banjo";
//   } else {
//     return;
//   }
// };
// console.log(names("Rat"));

// const names = (theName) => {
//   const play =
//     theName[0].toUpperCase() == theName[0]
//       ? theName + " plays banjo"
//       : theName + " does not play banjo";

//   return play;
// };
// console.log(names("rat"));

// const jaden = "i am here for the mean time";
// console.log(jaden.split(" "));

// const jade =
//   "you should use spreading or other copying methods where possible to create new arrays and objects as the accumulator, rather than mutating the existing one. If you decided to mutate the accumulator instead of copying it, remember to still return the modified object in the callback, or the next iteration will receive undefined.";
// const jaden = (string) => {
//   let newStr = string.split(" ");

//   const words = newStr.map((item) => {
//     return item[0].toUpperCase() + item.slice(1);
//   });

//   return words.join(" ");
// };
// const jaden = (string) => {
//   let newStr = string.split(" ");
//   let arr = [];
//   for (let i = 0; i < newStr.length; i++) {
//     arr.push(newStr[i][0].toUpperCase() + newStr[i].slice(1));
//   }

//   return arr.join(" ");
// };

// console.log(jaden(jade));

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
// solution

// const power = (numbers) => {
//   let data = numbers.toString().split("");
//   const square = data.map((num) => {
//     return Math.pow(num, 2);
//   });

//   const nums = parseInt(square.join(""));
//   return nums;
// };
// console.log(power(9119));

// AtM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// const atm = (pin) => {
//   const change = parseInt(pin);

//   if (change.toString().length < pin.length) {
//     return false;
//   } else if (change.toString().length === 4 || change.toString().length === 6) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(atm("132ee3"));

// firstmultiples of a number firstmultiples of a number firstmultiples of a number

// const FirstMultiples = (num) => {
//   let arr = [];

//   for (let i = 1; i < 4; i++) {
//     arr.push(num * i);
//   }
//   return arr;
// };
// console.log(FirstMultiples(3));

// alpha decagon NUMBER OF ELEMENTS GREATER AND NO OF ELEMENTS LESS THAN

// const noOfElements = (arr, greater, less) => {
//   const filter = arr.filter((item) => {
//     if (item >= greater && item <= less) {
//       return item;
//     }
//   });
//   return filter.length;
// };

// console.log(noOfElements([3, 3, 3, 5, 18, 6, 20], 15, 30));

// const divisible = (arr) => {
//   const filter = arr.filter((item) => {
//     if (item % 2 === 0 && item > 15) {
//       return item;
//     }
//   });
//   return filter.length;
// };

// console.log(divisible([5, 8, 6, 12]));

// const isDivisible = (arr, n) => {
//   const filter = arr.filter((item) => {
//     if (item % n === 0) {
//       return item;
//     }
//   });
//   const sort = new Set(filter);
//   return sort;
// };

// console.log(isDivisible([21, 3, 3, 7, 5, 4, 6, 6], 7));

// const highestSum = (arr, array) => {
//   const arr1 = arr.reduce((a, b) => a + b);
//   const arr2 = array.reduce((a, b) => a + b);

//   if (arr1 > arr2) {
//     return arr1;
//   } else {
//     return arr2;
//   }
// };
// console.log(highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]));

// const replaceDivisible = (X, Y) => {
//   const check = X.map((item) => {
//     if (item % Y === 0) {
//       return "isDivisible";
//     } else {
//       return item;
//     }
//   });
//   return check;
// };
// console.log(replaceDivisible([12, 4, 3, 6, 5], 2));

// const objects = (arr) => {
// const map = arr.map((item) => {
//   object.create
// })
// }

// function divisibleBy(arr, n) {
//   let newArr = arr.filter((element, index) => {
//     return arr.indexOf(element) === index;
//   });
//   let arr2 = newArr.filter((element) => {
//     if (element % n === 0) {
//       return element;
//     }
//   });
//   return newArr;
// }
// console.log(divisibleBy([1, 3, 5, 6, 3, 6, 7, 4], 2));

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
// function largestOfFour(arr) {
//   const array = arr.map((item) => {
//     return Math.max(...item);
//   });
//   const add = array.reduce((a, b) => a + b);
//   return add;
// }

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.

// function findLongestWordLength(str) {
//   const string = str.split(" ").map((item) => {
//     return item.length;
//   });
//   return Math.max(...string);
// }

// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );

// An ATM only has 100, 50, 20 Naira bills (NGN) available to be dispensed.
// Given an amount between 40 and 10000 Naira (inclusive) rounded to the nearest 10 and assuming that the ATM wants to use as few bills as possible. Write a function that returns the minimal number of 100, 50 and 20 Naira bills the ATM needs to dispense (in that order) in an array.
// For example…
// withdraw(amount)
// withdraw(250) to return [2,1,0]
// withdraw(370) to return [3,1,1]

// const withdraw = (amount) => {
//   const array = [];
//   const round = Math.floor(amount / 100);
//   array.push(round);

//   let remains = amount - round * 100;

//   const round2 = Math.floor(remains / 50);
//   array.push(round2);

//   let remains2 = amount - (round * 100 + round2 * 50);

//   const round3 = Math.floor(remains2 / 20);
//   array.push(round3);
//   return array;
// };
// console.log(withdraw(500));
