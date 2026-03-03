//functions - we use funcion when we have to repeat code or reuse the code 
function alphabets(){
console.log("A");
console.log("B");
console.log("C");
console.log("D");
console.log("E");
}
alphabets();
//----------
// function statment
function abcd(){

}
// function expresion
let fnc = function(){
    // fnc expresion
    // now let's name is fnc's name 
}
// Fat arrow function
let fnc1=()=>{

}
// Parameters & Arguments
function dance (val){
console.log(`${val} Naach raha hai`)
}
dance("ghora");
dance("Kadha");
dance("cheel");
dance("kawa");
function addition (v1 =0 , v2=0){// parametrs and = 0 is default 
    console.log(v1 + v2);
}
addition( 3,2);
addition( 5,5);
addition( 7,9);
addition( 78,12);// arguments
// rest -- when we make many parameter we need many arguments then we use rest in functions
function rest(a,b,c,...val){
 console.log(a,b,c,val);
};
rest(1,2,3,4,5,6,7,8);
// return
function hy (v){
    return 12 + v ;
}
let va = hy(12);
console.log(va);
//--------
// First class function : A Function which we can treat as a value 
let value=()=>{}
//High Order function-- which return function or accept a function
// Example 1 :
function hof(val){

}
hof(function(){})
//Example 2 
function hof1(){
return function(){};
}
hof1()();
// Pure and impure function 
//a function which not change values outside of functions are known as pure function
function purefnc(){
    console.log("This is a pure function")
}
//impure - which changes values out side of the function 
let impfnc = 12;
function imfnc(){
    impfnc++;
}
imfnc();
// Closures & Lexical enviorment
// Closures
function cl(){
    let a =12;
    return function icl(){
        console.log("a");
    }
}
//Lexical Enviorment -- like we can access outer function values in inner function but can't access inner in outer 
function abcd (){
    let a =12;
    function efgh(){
        let b=2;
        function ijkl(){
            let c=1;
        } 
    }
}
// IIFE // Imeiate invoke function expression
(function(){
console.log("IIFE");
    })();
// Hoisting diffrence b/w decleration and  expression 
// when we access a variable or funcion before intialization it show an error but when we make a function expression it will work 
mnbv();
function mnbv(){
    // this will work 
}
// in expresion
cxaz();
let cxaz =function (){

}