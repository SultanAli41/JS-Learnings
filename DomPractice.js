//1: DOM ? how does it represent html structure --- it likw a tree model 
// 2: Type of node in dom  ----- Element - Text - Attribute - Document
//3: element node vs text node <p>this is paragraph</p>
// element node can have child but text node has'nt 
// like tags are element and text in these element are text node \
// get element id select only id and queryselector can select any elemnt or any attribute 
//getelementbyclassname return html collection
let buy=document.getElementsByClassName('buy_now'); 
console.log(buy);
let chtxt = document.getElementById("chtxt").textContent="Welcome to dom practice";
let lis =document.querySelectorAll('li');
lis.forEach(
    function(val){
        console.log(val.textContent);
    }
);
// innerText, textContent, and inner HTML; first 2 change text but innerHTML change element 
// text content : is faster but it show data of outer and also of inner tag but inner html show only inner tag
let par = document.querySelector('.par');
par.textContent="Paragraph has been changed";
let img = document.querySelector('.img-l');
console.log(img.getAttribute('src'));
img.setAttribute("src",'https://unsplash.com/photos/mailbox-and-sign-for-strawberry-hill-farm-TQSvFz7NHuo');
let tit = document.querySelector('.tit');
tit.setAttribute('title','hy hello hy')
console.dir(tit);
let lists = document.querySelector('ul');
let li = document.createElement('li');
li.textContent="newTask";
lists.appendChild(li);
console.log(li);