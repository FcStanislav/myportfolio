const labelCheck = document.querySelectorAll('label');

labelCheck.forEach(function (e) {
   console.log(e);   
   e.onclick = function (){
      if (this.classList.contains('open')) {
         this.classList.remove('open');
      } else {this.classList.add('open');}
   };
});