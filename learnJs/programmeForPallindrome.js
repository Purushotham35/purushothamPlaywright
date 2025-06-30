// function isPalindrome(str){
// return str===str.split('').reverse().join('')

// }
// console.log(isPalindrome("madam"));
 function isPalindrome(str){

for(i=0; i<str.length/2; i++){
  if (str[i] !==str[str.lengh-1-i]){
    return false
  }

}

return true
 }
 console.log(isPalindrome("madam"))