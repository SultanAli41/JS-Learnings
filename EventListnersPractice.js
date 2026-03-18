let inp=document.querySelector('input');
let spa = document.querySelector('Span');
inp.addEventListener('input',function(dets){
     let left = 0;
      left = spa.textContent= 20 - inp.value.length;
     if(left<0){
        spa.style.color="red";
     }else{
        spa.style.color="white";
     }
})