// 1. Counting sheep

function countSheeps(arr) {
  let count = 0;
  arr.forEach((elem) => (elem ? count++ : count));
  return count;
}

// 2. Super Duper Easy
const problem = (x) => (typeof x === "number" ? x * 50 + 6 : "Error");

// 3. Vowel remover
function shortcut(string) {
  return string.replace(/[a,e,i,o,u]/g, "");
}

// 4. Calculate BMI
function bmi(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  }
}
// 5. Multiply
function multiply(a, b) {
  return a * b;
}
// 6. Convert boolean values to strings 'Yes' or 'No'.
let boolToWord = (bool) => (bool === true ? "Yes" : "No");

// 7. Grasshopper - Summation
var summation = function (num) {
  sum = 0;
  while (num >= 0) {
    sum += num--;
  }
  return sum;
};

// 8.  Array plus array
function arrayPlusArray(arr1, arr2) {
  let sumOfArr1 = arr1.reduce((a, b) => a + b, 0);
  let sumOfArr2 = arr2.reduce((a, b) => a + b, 0);
  return sumOfArr1 + sumOfArr2;
}

// 9. Total amount of points
function points(games) {
  let scores = 0;
  games.forEach(x => {
    if(x == "0:0" || x == "1:1" || x == "2:2" || x == "3:3" || x == "4:4"){
      scores+= 1;
    } else if( x == "1:0" || x == "2:0" || x == "2:1" || x == "3:0" || x == "3:1" || x == "3:2" || x == "4:0" || x == "4:1" || x == "4:2" || x == "4:3"){
      scores += 3
    }
  })
    return scores   
}

// 10. Keep Hydrated!
function litres(time) {
  let x =Math.floor(time)* 0.5;
  return Math.floor(x);
}