window.addEventListener('DOMContentLoaded', () => {
const scrollBtn = document.getElementById("scrolled"),//кнопка скрола
      aboutBtn = document.querySelector(".about-me-title"),//кнопка активации
      aboutWrap = document.querySelector('.about-me'),//выпадающий блок
      aboutCont = document.querySelectorAll('.about-me-content');//выезжающие блоки

// Scrolled function
scrollBtn.addEventListener('click', () => {
   let userHeight = innerHeight - 645;
   let scrolled = pageYOffset,
       timer;
   if (innerHeight <= 645){
      function  scrollToBottom() {
         if (scrolled >= 645){
            clearInterval(timer);            
         }else {
            scrolled++;
            window.scrollTo(0, scrolled);
            timer = setInterval(scrollToBottom,1000/20);
         }                
      };
      scrollToBottom();
   }else {
      function scrollToBottomTwo() {
         if(scrolled >= 645 + userHeight){
            clearInterval(timer);
         }else {
            scrolled++;
            window.scrollTo(0, scrolled);
            timer = setInterval(scrollToBottomTwo,1000/20);
         }         
      }
      scrollToBottomTwo();
   }
})
// Activate Abou-me block
aboutBtn.addEventListener("click", () => {   
   if (innerWidth < 768) {
      aboutWrap.style.height = "1215px";
   }else {
      aboutWrap.style.height = "850px";
   }
   aboutBtn.classList.add("about-me-active");
   function moveAboutContent() {
      aboutCont[0].style.marginLeft = "0px"
      aboutCont[1].style.marginRight = "0px"
   }  
   setTimeout(moveAboutContent,450);   
})
});
