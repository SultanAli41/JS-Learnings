// Way to make object
let obj ={
    name: "Ali",
  //Key:value,
    age : 26 
}
// 2 ways to access objects 
console.log(obj.name);
console.log(obj["age"]);
let aa = 'name';
console.log(aa);
// user.address.location.lng -- deep access 
//let {lat,lng} = User.address.location; - destructuring
//------------------------
// for in loop
let objf={
  name:"Ali",
  age:21,
  city:"LHR"
}
for(let key in objf){
  console.log(key,objf[key]);
}
// object.keys , object.entries
console.log(Object.keys(objf));// will make array of keys 
console.log(Object.entries(objf));// will make array of all the keys and values 
//---------------------------
// Copying object
let cobj={
  name:"Ali",
  age:21,
  city:"LHR"
}
let cobj2={...cobj};
// object.assign 
let cobj3 = Object.assign({price:"infinity"},cobj);
// when we copy a nested object even using spread oprater it copy only parents values 
// therefore we use deep clone 
let dcobj={
  name:"Ali",
  age:21,
  adddress:{
  city:"LHR"  }
}
let dcobj2 =JSON.parse( JSON.stringify(dcobj));
//optional chaning
dcobj?.adddres?.city;// if we wrie something incorrect it will not give error it will show undefiend 
// Computed proporties
let role = "Admin";
let objr={
   name:"Ali",
  age:21,
  adddress:{
  city:"LHR"  },
  [role]:"Ali",
}
// Practice Question
let p1 ={
  name:"Ali",
  age:21,
  isEnrolled:true
}
// can an object key be a number or boolean ? Yes
const user ={
 first_name:"Ali Haider"
};
user['first_name'];
let first_names=user.first_name;
const course ={
  title:"JS",
  duration:"4 Weeks",
};
for(const key in course ){
  console.log(key,course[key]);
}
//---------------
Object.entries(course).forEach(
  function(val){
    console.log(val[0] + ":" + val[1] );
  }
)
  