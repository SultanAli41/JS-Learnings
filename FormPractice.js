let email = document.querySelector('#email');
let Password = document.querySelector('#password');
let form = document.querySelector('form');
form.addEventListener('submit',function(det){
det.preventDefault();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
})