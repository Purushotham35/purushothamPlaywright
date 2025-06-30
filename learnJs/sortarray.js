// arr=[2,3,5,8,9,1,7,34,36,47,47] 
// arr1=arr.sort((a,b)=>a-b)
// console.log(arr1)

arr2=["banana","mango","apple","orange","Pineapple"]//first capita letters and after  small letters 

//arr3=arr2.sort()//ascending order will give this method
//console.log(arr3)   //[ 'Pine apple', 'apple', 'banana', 'mango', 'orange' ]

//decending order
arr4= arr2.sort().reverse()
console.log(arr4)   
//(interview quastion)
arr3=[12,14,15,16,18,20,29,26,21,9,8,7]
arr5=arr3.sort((a,b)=>a-b)//ascending order
console.log(arr5) 
arr6=arr3.sort((a,b)=>b-a)//decending order
console.log(arr6) 

//joining elements  in an array bu using the method is- join()-all the elements converts as a string
str=arr3.join(" ")
console.log(str)  //29 26 21 20 18 16 15 14 12 9 8 7

//a method called split() converts the string to an array
str="javascript class"
arr7=str.split("")
console.log(arr7)
 str1="this is javascript class"
arr8=str1.split(" ")

 console.log(arr8)

 //reversed string(interview quastion)

 str2="javascript"

 revstr=str2.split("").reverse().join("")

 console.log(revstr)