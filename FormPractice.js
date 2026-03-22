// Email & Password Validator
let email = document.querySelector('#email');
let Password = document.querySelector('#password');
let form = document.querySelector('#authForm');
//-----------------------
// Req password ::
let len = document.querySelector('#req-length');
let num = document.querySelector('#req-number');
let spc = document.querySelector('#req-special');
Password.addEventListener('input',function(){
const val = Password.value;
if(val.length >= 8){
     len.classList.add('met');
}else{
    len.classList.remove('met');
};
if(/\d/.test(val)){
     num.classList.add('met');
}else{
    num.classList.remove('met');

};
if(/[!@#$%^&*]/.test(val)){
     spc.classList.add('met');

}else{
    spc.classList.remove('met');
};


})
//--------------------

form.addEventListener('submit',function(event){
document.querySelector('#emailError').textContent= "";
document.querySelector('#passError').textContent= "";

    event.preventDefault();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emailans = emailRegex.test(email.value);
console.log(emailans);

const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
let passans = passwordRegex.test(Password.value);
console.log(passans);



let isvalid = true;
if(!emailans){
    document.querySelector('#emailError').textContent= "Please enter a valid email.";
    document.querySelector('#emailError').style.display="initial";
    isvalid = false;
}
if(!passans){
        document.querySelector('#passError').textContent="Password does not meet requirements."
    document.querySelector('#passError').style.display="initial";
    isvalid = false;
}
// final res
if(isvalid){
    document.querySelector('#finalres').textContent='form Submit Succesfully';
    document.querySelector('#finalres').style.display='initial';
    form.reset();

}
})
