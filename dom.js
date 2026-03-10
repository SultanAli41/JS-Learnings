// Dom Manupliation
let heading = document.getElementById('heading');
console.dir(heading);
let abcd =document.querySelector('h1');
console.dir(abcd)
//document.querySelectorAll('');// it will show like an array it is not array but look like array
// inner html change html in html like it change text with tag <i>Hello</i> it will show italic
//
let go = document.querySelector('#go');
console.dir(go);
go.href="https://www.youtube.com/";
// Attribute Manipulation
// set , get , remove 
let se =document.querySelector("#se");
se.setAttribute("href","https://www.google.com");
console.log(se);
// get attribute
let ge = document.querySelector('#ge');
console.log(ge.getAttribute('href'));
// Remove attribute
let re = document.querySelector('#re');
console.log(re.removeAttribute('href'));
// Create new element
let h1 =document.createElement('h1');
h1.textContent="Hello ji";
console.log(h1);
document.querySelector('body').append(h1);
document.querySelector('body').prepend(h1);
// append at the end of body
// prepend at the start of body
// Create element child append or prepend 
// Changings in style using DOM.
document.querySelector('#text');
text.style.color="red";
text.style.backgroundColor="green";
// add , remove , toggle class
// Select by the main class
// Pehle element ko select karo
let box = document.querySelector('#box');
box.classList.remove('box');