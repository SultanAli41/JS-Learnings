
// 
function scrs(...scores){
    let total =0;
    scores.forEach(
        function(val){
            total= total + val
        }
    )
return total;
}
console.log(scrs(10,20,30,40,50))
//--------------
