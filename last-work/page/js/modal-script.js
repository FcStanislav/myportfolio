let createButtom = document.getElementsByClassName("create-depozit-buttom")[0],
    modalOne = document.getElementsByClassName("modal-one")[0],
    modalOneClose = document.getElementsByClassName("modal-close")[0],
    modalTabsWrapper = document.getElementsByClassName("banner-size-wrapper")[0],
    modalTab = document.getElementsByClassName("banner-size"),
    modalContent = document.getElementsByClassName("banner-content");

createButtom.addEventListener("click", function() {
   modalOne.classList.add("modal_active");   
});
modalOneClose.addEventListener("click",() => {
   modalOne.classList.remove("modal_active");
});

modalTabsWrapper.addEventListener("click",(event) => {
   let target = event.target;
   for (let item of modalTab){
      item.classList.remove("banner-size_active")
   }
   for (let item of modalContent){
      item.classList.remove("banner-content_active")
   }
   if (target.classList.contains("banner-size")){
      target.classList.add("banner-size_active");
   }
   switch (target) {
      case modalTab[0]:
         modalContent[0].classList.add("banner-content_active")
         break;
      case modalTab[1]:
         modalContent[1].classList.add("banner-content_active")
         break;
      case modalTab[2]:
         modalContent[2].classList.add("banner-content_active")
         break;       
         
      }
      console.log(target);
   })
