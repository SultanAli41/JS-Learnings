//loop practice Questions 
// print 1 to 10 using for loop
for(let i=1; i<=10;i++){
    console.log(i);
}
// print from 10-1 using while 
let i = 10;
while(i>=1){
i--;
console.log(i);
}
// print even b/w 1-20 using for
for(let j =1; j<=20; j++){
    if(j%2 === 0){
    console.log(j);}
}
//Q4 print odd from 1-15 using while
let m =1;
while(m<=15){
    if(m%2 === 1){
        console.log(m);
    }
    m++;
}
//Q5 print table of 5 
for (let t = 1; t<=10;t++){
    console.log(`5* ${t} = ${5*t}`);
}
//Q6 Find sum of numbers 1-100 using a loop
let sum = 0;
for(let i= 1;i<=100;i++){
sum = sum + i;
}
    console.log(sum);// we will write outside because if we will write inside of loop then i will repeat like 1+ i then 3 +i and so on
//Q7 Print all number b/w 1-50 that are divisible by 3 ;
for(let n =1 ; n<=50; n++){
if(n%3 === 0){
console.log(n);
}   
}
//Q8 ASk the user for a number and print wheather each number from 1 to that number is even or odd .
//let val = prompt("Give a numer");
/*for (i=1; i<=val;i++){
    if(i%2 === 0)
        {
            console.log(`${i} is even`)

        } 
    else{console.log(`${i} is odd`)} 
}*/

// Q 9 number b/w 1-100 divisible by 3 & 5 ;
let count = 0;
for (let a=1 ; a<=100 ; a++){
    if(a % 3 === 0 && a % 5 === 0){
        console.log(a);
        count ++;
    }
}
console.log(count);
// continue && Break 
//Q1:
for (let i=1; i<=100;i++){
    if (i%7 === 0){
        break;
    }
    console.log(i);
}
// Skip multiple of 3
for(let p=1;p<=20;p++){
    if(p%3 === 0){
      continue;
    }
    console.log(p);
}
// print firts 5 odds from 1-100
let count1 =0;
for(i=1;i<=100;i++){
    if(i%2===1){
    count++;

        console.log(i);
        
    }
    if(count == 5 ) break;
}