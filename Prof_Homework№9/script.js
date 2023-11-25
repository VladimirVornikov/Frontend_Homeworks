


const infoAboutArray = [
    `Бухгалтерские услуги 
в вашем городе`,
    "В Москве",
    "В Берлине",
    "В Лондоне",
];

const block = document.querySelector(".block");
for (let i = 1; i < 7; i++) {
    let imgBuh = document.createElement("div");
    let paragraph = document.createElement("p");
    paragraph.innerText = "Бухгалтерское\n обслуживание";
    paragraph.classList.add("paragraph");

    imgBuh.style.backgroundImage = "url('./img/Rectangle 2.png')";
    imgBuh.classList.add("IMG");
    imgBuh.append(paragraph);
    block.append(imgBuh);
}
const infoAbout = document.querySelector(".info_about");

const nextButton = document.querySelector(".sliderNex_btn");
const prevButton = document.querySelector(".sliderPrev_btn");

let sliderIndex = 0;
let h1 = document.createElement("h1");
h1.innerText = `${infoAboutArray[sliderIndex]}`;
infoAbout.prepend(h1);

const slider_btn = document.querySelector(".slider_control");
for (let i = 0; i < infoAboutArray.length; i++) {
    const round_btn = document.createElement("div");
    round_btn.className = "round_btn";
    round_btn.dataset.index = i;
    slider_btn.append(round_btn);
}

let currentRoundBtn = document.querySelector(
    `.round_btn[data-index="${sliderIndex}"]`
);
if (currentRoundBtn) {
    currentRoundBtn.style.backgroundColor = "red";
}

nextButton.onclick = () => {
    let prevRoundBtn = document.querySelector(
        `.round_btn[data-index="${sliderIndex}"]`
    );
    if (prevRoundBtn) {
        prevRoundBtn.style.backgroundColor = "";
    }
    if (sliderIndex != infoAboutArray.length - 1) {
        sliderIndex++;
    } else {
        sliderIndex = 0;
    }
    h1.innerText = `${infoAboutArray[sliderIndex]}`;

    let currentRoundBtn = document.querySelector(
        `.round_btn[data-index="${sliderIndex}"]`
    );
    if (currentRoundBtn) {
        currentRoundBtn.style.backgroundColor = "red";
    }
};

prevButton.onclick = () => {
    let prevRoundBtn = document.querySelector(
        `.round_btn[data-index="${sliderIndex}"]`
    );
    if (prevRoundBtn) {
        prevRoundBtn.style.backgroundColor = "";
    }
    if (sliderIndex > 0) {
        sliderIndex--;
    } else {
        sliderIndex = 3;
    }
    h1.innerText = `${infoAboutArray[sliderIndex]}`;
    let currentRoundBtn = document.querySelector(
        `.round_btn[data-index="${sliderIndex}"]`
    );
    if (currentRoundBtn) {
        currentRoundBtn.style.backgroundColor = "red";
    }
};





const info2 = document.querySelector("#info2");

for (let i = 1; i < 5; i++) {
    let blockCard = document.createElement('div')
    let number = document.createElement('p')
    let par = document.createElement('p')
    let caise = document.createElement('a')

    number.innerText = '90'
    number.style.fontSize = '55px'
    number.style.margin = '30px 140px 30px 40px'

    par.innerText = 'Завершено \n крупных сделок'
    par.style.fontSize = '14px'
    par.style.marginLeft = '40px'
    par.style.marginBottom = '47px'
    
    caise.innerText = 'Все кейсы'
    caise.href = ''
    caise.style.marginLeft = '40px'
    caise.style.marginBottom = '40px'

    
    blockCard.classList.add('blockInfo')
    blockCard.append(number, par, caise)
    info2.append(blockCard)

}

const micro = document.querySelector('.microsoft');

for (let i =0; i < 4; i++) {
    let imgMicro = document.createElement('img')
    imgMicro.style.backgroundImage = "url('./img/Microsoft.png')";
    imgMicro.style.width = '255px'
    imgMicro.style.height = '130px'
    micro.append(imgMicro)
    
}













