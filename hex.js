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

// Implement a function that takes two arrays as arguments and returns an array of the sum of the values in the first array with the values in the second array in repeating order.
// For example…
// arraySum(
//   [ 1, 2, 4, 5, 6, 2, 1 ],
//   [ 2, 3, 5 ]) to return [ 3, 5, 9, 7, 9, 7, 3 ]
// arraySum([ 10, 20, 30, 40, 50 ], [ 20, 40, 60 ]) to return [ 30, 60, 90, 60, 90 ]

// const sumArray = (arr1, arr2) => {
//   let add = [];
//   let c = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if (c > arr2.length - 1) {
//       c = 0;
//     }
//     add.push(arr1[i] + arr2[c]);
//     c++;
//   }
//   return add;
// };
// console.log(sumArray([10, 20, 30, 40, 50], [20, 40, 60]));

// let data = [
//   { val: 1 },
//   { val: 5 },
//   { val: 6 },
//   { val: 4 },
//   { val: 2 },
//   { val: 1 },
// ];
// for (let i = 0; i < data.length; i++) {
//   data[i].val *= 2;
// }

// console.log(data);

// const increment = (arr, value) => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].val += value;
//   }
//   return arr;
// };
// console.log(increment([{ val: 1 }, { val: 2 }, { val: 3 }], 2));

// function missingNumber(numArr) {
//   const array = [];
//   for (let i = 0; i < 9; i++) {
//     if (numArr[i] !== i + 1) {
//       array.push(i + 1);
//     }
//   }
//   if (array.length > 0) {
//     return array;
//   } else {
//     return false;
//   }
// }

// console.log(missingNumber([1, 2, 4, 5, 6, 7, 8, 9]));
// function missingNumber(numArr) {
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const array = [];
//   for (let i = 0; i < 9; i++) {
//     if (numArr[i] !== numbers[i]) {
//       array.push(numArr[i]);
//     }
//   }
//   return array;
// }

// console.log(missingNumber([1, 2, 4, 5, 6, 7, 8, 9]));

// function countUnique(arr) {
//   let obj = {};
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     //if the current element is found in the object
//     if (obj[arr[i]]) {
//       //if true, increment the count by 1
//       obj[arr[i]] += 1;
//     } else {
//       //if false, assign a 1 to it
//       obj[arr[i]] = 1;
//     }

//     for (let key in obj) {
//       count++;
//     }
//     return count;
//   }
// }
// console.log(countUnique([1, 2, 3, 3, 4, 4, 5]));

// function reverseMultiply(arrOfNumbers) {
//   const newArray = [];
//   for (let i = 0; i < arrOfNumbers.length; i++) {
//     newArray.push(
//       arrOfNumbers[i] * arrOfNumbers[arrOfNumbers.length - (i + 1)]
//     );
//   }

//   return newArray;
// }
// console.log(reverseMultiply([1, 2, 3]));

// function removeNumbers(str) {
//   let splits = str.split("");
//   const array = [];
//   for (let i = 0; i < splits.length; i++) {
//     if (!isNaN(parseInt(splits[i]))) {
//       array.push(splits[i]);
//     }
//   }
//   return array.toString().split(",").join("");
// }

// console.log(removeNumbers("1234"));

// console.log(parseInt("d"));

// function replace(str) {
//   return str.replace(/[^0-9]/g, "");
// }
// console.log(replace("abcd0"));

// const fff = (arr) => {
//   const check = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       check.push(arr[i]);
//     }
//   }
//   return Array.from(new Set(check));
// };
// console.log(fff([1, 2, 3]));

// function classifyLetters(word) {
//   const allVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//   let vowels = 0;
//   let consonants = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (allVowels.includes(word[i])) {
//       vowels += 1;
//     } else {
//       consonants += 1;
//     }
//   }
//   // return allVowels.indexOf(word[6]);
//   return { vowels, consonants };
// }
// console.log(classifyLetters("Bastion"));

// Find the elements in an array Y, that are equal to a given variable X.
// const elementsEqualToX = (Y, X) => {
//   const isAmong = Y.filter((item) => {
//     return item == X;
//   });
//   return new Set(isAmong);
// };
// console.log(elementsEqualToX(["a", "a", "b", "f", "x", "y"], "a"));
// console.log(elementsEqualToX(["t", "3", 3, 3, "5", "v"], 3));

// Find the length of the numbers in array A that are divisible by both 2 and 3 , and at the same time, greater than 15.

// const divisible = (A) => {
//   const check = A.filter((item) => {
//     if (item % 6 === 0 && item > 15) {
//       return item;
//     }
//   });
//   return check.length;
// };
// console.log(divisible([5, 8, 6, 12]));

// Find the total age of the applicants that applied for this interview from the given record below.
// const totalAge = (array) => {
//   let add = 0;
//   array.map((item) => {
//     add += item.age;
//   });
//   return add;
// };
// console.log(
//   totalAge([
//     { name: "XYZ", age: 66 },
//     { name: "WER", age: 44 },
//     { name: "AZX", age: 22 },
//   ])
// );

// Given an array of objects containing user’s information, assign a default age X for any user that did not enter his/her age and return the array.
// const checkAge = (array, n) => {
//   let obj = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].age == undefined) {
//       obj.push({ name: array[i].name, age: n });
//     } else {
//       obj.push({ name: array[i].name, age: array[i].age });
//     }
//   }
//   return obj;
// };
// console.log(
//   checkAge([{ name: "XYZ" }, { name: "ASD" }, { name: "CVB", age: 33 }], 55)
// );

// You are given an array of player objects for a competition of several games. let register = [ {name: ‘Tolu’, age: 54, game:’Chess’}, {name: ‘Ikenna’, age: 19, game:’Catch’}, {name: ‘Adammu’, age: 78, game:’FuzzBuzz’}, {name: ‘David’, age: 23, game:’Chess’} ]
// Write a function that: Extract all the names of the players from the given array of user objects and return an array of names
// let register = [
//   { name: "Tolu", age: 54, game: "chess" },
//   { name: "IKENNA", age: 19, game: "catch" },
//   { name: "adammu", age: 78, game: "fuzzbuzz" },
//   { name: "david", age: 23, game: "chess" },
// ];
// const playerNames = (array) => {
//   const justName = array.map((item) => {
//     return item.name;
//   });
//   return Array.from(justName);
// };
// console.log(playerNames(register));

// Return True or False if a word is a Palindrome Hint: a palindrome is a word that can be spelt backwards and looks the same. Not case sensitive For example; isPalindrome(‘madam’) to return true isPalindrome(‘decagon’) to return false
// const isPalindrome = (word) => {
//   const another = word.split("").reverse().join("").toString();
//   if (word.toLowerCase() == another.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isPalindrome("dad"));

// Return all the unique values in an array as another array in a sorted order. For example; uniques([2,4,5,4,3,2,5,6,6,7,7,9,1,2,3,5]) will return [1,2,3,4,5,6,7,9];
// const uniques = (array) => {
//   const arr = [];

//   array.map((item) => {
//     if (!arr.includes(item)) {
//       arr.push(item);
//     } else {
//       return;
//     }
//     // return arr;
//   });
//   return arr.sort((a, b) => a - b);
// };
// console.log(uniques([1, 2, 2, 3, 5]));

function romanFigure(num) {
  let romanNumeral = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let res = "";

  while (num > 0) {
    for (const key in romanNumeral) {
      if (num >= romanFigure[key]) {
        res += key;
        num -= romanFigure[key];
        break;
      }
    }
  }
  console.log(res);
}

romanFigure(1990);

const data = 5;
