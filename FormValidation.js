let form = document.querySelector('Form');
let small = document.querySelector('.small');
form.addEventListener('submit',function(eve){
eve.preventDefault();
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let ans = usernameRegex.test('Ali_Haider');
console.log(ans);   
/*
if(eve.target.elements[0].value.length < 2){
small.style.display='initial';
}else{
small.style.display='none';
};*/
})