// findLargestNum=(num1,num2,num3)=>{
// if(num1>=num2 && num1>num3)
//     return `${num1}is largest`
// else if(num2>=num1 && num2>num3)
// return `${num2} is largest`
// else return `${num3} is largest`
// }
// console.log(findLargestNum(100,2,3));
 
// const numbers=[1,2,3,5,6,7,8,38,59,58]
// let max=numbers[0]
// for(let i=1;i<numbers.length;i++){
// if(numbers[i]>max){
//     max=numbers[i]
// }

// }
// console.log(max);

const numbers=[1,2,3,5,6,7,8,38,59,58]
let min=numbers[0]
for(let i=1;i<numbers.length;i++){
if(numbers[i]<min){
    min=numbers[i]
}

}
console.log(min);
