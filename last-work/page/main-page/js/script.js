window.addEventListener("DOMContentLoaded", function () {
let tabsItem = document.getElementsByClassName("statistic-operation-content"),
    coins = document.getElementsByClassName("fa-coins"),
    tabsControlWrapper = document.getElementsByClassName("statistic-operation-tabs")[0],
    tabsControl = document.getElementsByClassName("statistic-operation-tab-elem");

tabsControlWrapper.addEventListener("click",(event) => {
   let target = event.target;
   for(let item of tabsControl) {
      item.classList.remove("tab-elem-active")
   };
   for (let item of coins) {
      item.classList.remove("coins-active")
   };
   for(let item of tabsItem) {
      item.classList.remove("statistic-operation-content-active")
   };
   if (target.classList.contains("statistic-operation-tab-elem")) {
      target.classList.add("tab-elem-active")
   };
   switch (target) {
      case tabsControl[0]:
         tabsItem[0].classList.add("statistic-operation-content-active")
         coins[0].classList.add("coins-active")
         break;
      case tabsControl[1]:
         tabsItem[1].classList.add("statistic-operation-content-active")
         coins[1].classList.add("coins-active")
         break;
   }
})
let dopContent = document.getElementsByClassName("two-banner-content"),
    dopContentActive = document.getElementsByClassName("modal-2-active");

for (let i = 0; i < dopContentActive.length; i++) { // перебирает все элементы active
   dopContentActive[i].addEventListener("click", () => { // при клике на элемент (галочка) будет происходить следующее

      for (let j = 0; j < dopContent.length; j++) { ///перебирает все элементы dopContent
         dopContent[j].classList.remove('two-banner-content-active') //и удаляет у всех них класс show ( что бы закрывались блоки когда открывался другой)(смотри сайт поймешь)
      }
      dopContent[i].classList.toggle('two-banner-content-active'); // добовляет класс show на выбранный элемент(toggle - переключает, то есть класс, то нет его)
   })
}

// active modal
   let createButtom = document.getElementById("register-button"),
       createButtomTwo = document.getElementById("register-button-two"),
       modalOne = document.getElementsByClassName("modal-one")[0],
       modalOneClose = document.getElementsByClassName("modal-close")[0],
       modalTwo = document.getElementsByClassName("modal-two")[0],
       modalTwoClose = document.getElementsByClassName("modal-two-close")[0];
      
   createButtom.addEventListener("click", function () {
      modalOne.classList.add("modal_active");
   });
   modalOneClose.addEventListener("click", () => {
      modalOne.classList.remove("modal_active");
   });
// 2 modals

   createButtomTwo.addEventListener("click", function () {
      modalTwo.classList.add("two-modal_active");
     });
   modalTwoClose.addEventListener("click", () => {
      modalTwo.classList.remove("two-modal_active");
     });
});

// slider 
let sliderImg = document.getElementById("slider-img"),
    dotsWrap = document.getElementsByClassName("slider-dots")[0],
    dots = document.getElementsByClassName("dot"),
    topp = 0,
    imgWidth = 108;
    
sliderImg.style.top = topp + "px";
slideTo = (direction) => {
      if (direction == "left") { //если зничение direction = left то мы от left отнимаем ширину картинки
         topp = topp - imgWidth;
      }
      if (direction == "right") topp =topp + imgWidth;
       sliderImg.style.top = topp + "px";
}


dotsWrap.addEventListener("click", (event) => {
   let target = event.target; // показывает на какую цель мы нажали
  for (let item of dots) { //циклом "for of" мы пройдемся по всем элементам из массива dots
      item.classList.remove("dot-active")
   } //удалили класс active со всех элементов item

   if (target.classList.contains("dot")) { //contains-содержит. если цель содержит класс "dot" то выполняется условие
      target.classList.add("dot-active"); // добавиляем  класс той цели на которую нажали
   }
   // обрабатывает кнопки. задает позицию
   switch (target) { //switch заменяет множественные if'ы
      case dots[0]:
         topp = 0;
         break;
      case dots[1]:
         topp = -108;
         break;
      case dots[2]:
         topp = -216;
         break;
   }
   sliderImg.style.top = topp + "px"; 
});

let language = document.getElementById("language-togle"),
    languageWrapper = document.getElementsByClassName("header-language-elem-wrapper")[0];

language.addEventListener("click", function () {
   languageWrapper.classList.toggle("header-language-active");
});