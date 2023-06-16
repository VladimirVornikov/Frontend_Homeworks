// 1. Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

function tenPertcentOf() {
  let number = +prompt("Введите число: ");
  console.log(number * 0.1);
}
tenPertcentOf();

// 2. Написать программу, которая получает два числа и выводит наименьшее

function minNuber() {
  let number1 = +prompt("Введите первое число: ");
  let number2 = +prompt("Введите второе число: ");

  if (number1 > number2) {
    console.log("Наименьшее число: " + number2);
  } else if (number1 == number2) {
    console.log("Числа равны");
  } else {
    console.log("Наименьшее число: " + number1);
  }
}
minNuber();

//3. Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений:
//  ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

function smallerBiggerEqual() {
  let number = +prompt("Введите число: ");
  if (number > 100) {
    console.log("Число больше 100 ");
  } else if (number == 100) {
    console.log("Число равно 100");
  } else {
    console.log("Число меньше ста");
  }
}
smallerBiggerEqual();

// 4. Написать программу, которая запрашивает у пользователя его имя и возраст (в годах)
//  и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

const userName = prompt("Введите ваше имя: ");
const userBirthdate = +prompt("Введите вашу дату рождения");
const age = 2023 - userBirthdate;
if (age >= 18) {
  console.log(`Hello, ${userName}`);
} else {
  console.log(`Hi, ${userName}`);
}
