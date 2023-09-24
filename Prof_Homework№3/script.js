let names = [
  {
    id: 1,
    name: "Steven",
    image: "https://i.ibb.co/tXqmKKR/1.png",
    salary: "5000",
  },
  {
    id: 2,
    name: "Neena",
    image: "https://i.ibb.co/yYxK3cq/2.png",
    salary: "10000",
  },
  {
    id: 3,
    name: "John",
    image: "https://i.ibb.co/SNqFDbB/3.png",
    salary: "4500",
  },
  {
    id: 4,
    name: "Rogers",
    image: "https://i.ibb.co/WnG0fVZ/4.png",
    salary: "3400",
  },
  {
    id: 5,
    name: "Cevin",
    image: "https://i.ibb.co/vdQK54J/6.png",
    salary: "500",
  },
  {
    id: 6,
    name: "Alshey",
    image: "https://i.ibb.co/wSJN6db/5.png",
    salary: "1210",
  },
  {
    id: 7,
    name: "Milki",
    image: "https://i.ibb.co/JpnDnH5/7.png",
    salary: "1210",
  },
  {
    id: 8,
    name: "Polar",
    image: "https://i.ibb.co/SnNLhgg/9.png",
    salary: "1210",
  },
  {
    id: 9,
    name: "Grindell",
    image: "https://i.ibb.co/fGH3RPW/8.png",
    salary: "1210",
  },
];
// Создание и добавление главного дива
const div_root = document.createElement("div");
div_root.className = "root";
// Добавление дива в начала body, чтобы он был перед тегом <script>
document.body.prepend(div_root);

// Создание формы для заполнения
const div_form = document.createElement("form");

// Создание инпутов и сабмита
const newName = document.createElement("input");
newName.placeholder = "New user's name";
newName.type = "text";
newName.name = "name";

const newSalary = document.createElement("input");
newSalary.placeholder = "Which salary do they want to?";
newSalary.type = "number";
newSalary.name = "salary";

const submit = document.createElement("button");
submit.innerText = "Add new user";
submit.type = "submit";

function saveLocalStorage(array) {
  localStorage.setItem("userList", JSON.stringify(array));
}

// Функция для загрузки данных из localStorage
function FromLocalStorage() {
  const userListJSON = localStorage.getItem("userList");
  if (userListJSON) {
    names = JSON.parse(userListJSON);
    render(names);
  }
}

// Вызываем функцию загрузки данных при загрузке страницы
FromLocalStorage();

// Добавление всего в форму и в root
div_form.append(newName, newSalary, submit);
document.body.prepend(div_form);

div_form.addEventListener("submit", (event) => {
  console.log(event.target);
  event.preventDefault(); // Запрещаем обновление страницы после отправки формы

  const { name, salary } = event.target;

  const newUser = {
    id: Date.now(),
    name: name.value,
    image: "https://picsum.photos/200",
    salary: salary.value,
  };

  // Добавление пользователя в массив
  names.push(newUser);

  // Сохраняем данные в localStorage
  saveLocalStorage(names);
  render(names);
});


// Функция для удаления пользователя из массива и обновления localStorage
function deleteUser(userId) {
  const user = names.findIndex((user) => user.id === userId);
  if (user !== -1) {
    names.splice(user, 1);

    // Сохраняем обновленные данные в localStorage
    saveLocalStorage(names);

    // Вызываем функцию отображения
    render(names);
  }
}


// //Функция добавления нового пользователя в массив

// Написание функции, которая будет создавать блоки и теги из списка(массива)
function render(array) {
  div_root.innerText = "";
  array.forEach((element) => {
    // Создание блока карточки
    const div_card = document.createElement("div");
    div_card.id = `${element.id}`;
    div_card.className = "card";
    // Создание тегов из списка
    const p_id = document.createElement("p");
    p_id.innerText = `User number: ${element.id}`;

    const name = document.createElement("h2");
    name.innerText = element.name;

    // Добавление кнопки "Закрыть"
    const button_close = document.createElement("button");
    button_close.className = "cross";
    button_close.innerText = "X";
    button_close.id = `${element.name}`;

    const img = document.createElement("img");
    img.src = `${element.image}`;
    img.className = "img";

    const p_salary = document.createElement("p");
    p_salary.innerText = `${element.salary} $`;

    // Создание блока информации о пользователи
    const div_info = document.createElement("div");
    div_info.className = "div_info";

    // Добавление в div_info информацию о пользователи
    div_info.append(name, p_salary, p_id);

    // Добавления изображения, кнопки, информации в div_card
    div_card.append(img, div_info, button_close);
    // Добавление div_card в div_root
    div_root.append(div_card);

    // Сохранение обновленных данных в localStorage
    saveLocalStorage(names);

    // Добавление события удаления, при двойном нажатии на кнопку закрыть
    button_close.addEventListener("click", (event) => {
      alert(
        `Карточка пользователя ${event.target.id} была удалена из базы данных Пентагона`
      );
      // Удаляем соответствующую карточку из DOM
      div_root.removeChild(div_card);
      // Удаляем пользователя из массива и обновляем localStorage
      deleteUser(element.id);
    });
  });
}

// Вызов функции
render(names);
