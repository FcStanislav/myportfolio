window.addEventListener("DOMContentLoaded", () => {
   let tabsItem = document.getElementsByClassName("tabs-item"),
    tabsControlWrapper = document.getElementsByClassName("tabs_control_wrapper")[0],
    tabsControl = document.getElementsByClassName("tabs_control_elem"); //переключатели
//главные перекючатели
tabsControlWrapper.addEventListener("click",(event) => {
   let target = event.target;
   for (let item of tabsControl) { //циклом "for of" мы пройдемся по всем элементам из массива tabsControl
      item.classList.remove("control_active")// и удалим класс
   }
   for (let item of tabsItem) { //циклом "for of" мы пройдемся по всем элементам из массива tabsItem
      item.classList.remove("tabs-item_active")// и удалим класс
   }
   if (target.classList.contains("tabs_control_elem")) { //contains-содержит. если цель содержит класс "tabs_control" то выполняется условие
      target.classList.add("control_active"); // добавиляем  класс той цели на которую нажали
   }
   switch (target) {
      case tabsControl[0]:
         tabsItem[0].classList.add("tabs-item_active")
         break;
      case tabsControl[1]:
         tabsItem[1].classList.add("tabs-item_active")
      break;
      case tabsControl[2]:
         tabsItem[2].classList.add("tabs-item_active")
      break;
      case tabsControl[3]:
         tabsItem[3].classList.add("tabs-item_active")
      break;
   // если наша цель tabsControl, то к tabsItem применяются следущие параметры, а именоо добавление класса
      
   }
})
// slider
let slider = document.getElementsByClassName("slider")[0],
    dotsWrap = document.getElementsByClassName("slider-dots")[0],
    dots = document.getElementsByClassName("slider-dot"),
    sliderWidth = document.querySelector('.slider-wrapper'),
    sliderItem = document.querySelectorAll(".slider-item"),
    left;

let itemWidth;

itemWidth = sliderWidth.clientWidth / 3 - 20;

   if (sliderWidth.clientWidth >= 510 ){
   sliderItem.forEach(function (item) {
      item.style.width = itemWidth + "px";
   });
}

dotsWrap.addEventListener("click",(event) => {
   let target =event.target;
   // console.log(itemWidth);
   // console.log(sliderWidth.clientWidth);
   for(let item of dots){
      item.classList.remove("dot-active")
   }
   if (target.classList.contains("slider-dot")){
      target.classList.add("dot-active")
   }
   switch (target) {
      case dots[0]:
         left = 0
         break;
      case dots[1]:
         left = (itemWidth + 20) * 3 * -1;
      break;
      case dots[2]:
         left = (itemWidth + 20) * 3 * -2;
      break;
   }
   slider.style.left = left + "px";
});

   
})