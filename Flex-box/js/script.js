let arrowTop = document.getElementById("arrow-top"),
    arrowBot = document.getElementById("arrow-bot"),
    sliderImg = document.getElementById("slider-img"),
    up = -210,
    imgHeight = 210;

    sliderImg.style.top = up + "px";

    slideTo = (direction) => {
       if (direction == "top") up = up - imgHeight;
       if (direction == "bot") up = up + imgHeight;
       if (up < -630) up = 0;
       if (up > 0) up = -630;
       sliderImg.style.top = up + "px";
    }
    let timerId = setInterval(() => {
        slideTo("top")
    },3000)
    arrowTop.addEventListener("click",() => {
       clearInterval(timerId);
       slideTo("top")
    })
    arrowBot.addEventListener("click",() => {
      clearInterval(timerId);
      slideTo("bot")
    })

    // активный фунционал/менюшка аккардеон
let dopContent = document.querySelectorAll('.dop-content'),
    active = document.querySelectorAll(".open-btn");

for (let i = 0; i < active.length; i++){ // перебирает все элементы active
  active[i].addEventListener("click",() => { // при клике на элемент (галочка) будет происходить следующее

    for (let j = 0; j < dopContent.length;j++){ ///перебирает все элементы dopContent
      dopContent[j].classList.remove('show') //и удаляет у всех них класс show ( что бы закрывались блоки когда открывался другой)(смотри сайт поймешь)
    }
    dopContent[i].classList.toggle('show');// добовляет класс show на выбранный элемент(toggle - переключает, то есть класс, то нет его)
  })
}
//анимация при клике
let sliderImgClick = document.querySelectorAll(".slider-item-img"),
    imgBox = document.querySelectorAll(".click-item"),
    sliderText = document.getElementById("click-text"),
    left = -540;

  sliderText.style.left = left + "px";

for (let i = 0; i < sliderImgClick.length; i++) { 
  sliderImgClick[i].addEventListener('click', () => { 
    for (let j = 0; j < imgBox.length; j++) { 
      imgBox[j].classList.remove("active") 
      imgBox[i].classList.add("active") 
    }

    switch (sliderImgClick[i]) { 
      case sliderImgClick[0]: 
        left = 0;
        break;
      case sliderImgClick[1]:
        left = -540;
        break;
      case sliderImgClick[2]:
        left = -1080;
        break;
    }
    sliderText.style.left = left + "px";
  })
}

