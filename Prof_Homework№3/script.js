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
const div_form = document.createElement("div");
div_form.className = "form";

// Создание инпутов и сабмита
const newName = document.createElement("input");
newName.placeholder = "New user's name";
newName.type = "text";
newName.id = "input";
newName.name = "name";

const newSalary = document.createElement("input");
newSalary.placeholder = "Which salary do they want to?";
newSalary.type = "number";
newSalary.id = "input";
newSalary.name = "salary"

const submit = document.createElement("button");
submit.innerText = "Add new user";
submit.className = "submit";
submit.type = "submit";
// Добавление всего в форму и в root
div_form.append(newName, newSalary, submit);
document.body.prepend(div_form);

div_form.addEventListener("submit", (event) => {
  event.preventDefault(); // Запрещаем обновление страницы после отправки формы

  const nameInput = document.querySelector('input[name="name"]');
  const salaryInput = document.querySelector('input[name="salary"]');

  // Валидация полей
  const name = nameInput.value.trim();
  const salary = parseFloat(salaryInput.value);

  if (name === "" || isNaN(salary)) {
    alert("Введите корректные данные.");
    return;
  }

  const new_user = {
    id: Date.now(),
    name: name,
    image: "https://picsum.photos/200",
    salary: salary
  };

  // Добавление пользователя в массив
  names.push(new_user);

  render(names);

  // Очистка инпутов
  nameInput.value = "";
  salaryInput.value = "";
});


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

    // Добавление события удаления, при двойном нажатии на кнопку закрыть
    button_close.addEventListener("click", (event) => {
      alert(
        `Карточка пользователя ${event.target.id} была удалена из базы данных Пентагона`
      );
      div_root.removeChild(div_card);
    });
  });
}

// Вызов функции
render(names);
