class person{
#name;

constructor(name,newname){

    this.#name=name

}
getName(){

    return this.#name
}
setName(newname){
if(newname.length>0){

    this.#name=newname
}

}
}
const p =new person("abc")
p.getName()
console.log(p.getName())
p.setName("xyz")
console.log(p.getName())