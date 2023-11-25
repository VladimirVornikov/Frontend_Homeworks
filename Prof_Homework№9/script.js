

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

// Slaider for Logo 


const infoAboutArrayMicro = [
    "./img/Microsoft.png",
    "./img/apple.png",
    "./img/intel.png",
    "./img/github.png"    
];

const infoAboutMicro = document.querySelector(".info_about_microsoft");
const nextButtonMicro = document.querySelector(".sliderNex_btnMicro");
const prevButtonMicro = document.querySelector(".sliderPrev_btnMicro");

let sliderIndexMicro = 0;

function createElem () {
    infoAboutMicro.innerHTML = ''
    for (let i =0; i < 4; i++) {
            let IMGMicro = document.createElement("img");
            let urlMicro = `${infoAboutArrayMicro[sliderIndexMicro]}`;
            IMGMicro.src = urlMicro;
            IMGMicro.style.width = '255px'
            IMGMicro.style.height = '130px'
            infoAboutMicro.append(IMGMicro)
            
    }
}
createElem()

// Create table 
const slider_btnMicro = document.querySelector(".slider_controlMicro");
for (let i = 0; i < infoAboutArrayMicro.length; i++) {
    const round_btn = document.createElement("div");
    round_btn.className = "round_btnMicro";
    round_btn.dataset.index = i;
    slider_btnMicro.append(round_btn);
}

function redForBar() {
    let currentRoundBtnMicro = document.querySelector(
        `.round_btnMicro[data-index="${sliderIndexMicro}"]`
    );

    if (currentRoundBtnMicro) {
        currentRoundBtnMicro.style.backgroundColor = "red";
    }

    // Define prevIndex
    let prevIndex = sliderIndexMicro - 1 < 0 ? infoAboutArrayMicro.length - 1 : sliderIndexMicro - 1;

    // Reset the style for the previous round button
    let prevRoundBtnMicro = document.querySelector(
        `.round_btnMicro[data-index="${prevIndex}"]`
    );

    if (prevRoundBtnMicro) {
        prevRoundBtnMicro.style.backgroundColor = "white";
    }

    // Define nextIndex
    let nextIndex = sliderIndexMicro + 1 >= infoAboutArrayMicro.length ? 0 : sliderIndexMicro + 1;

    // Reset the style for the next round button
    let nextRoundBtnMicro = document.querySelector(
        `.round_btnMicro[data-index="${nextIndex}"]`
    );

    if (nextRoundBtnMicro) {
        nextRoundBtnMicro.style.backgroundColor = "white";
    }
}
redForBar()

nextButtonMicro.onclick = () => {
    sliderIndexMicro++;
    
    if (sliderIndexMicro > 3) {
        sliderIndexMicro = 0;
    }
    createElem()
    redForBar()
}

prevButtonMicro.onclick = () => {
    sliderIndexMicro--;
    if (sliderIndexMicro < 0) {
        sliderIndexMicro = infoAboutArrayMicro.length - 1;
    }
    createElem()
    redForBar()
}

// Slider for Avatar


const infoAboutArrayAvatar = [
    "./img/Ekaterina.png",
    "./img/kolya.jpg",
    "./img/MIhail.png",
    "./img/Ulia.png"    
];

const infoAboutAvatar = document.querySelector(".commentsIMG");
const nextButtonAvatar = document.querySelector(".sliderNex_btnAvatar");
const prevButtonAvatar = document.querySelector(".sliderPrev_btnAvatar");

let sliderIndexAvatar = 0;

function createElemAvatar () {
    infoAboutAvatar.innerHTML = ''
    let IMGAvatar = document.createElement("img");
    IMGAvatar.style.width = '340px'
    IMGAvatar.style.height = '80px'
    let urlAvatar = `${infoAboutArrayAvatar[sliderIndexAvatar]}`;
    IMGAvatar.src = urlAvatar;
    infoAboutAvatar.append(IMGAvatar)
}
createElemAvatar()

nextButtonAvatar.onclick = () => {
    sliderIndexAvatar++;
    
    if (sliderIndexAvatar > 3) {
        sliderIndexAvatar = 0;
    }
    createElemAvatar()
}

prevButtonAvatar.onclick = () => {
    sliderIndexAvatar--;
    if (sliderIndexAvatar < 0) {
        sliderIndexAvatar = infoAboutArrayAvatar.length - 1;
    }
    createElemAvatar()
}


const buttonMessage = document.querySelector('form')

buttonMessage.addEventListener("submit", (message) => {
    console.log(message.target);
    message.preventDefault();

    
    const { name, surname } = message.target;
    console.log(name.value, surname.value);
})



