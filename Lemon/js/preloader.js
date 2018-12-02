document.body.onload = function() {
   setTimeout(() => {
      let preloader = document.getElementById("page-preloader");
      if (!preloader.classList.contains('done')) { // если у прелоадера нету класса done
         preloader.classList.add('done')
      }      
   }, 200);
   
}