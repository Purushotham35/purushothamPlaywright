const arr=[10,5,8,17,20,18,2,45]

let first=-Infinity,second=-Infinity
for(let num of arr){
if(num>first){
    second=first
    first=num
}
else if(num>second && num!==first){
 second=num
}

}
console.log(`second largest:`,second);

let first1=Infinity,second1=Infinity
for(let num of arr){
if(num<first){
    second=first
    first=num
}
else if(num<second && num!==first){
 second=num
}
}


console.log("Second Smallest:", second); // 5



