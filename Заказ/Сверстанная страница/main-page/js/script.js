let tabsItem = document.getElementsByClassName("statistic-operation-content"),
    tabsControlWrapper = document.getElementsByClassName("statistic-operation-tabs")[0],
    tabsControl = document.getElementsByClassName("statistic-operation-tab-elem");

tabsControlWrapper.addEventListener("click",(event) => {
   let target = event.target;
   for(let item of tabsControl) {
      item.classList.remove("tab-elem-active")
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
         break;
      case tabsControl[1]:
         tabsItem[1].classList.add("statistic-operation-content-active")
         break;
   }
})
