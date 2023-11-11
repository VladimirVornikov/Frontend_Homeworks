/*1. Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
Примечание: инициализация дат должна быть внутри функции
 */

// function checkDate() {
//     const  today = new Date();
//     const month = today.getMonth()+1;
//     const year = today.getFullYear();
//     const theLastDay = new Date(year, month, 0).getDate();

//     const result = theLastDay - today.getDate();
    
//     console.log(`Осталось до конца месяца ${result} дней`);
// }
// checkDate()

/*2. Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
Если пятница была вчера - “Пятница была вчера”
Если пятница будет завтра - “Завтра пятница!”
Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

Предусмотрите вывод 4 пункта (дня, дней)
 */



// function isItFridayToday() {
//     const today = new Date();
//     const numberOfDays = today.getDay();
//     switch (numberOfDays) {
//         case 4:
//             console.log("Завтра будет пятница");
//             break;
//         case 5: 
//             console.log("Сегодня пятница");
//             break;
//         case 6:
//             console.log("Вчера была пятница");
//             break;
//         default:
//             if (numberOfDays > 6) {
//                 console.log(`Пятница будет через 5 дней`);
//             } else {
//                 const difference = (5 - numberOfDays);
//                 console.log(`Пятница будет через ${difference} дней`);
//             }
//     }
// }

// isItFridayToday()

/*
Задан массив prices, передающий элементы строкового типа. Напишите функцию getInfo(prices), которая получает массив и
возвращает количество элементов, которые начинаются на “Цена” и количество элементов, которые заканчиваются на “$” в 
виде массива по примеру:

Пример:
let prices = [ 
'Цена товара - 1200$', 
'Стоимость - 500$', 
'Цена не определена', '9999',
'Ценовая категория - больше 300$',
'Цена за услугу 500 EUR',
]

console.log(getInfo(prices))

Результат: [3,3]
*/

// let prices = [ 
//     'Цена товара - 1200$', 
//     'Стоимость - 500$', 
//     'Цена не определена', '9999',
//     'Цкновая категория - больше 300$',
//     'Цена за услугу 500 EUR',
// ]

// function getInfo(prices) {
//     let countPrice = 0
//     let count$ = 0;
//     prices.forEach(element => {
//         if ( element.includes("$")) {
//             count$++;
//         }
//         if ( element.startsWith("Цена")) {
//             countPrice++;
//         }
        
//     })
//     console.log([countPrice,count$]);
// }

// getInfo(prices)

/*4. Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру: 
let arrays = [ 
'89840959944 exampleonemain@mail.ru', 
'+79840959933 forreason@yandex.net', 
'somemail@mail.ru', 
'89840959900 example@gmil.ru', 
'+79840959911', 
'grandthere@mail.ru',
'jetpackfor@gmail.ru',
'89840959922 some@yandex.com',
] 

Результат: ['89840959944','+79840959933','89840959900','+79840959911','89840959922'] ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com']
 */

// let arrays = [ 
//     '89840959944 exampleonemain@mail.ru', 
//     '+79840959933 forreason@yandex.net', 
//     'somemail@mail.ru', 
//     '89840959900 example@gmil.ru', 
//     '+79840959911', 
//     'grandthere@mail.ru',
//     'jetpackfor@gmail.ru',
//     '89840959922 some@yandex.com',
// ] 

// function separatePhoneAndEmail(arr) {
//     let phones = [];
//     let email = [];

//     for (let elem of arr) {
//         const splitElem = elem.split(' ')
//         if (splitElem.length > 1 ) {
//             phones.push(splitElem[0])
//             email.push(splitElem[1])
//         } 
        
//     }
//     console.log(phones);
//     console.log(email);
// }

// separatePhoneAndEmail(arrays);

/*5. Задан массив cards, передающий элементы строкового типа. Необходимо зашифровать номера карт по следующему правилу: 
заменить всю строку на 5 символов “*”, оставив первые 4 и последние 4 цифры.

Пример:
	let phones = [ 
'4000 0012 0056 9499', 
'4000 0013 5456 7379', 
'4000 0014 1456 9869', 
'4000 0015 3466 7859', 
'4000 0016 3556 6899', 
'4000 0017 4456 4699'
]
	

Результат: [
'4000*****9499',
'4000*****7379',
'4000*****9869',
'4000*****7859',
'4000*****6899',
'4000*****4699'
]
 */

let phones = [ 
    '4000 0012 0056 9499', 
    '4000 0013 5456 7379', 
    '4000 0014 1456 9869', 
    '4000 0015 3466 7859', 
    '4000 0016 3556 6899', 
    '4000 0017 4456 4699'
]

function encryption(arr) {
    arr.forEach(elem => {
        const newElem = elem.slice(0,4) +"*****" + elem.slice(-4);
        console.log(newElem);
    })
}
encryption(phones)