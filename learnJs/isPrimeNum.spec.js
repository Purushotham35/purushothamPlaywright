

checkPrime=(num)=>{
let  isPrime=true
if(num===1||num<1)
    return `number is not prime`
else{

    for(let i=2;i<=num/2;i++)
        if(num%i===0)
            isPrime=false
        }
if(isPrime)
    return  `number is prime`
else
return  `number is not prime
`}

console.log(checkPrime(1))