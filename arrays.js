//array to store multiple values 
let arr =[2,3,4,5];
arr[2]=12;
console.log(arr);
arr.push(7);// will add at the end - we will also add number in argument 
arr.pop();// will remove value from last 
arr.shift();// remove first value
arr.unshift(12);// add first value - we will also add number in argument
let arr2 = ["Apple","Banana","Dates","Grapes","orange"]
let arr3 = arr2.slice(1,3);
arr2.splice(1,2) // it will remove value from index one and will remove 1 value on that index
arr2.reverse();// will change orignal array and reverse it 
// Sort in array -- this will sort array in assending or in desending order a - b is assending and b - a is desending
let srarr=[80,12,23,34,7,78,53]
let srt = srarr.sort( function(a,b){
return a-b ;
})
//for each 
let arraya =[10,20,30,40,50];
arraya.forEach(function(val){
    console.log(val + 2); 
}) 
// Map , filter and  reduce
// Map - when we have to make new array on the basis of previous array 
// when you see map think about an blank array-when we have a case to make new array from previous array 
let Arrayb=[12,23,43,56,76];
 let newarr=Arrayb.map(
    function(val){
        return 10;// if we not return any thing than it will return undefined 
    }
)
// Example 2:
let Arrayc=[12,9,43,56,76];
 let newarr2=Arrayc.map(
    function(val){
    if(val > 10){
        return val;
    }else{
        return "Lower No";
    }
    
    })
    // Filter-will make new array and copy elements from orignal array on the base of condition
    let arrd=[1,2,3,4,5,6,7,8,9]; 
    let arrda = arrd.filter(
        function(val){
        if(val > 4){
            return true;
        }
        }
    )
// reduce - convert array value in single value
let red =[1,2,3,4,5,6,7,8,9,10];
let reda = red.reduce(
    function(accoumolater,val){
      return accoumolater + val;
    },0
);
// Find -- find first value which stasify our first value  
let arrf=[1,2,3,4,5,6];
let arrfa=arrf.find(
    function(val){
        return val === 1;
    }
)
// some -- will find from array it stasify or not our value and give answer in boolean
let arrs=[20,30,40,90];
let arrsa = arrs.some(
    function(val){
        if(val>80){
            return val;
        }
    }
)
// Every -- check is all values are stasifing or not ? will give answer in boolean
let arre=[10,20,30,40,50];
let arrea =arre.every(
    function(val){
        return val > 15;// if only one is not stasifying it will give false
    }
)
// Array destructuring
let arde=[10,20,30,40,50];
let [a,b,,d]=arde;
// Spread oprater
let array5=[10,20,30,40,50,60];
let array6=[...array5];


