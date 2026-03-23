//local storage -> apke browser k andar data store karna jo ki browser band hone par bhi delete nhi hoga - 5 Mb
//Store data 
localStorage.setItem("name" ,"Ali");
//fetch data
console.log(localStorage.getItem("name"));
//remove data
localStorage.removeItem('name');
//update data 
localStorage.setItem("name","Haider");
// Clear 
//--------------------------------------------------------------------------------
//Session Storgae --> ye apka data temporarily store krta hai tab close data clear
//Session Storage 5mb
//all properties are same like local storage 
// Cookies --> same as local storage but it store small data like in Kbs 
// 4kb 
document.cookie="email = Ali@gmail.com"
document.cookie=24;
//--------------------Theme Toggle------------------------
let btn = document.querySelector('#themeBtn');

// Apply theme function
function applyTheme(theme){
    if(theme === 'dark'){
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }else{
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
}

// Detect system theme
function getSystemTheme(){
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// On page load → check localStorage first
let savedTheme = localStorage.getItem("theme");

if(savedTheme){
    applyTheme(savedTheme);
}else{
    applyTheme(getSystemTheme());
}

// Button click toggle
btn.addEventListener('click', function(){
    let currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';

    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(newTheme);

    // Save in localStorage
    localStorage.setItem("theme", newTheme);
});

// Listen for system theme change (only if user hasn't chosen manually)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(){
    if(!localStorage.getItem("theme")){
        applyTheme(getSystemTheme());
    }
});