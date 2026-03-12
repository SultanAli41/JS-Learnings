//select the paragraph first
let p = document.querySelector('p');
p.addEventListener('click',function(){
    p.style.color='red';
})
function green(){
    p.style.color='green';
}
p.addEventListener('dblclick',green);
p.removeEventListener('dblclick',green)
//----------------------------------
//common events
let inp = document.querySelector('input');
inp.addEventListener('input',function(event){
    if(event.data !== null){
     console.log(event.data);
}
})