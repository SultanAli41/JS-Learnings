let shape = document.querySelector('#shape');
window.addEventListener('mousemove',function(dets){
   shape.style.top = dets.clientY + "px";
   shape.style.left = dets.clientX + "px";
});