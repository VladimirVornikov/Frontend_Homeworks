//1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50
// (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

function createNewParagraph() {
  const body1 = document.querySelector("body");
  body1.innerHTML = "<div class='numbers'>";
  for (i = 100; i >= 50; i -= 10) {
    body1.innerHTML += `<p> ${i} </p>`;
  }
}
createNewParagraph();

//2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container.
// Строки взять произвольные.
function loopForArray(countries) {
  const body2 = document.querySelector("body");
  body2.innerHTML += "<div class='strings_container'>";
  for (i = 0; i < countries.length; i++) {
    body2.innerHTML += `<p> ${countries[i]} </p>`;
  }
}
loopForArray(["Great Britain", "Germany", "Russia", "France", "Spain"]);

// 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) -
//   и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя.
//   Добавить все карточки в div с классом users_container.

function onlyAdults() {
  const usersInfo = [
    {
      first_name: 'Vladimir',
      last_name: 'Kirov',
      age: 20,
    },
    {
      first_name: 'Vlad',
      last_name: 'Pirov',
      age: 23,
    },
    {
      first_name: 'Alex',
      last_name: 'Birov',
      age: 18,
    },
    {
      first_name: 'Andrey',
      last_name: 'Dubrov',
      age: 15,
    },
  ];
  const body3 = document.querySelector("body");
  body3.innerHTML += "<div class='users_container'>";
  body3.style.backgroundColor = ""
  for (i = 0; i < usersInfo.length; i++) {
    if (usersInfo[i].age >= 18) {
      body3.innerHTML += `<h3> ${usersInfo[i].first_name} </h3> 
      <h3> ${usersInfo[i].last_name} </h3>
      <p> ${usersInfo[i].age} </p>`;
    }
  }
}

onlyAdults()