//filter()=used to filter out the elements in array based on condition .like even num ,odd num,prime 

// //filter even numbers in array
const numbers=[1,2,3,4,5,6,7,8,9,10]

const evenNumbers=numbers.filter(num=>num%2===0)

console.log (evenNumbers)
//=========================================================
const people=[
{name:"ramu",age:19},
{name:"somu",age:20},
{name:"chintu",age:15}
]
const eligibleForVote=people.filter(person=>person.age>18)
console.log(eligibleForVote)

//map()used to trasform each element in the array& return a new array.what ever we gien the condition that will apply for every element in an arry
//for ecample multiply all numbers by 2
const numberss=[2,4,6,8,10]

const multiplyNumbers=numberss.map(num=>num*2)
console.log(multiplyNumbers)

//reduce()=it is used to combine all elements of an array into a single value like total,average,maximum values
// array.reduce((accumulator, currentValue) => {
//   return updatedAccumulator;
// }, initialValue);


//sum of numbers
const digits=[10,20,30,40,50]


const total=digits.reduce((acc,num)=>acc+num,0)
console.log(total)