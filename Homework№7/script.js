// // //1. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего
// // //  к меньшему.
function evenFromMaxToMin(num1, num2) {
  for (let i = Math.max(num1, num2); i >= Math.min(num1, num2); i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
evenFromMaxToMin(11, 21);

// // //2. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает
// // // число в указанной степени. Значение степени должно быть указано по умолчанию 2

function power(num, pow = 2) {
  return num ** pow;
}
console.log(power(3));

// // 3. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function sumOfN_Numers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfN_Numers(4));

// // 4. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных
//  чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function SumOfOddAndEven(n, m) {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = n; i < m; i++) {
    if (i % 2 == 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  console.log(evenSum);
  console.log(oddSum);
}
SumOfOddAndEven(2, 5)

// 5. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент
//  массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов -
// функция возвращает первый из этих элементов. (string.length > string.length) - сравнение длины строк
// Пример: [ 'one', 'two', 'three' ] => 'three'

function firstLongestElement(array) {
  let theLongestElement = [];
  if (array.length != 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > theLongestElement.length) {
        theLongestElement = array[i];
      }
    } 
    return theLongestElement

  } else {
    return null
  }
}
console.log(firstLongestElement(["one", "two", "three", "five", "six", "seven", 'eight', "nine", "ten"]));
