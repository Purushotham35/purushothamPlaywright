// class student{
// x=10
// constructor(){

//     console.log("this is a simple method");
    
// }
// add(num1,num2){
//     console.log(num1+num2)

// }


// }
// const obj1=new student()
// obj1.add(10,20)
class person{
constructor(name,age){
this.name=name
this.age=age
}
greet(){
console.log(`hello my  name is ${this.name}`)
}
}

const person1 = new person("purushotham", 25);
person1.greet()