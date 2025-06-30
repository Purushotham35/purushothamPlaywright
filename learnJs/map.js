const numbers=[2,3,4,5,6,7,8]
const multiplyNumbers=numbers.map(num=>num*2)
console.log(multiplyNumbers)

const divideNumbers=numbers.map(num=>num/2)
console.log(divideNumbers)

const names = ['sita','rama'];

const upperNames = names.map(name => name.toUpperCase());

console.log(upperNames)

//map() is used when we want to change each value in array and return new updated values.


const marks = [60, 70, 80]

const updatedMarks = marks.map(m => m + 5)

console.log(updatedMarks)
