// //You're using reduce() to calculate the total price.



// sum: the accumulator (starting from 0)

// product: the current item in the cart array

// sum + product.price: adds the current product's price to the total

// It loops through all items:

// Step 1: 0 + 12000 = 12000

// Step 2: 12000 + 2000 = 14000

// Step 3: 14000 + 1500 = 15500

// So total = 15500

// array.reduce((accumulator, currentValue) => {
//   return updatedAccumulator;
// }, initialValue);


const cart = [
  { item: 'Mobile', price: 12000 },
  { item: 'Headphones', price: 2000 },
  { item: 'Charger', price: 1500 }
];

const total = cart.reduce((sum, product) => sum + product.price, 0);

console.log(total)


const str=['rama','sita','laxmana']

const joinstr=str.reduce((acc,str)=>acc+" "+str)
console.log(joinstr)
