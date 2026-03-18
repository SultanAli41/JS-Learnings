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
// Form Creator by input
let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');
form.addEventListener('submit',function(dets){
   dets.preventDefault();
   //card
   let card = document.createElement('div');
   card.classList.add('card');
   //profile
   let profile = document.createElement('div');
   profile.classList.add('profile');
   //img
   let img = document.createElement('img');
   img.setAttribute('src', inputs[3].value)   ;
   // h3 Name
   let h3 = document.createElement('h3');
   h3.textContent=inputs[0].value;
   // Designation
   let h5 = document.createElement('h5');
   h5.textContent=inputs[1].value;
   // Paragraph
   let para = document.createElement('p');
   para.textContent=inputs[2].value;
   // we will append here
   profile.appendChild(img);
   card.appendChild(profile);
   
   card.appendChild(h3);
   card.appendChild(h5);
   card.appendChild(para);
   document.body.appendChild(card);
   // for each 
   inputs.forEach(function(inp){
   if(inp.type !== "submit"){
      inp.value ="";
   }
   })
});
// Mouse hover effect 
let shape = document.querySelector('#shape');
shape.addEventListener('mouseover',function(){
   shape.style.backgroundColor="yellow";
})
shape.addEventListener('mouseleave',function(){
   shape.style.backgroundColor="red";
});
// Shape movment with mouse
let shape1 = document.querySelector('#shape');
window.addEventListener('mousemove',function(dets){
   shape.style.top = dets.clientY + "px";
   shape.style.left = dets.clientX + "px";
});
// Bubling Event -- agar ek element pr event nhi laga howa tou wo apnay parent pr event dekhy ga 
let nav = document.querySelector('.nav');
nav.addEventListener('click',function(det){
    alert("Clicked");
});
// List strike through bubling event
let ul = document.querySelector('.ul');
ul.addEventListener('click',function(dets){
dets.target.classList.toggle('lt');
})
// event Bubling 
let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let btn1 = document.querySelector('button');
btn1.addEventListener('click',function(){
    console.log("Button Clicked");
})
c.addEventListener('click',function(){
    console.log("c Clicked");
})
b.addEventListener('click',function(){
    console.log("b Clicked");
})
a.addEventListener('click',function(){
    console.log("a Clicked");
},true)
// jb bhi hum koi click krty hain tou event / event flow 2 phases mai chalta hai 
// Phase 1: event top sy neechay ki taraf aayga // 1st execute this phase // this capturing -- by default on nhi hoota krna parta hai we write true before curly braces  
// Phase 2: event bottom sy upper ki taraf jay ga // this is bubling -- bydefault on hoota hai 