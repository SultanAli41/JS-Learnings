function plm(val){
return val(); 
}
plm(function Hey(){
    console.log("Hey");
});
//--------------------
// Now write for 2 times 
function fnc1(val1){
 return val1();
}
fnc1(
    function(){console.log('Hey1')}
)
// 2nd
function fnc2(val2){
    val2();
}
fnc2(function(){console.log("Hey2")})
//impure function
let total =0;
function impfnc(num){
    total+=num;
}
//pure function
let total1 =0;
function impfnc(num){
   let newtotal=0;
    newtotal =total1+=num;
}
// Clouser-- function return another function and inner function is using variable of outer function
function outter(){
    let val =12;
return function inner(){
console.log(val)
}
}  
// Clouser practice
 function outer(){
    let val=0;
  return function inner (){
        val++;
        return val;
    }
 }
let counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
//clouser practice 2
function outer2(){
    let val=10;
    return function(){
        val++;
        return val;
    }
} 
let counter2 = outer2();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
// IIFE
(function(){
    console.log("Hello");
})()
// BMI Calculatore
function bmi(weight,height){
    return weight / (height * height);
}
console.log(bmi(55,1.7).toFixed(2));
//
function counter(){
    let count =0 
    return function(){
        count++;
        return count;
    }
}
let c= counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
// fnc will return double value
function double(val){
 return val * 2;
}
console.log(double(10));
// IIFE to isolate variable 
(
function password(){
    const pswd="secret_password";
    console.log(pswd);
}
)();
console.log(pswd);
// Confusions
//function vs fat arrow function
// caling simple vs expresion 
// Closuer & Higher function 
// closer will rerun other fnc and also use varablie from parent function
// higher order will take function in argument and also return a function  