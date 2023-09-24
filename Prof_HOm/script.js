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
  
  // Находим div#root
  const root = document.querySelector('#root');
  
  // Создаем div.cards_container
  const cards_container = document.createElement('div');
  cards_container.classList.add('cards_container');
  
  // Создаем форму добавления продуктов
  const addProductForm = document.createElement('form');
  const titleInput = document.createElement('input');
  const priceInput = document.createElement('input');
  const discountInput = document.createElement('input');
  const submitBtn = document.createElement('button');
  
  titleInput.type = 'text';
  titleInput.placeholder = 'Title';
  titleInput.name = 'title';
  
  priceInput.type = 'number';
  priceInput.placeholder = 'Price';
  priceInput.name = 'price';
  
  discountInput.type = 'text';
  discountInput.placeholder = 'Discount';
  discountInput.name = 'discount';
  
  submitBtn.innerText = 'Add product';
  
  // Добавление в форму
  addProductForm.append(titleInput, priceInput, discountInput, submitBtn);
  
  // Добавляем в div#root форму и контейнер
  root.append(addProductForm, cards_container);
  
  
  // Обрабатываем сабмит формы
  // event.target - ссылка на элемент, с которым происходит событие (форма)
  addProductForm.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault(); // запрещаем обновление страницы после отправки формы
    
    const { title, price, discount } = event.target;
  
    const new_product = {
      id: Date.now(),
      title: title.value,
      price: price.value,
      discount: discount.value,
      image: 'https://picsum.photos/200'
    }
  
    products.push(new_product);
  
    // Вызываем функцию рендера с обновленным массивом (+1 продукт)
    renderCards(products)
  });
  
  // Рендерим карточки для каждого элемента в массиве products
  
  const renderCards = (arr) => {
    cards_container.innerText = ''; // очищаем контейнер от предыдущей версии products
    arr.forEach(el => {
      const cardElem = document.createElement('div');
      const titleElem = document.createElement('h3');
      const oldPriceElem = document.createElement('p')
      const newPriceElem = document.createElement('p');
      const imageElem = document.createElement('img');
    
      const newPriceValue = el.price - el.price * el.discount;
    
      titleElem.innerText = `Title: ${el.title}`;
      oldPriceElem.innerText = el.price + '$';
      newPriceElem.innerText = newPriceValue + '$';
    
      imageElem.src = el.image;
      imageElem.alt = el.title;
    
      cardElem.classList.add('card_elem');
    
      newPriceElem.style.color = newPriceValue > 200 ? 'darkmagenta' : 'green';
    
      cardElem.append(imageElem, titleElem, oldPriceElem, newPriceElem);
      cards_container.append(cardElem);
    });
  }
  
  // Вызываем функцию рендера с исходным массивом
  renderCards(names);