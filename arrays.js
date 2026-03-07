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
//---------------------------------
// Practice Questions 
let fruit =["Apple","Banana","fruit"]
console.log(fruit[1]);
fruit.push("Mango");
fruit.unshift("Pineapple")
//Push vs unshift
//remove last item 
let numbers = [1,2,3,4,5,6,7,8]
numbers.pop();
// add red and blue at index 1 
let colors =["yellow","Green"];
colors.splice(1,0,"red","blue");
// Extract middle 3 elemnts 
let nums=[1,2,3,4,5,6,7,8,9];
let ans = nums.slice(3,6);
// Sort array
let names =["osaf","Razi","ASmar","hakim"]
// Use map to take squre of each number
let squre = [1,2,3,4]
let squrea=squre.map(
    function(val){
      return val * val;
    }
)
//use filter to keep numbers greater than 10 :
let numfil = [10,20,30,40,50];
let numfila = numfil.filter(function(val){
   if(val>10){
    return val ;
   }
})
// Use reduce to find sum of array
let redarr =[1,2,3,4,5,6,7,8];
let redarra =redarr.reduce(
function(acc,val){
   return acc + val ;
},0
)
// use find to get first value less than 10
let find =[12,24,43,4,54];
let finda = find.find(
    function(val){
        if(val<10){
            return val;
        }
    }
) 
// use some to find student under 35 marks 
let marksofstudents =[78,54,24,97,77,76,67]
let ansm =marksofstudents.some(
    function(val){
        if(val<35){
        return val
        }
    }
)
// use every to check all values are even or not 
let everyev = [2,4,6,8,10];
let evev = everyev.every(
    function(val){
    if(val % 2 == 0){
        return val;
    }
    }
)
// Destructure this array to et first and last name 
let Fulname =["Ali","Haider"];
let [firstname,lastname]=Fulname;
// Merge two arrays using spread opraters 
let a1 =[1,2];
let b1 =[3,4];
let c1 =[...a1,...b1];
// clone the array proparly (not by refrence)
let arr =[1,2,3];
let arr12 = [...arr];