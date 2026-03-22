// Will run 1 time only
let tm = setTimeout(function(){
    console.log("Hello");
},5000);
//Clear time out 
clearTimeout(tm);
// Will run again and again 
let si = setInterval(function(){
    console.log('Hey');
},10000);
//Clear Set interval 
clearInterval(si);
//----------------------
/*let count = 0;
let ic = setInterval(function(){
count++;
console.log("Execution Number :" + count);
if(count==5){
   clearInterval(ic);
   console.log('Interval clear hoo gaya');
}
},1000);*/
// Counter from 10-0
let num = 10;
let con = setInterval(function(){
if(num>=1){
console.log(num);
num--;
}else{
    clearInterval(con);
}

},1000);
//-----------------------------------------
let btn = document.querySelector('#startBtn');
let per = document.querySelector('#percentage');
let bar = document.querySelector('#progressBar');
let head = document.querySelector('h2');
let dow = 0;
setTimeout(function(){
    alert('Will hide in 3s');
   let card = document.querySelector('.card');
    card.style.display= 'none';
},300)
btn.addEventListener('click',function(){
   let fnc= setInterval(
        function(){
        btn.disabled = true;
        if(dow<100){
            dow++; 
            bar.style.width=`${dow}%`;
            bar.classList.add('progressBar');
            per.textContent=`${dow}%`;
            per.classList.add('percentage');
        } else{
                head.textContent="Downloaded";
                clearInterval(fnc);
            }
},50)
})