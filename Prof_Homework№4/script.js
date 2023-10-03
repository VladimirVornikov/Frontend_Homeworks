// Запрос по фетчу на сервер, для сбора информации после конвертации методом json
let url = "https://dummyjson.com/products/"
    fetch(url)
        .then(result => result.json())
        .then(data => render(data.products));

// Создание корневого дива
const div_root = document.createElement("div");
div_root.className = "div_root";
document.body.prepend(div_root);

// Создание дива для карточек 
const div_cards = document.createElement('div');
div_cards.classList.add("div_cards");
div_root.append(div_cards);


function render(array){
    array.forEach(element => {
      const card = document.createElement("div")
      card.className = "card";
  
      const img_element = document.createElement("img");
      img_element.src = `${element.images[0]}`
  
      const h2_card = document.createElement('h2');
      h2_card.innerText = `${element.title}`;
  
      const price_card = document.createElement("p");
      const price = element.price;
      price_card.innerText = `Old price: ${price}$`
  
      const price_card_discount = document.createElement("p")
      price_card_discount.innerText =`New price: ${price*0.75}$`
      price_card_discount.id = "discount"
      
      const div_rating = createRating(); 

      card.append(img_element, h2_card, price_card, price_card_discount, div_rating)
      div_cards.append(card);
    });
  }

function createRating() {
    const div_rating = document.createElement('div');
    div_rating.className = "rating";
    for (let i = 0; i < 5; i++) {
      const rating_item = document.createElement("div");
      rating_item.id = `${i+1}`;
      rating_item.innerText ="☆";
      rating_item.addEventListener("click", clickRatingStar) 
      div_rating.append(rating_item);

    }
    return div_rating;
  }


  function clickRatingStar(event) {
    console.log(event.currentTarget);
    const clickedRating = event.currentTarget;
    // Получаем значение оценки
    const ratingValue = clickedRating.id;

    // Получаем все элементы звезд
    const allRatingItems = clickedRating.parentElement.children;

    // Устанавливаем оценку для текущей звезды
    for (let i = 0; i < ratingValue; i++) {
        allRatingItems[i].innerText = "★";
    }

    // Сбрасываем оценку для оставшихся звезд
    for (let i = ratingValue; i < allRatingItems.length; i++) {
        allRatingItems[i].innerText = "☆";
    }
}