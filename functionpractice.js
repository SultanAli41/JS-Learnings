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