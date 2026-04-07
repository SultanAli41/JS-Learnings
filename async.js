//Async JS --- Set timeout - set interval - promises -axios - fetch - XMLHTTPSRequest
// Sync -- Simple Code -- Line by line 
// Async Code ka main motive hoota hai jahan humain answer ka idea nhi hota kb response aay ga like facebook sy photo laoo
console.log("Hey");
setTimeout(function print(){
    console.log("Hey2");
},2000)
// ek main stack hai aur ek side stack main stack mai sara sync code aa gaya aur side stack mai async code 
// pehly snc chal jay ga aur side stack mai async chal raha hoo ga jesy hi wo complete hoo ga event loop usy main stack mai ly aay gi
//--------------------Request Send 
// fetch
//axios
//promises
//settimeout
//setinterval
//--------------------Answer by 
//then catch
//callbacks 
//async await

//call back function -- will run after compleition of async code when we have to not run code immediatly 
const ans = fetch("https//www.facebook.com");
console.log(ans);
// Promises -- Three States - Resolve  - Reject - Pending 
let prom = new Promise((res,rej)=>{
    let n = Math.floor(Math.random()*10);
if(n<5){
  res();
}else{
 rej();
}
});
prom.then(
    function(){
        console.log("Below");
    }).catch(
    function(){
       console.log("above");
    }
)
