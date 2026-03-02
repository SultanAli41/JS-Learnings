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