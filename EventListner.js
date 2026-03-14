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
//input
let inp1 = document.querySelector('input');
inp.addEventListener('input',function(event){
    if(event.data !== null){
     console.log(event.data);
}
})
// change Event 
let sel = document.querySelector('#sel');
let h = document.querySelector('h3');
sel.addEventListener('change',function(val){
    h.textContent=`${val.target.value} Device Selected`;
})
//////-------------------------------------------------------
let h1 = document.querySelector('#ex1');
window.addEventListener('keydown',function(val){
    if(val.key === " "){
        h1.textContent="SPC";
    }else{
        h1.textContent=val.key;
    }
})
//--------------------- upload button & change button name accordin to file name
let btn = document.querySelector('#btn');
let inp = document.querySelector('#inp');
btn.addEventListener('click',function(){
    inp.click();
})
inp.addEventListener('change',function(det){
const files = det.target.files[0];
if(files){
    btn.textContent='files.name';
}
}); 