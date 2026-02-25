//var a =12;
//a=14;
//let a=10;
//a=12;
/*Wrong method : let a =12 */
//const a= 13;
//Let & Const Braces scope 
// Var Function scope 
// Temporal Dead Zone - Let & Const jahan define hoon gy us sy pehly ka sara area Like intial & declare howay
//line 12 pr us sy pehly 1-11 tk TDZ hai un ka lekin var k liyai nhi 
// Hoisting -- Js mai var banaian tou 2 hisoo mai divid hoo jay ga aur declare upper chala jay ga aur intialize 
//niche tou jb hum declare aur intialization sy pehly var ko access krain gy tou wo undefiend aay a isy hoisting kehty hain
// Var -> hoist -> undefined
// Let -> hoist -> X
// Const -> hoist -> X
// Practice of Var let and const 
var a = 2;
{
    var a=12;
}
console.log(a); // value will be 12 
let b= 12;
{
    let b=14;
    console.log(b,"inside");//14
}
console.log(b,"outside");//12
// Const -- Allow to update value in object but we can't declare again like using = to declarin value again
//Data types 
// Without brackets--Prmitive--when we copy prmitive it will give real copy  - String , number , boolean , null  undefined, symbol,bigint 
// Symbol -> unique immutable value 
//Bigint ->
let t = 9007199254740991n;
t = t + 3n;
console.log(t);// we use n on orignal and additional value for presicion

// With brackets -- refrence --When we copy refrence it give a refrence value only  - array , objects , Functions
// Prmitives
var x=99;
var y =x;
x=x+2;
console.log(x);
console.log(y);
// Refrence-- when we make change in 2nd value it will  change 1st value also
let f=[12,14,16,18,20]
let p=f;
console.log(f);
console.log(p);
p.pop();
console.log(f);
console.log(p);

// Dynamic Typing -- JS is not static it is dynamic typing like we can change value of a var/let 
let r =12;
r={};
r=[];
r="ABC";
//Type of Quirk
// type of null -- Object
//type of NAN -- Number
//--------------------------
// Type coercion (== vs ===)
// like "5" + 1 = 51 js concatinate with plus and also add with plus 
// Truthy & Falsy
//NaN , Null , doucument.all, "" , False , 0,undefined
// Practice Phase 2 
console.log(true + false);//1
console.log(null + 1 );//1
console.log("5" + 5);//55
console.log(!!undefined);//False
// why NAN is number in js ? because it is failed number operation 
//Null vs undefiend
let x1;
console.log(x1);//undefined
let x2=null;
console.log(x2);
//----------------------------------------------------------
//Opraters 
//Comparision
/*
== Not strict 12="12" // true  it compare vale only 
=== strict  12==="12" // false because it also compare type 
!= not strict
!== strict
>=
<=
<
>
*/
// Assigment opratare 
let k =12;
a+=2;
a*=3;
a/=2;
a-=5;
//Logical 
// && || !
// && AND F && F => False F&&T => False T&&F => False F&&F => False
//unary ops - -- ++
// ternary ?:
l2>13 ? console.log("true") : console.log("False");
// typeof -- use to check type of value
//instanceof -- use with refrence value 
var h = [12,13,14];
 console.log( h instanceof Array);
 // Practice of Opraters 
 let a1=12;
 let b1=14;
 if(a1>5 && b1<25){
    console.log("A");
 }else{
    console.log("B")
 }
 // practice 2 
 let isAdmin = true;
 let islogedin = false ;
 if (isAdmin || islogedin){
    console.log("Access granted")// this will run
 }else{
    console.log("Access denied")
 }
 // practice 3 
 let temp = 35;
 if(!(temp<30)){
    console.log("Today is hot");// this will run
 }else{
    console.log("Pleasent")
 }
 // Practice 4
 let a99=0;
 if(a99){
    console.log("Truthy");
 }else{
    console.log("Falsy")// this will run because 0 is falsy 
 }
 // Practice 5-- imp
 let mark =78;
 let grade= mark>=90? 'A' : mark>=70 ? "B" : mark >=60 ? "C" : "Fail";
 console.log(grade);
// practice 6 -- 
let points = 120;
let status = points > 100 ? "Gold" : "points" > 60 ? "Silver" : "Bronze";
console.log("status")
// Practice 7 
let login = true;
let hasToken = false;
let access = login && hasToken ? "Allow" : "Deny";
console.log("access");
//---------------------------------------------------
// Increment & Decrement Practice 
let m=10;
console.log(m--);//10
console.log(m);