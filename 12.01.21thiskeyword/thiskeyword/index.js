/* function sayMyName(name){
    console.log(`My Name is ${name}`)
}
 */
/* const sayMyName = (name) =>{
    console.log(`My Name is ${name}`);
}
 */
/* console.log(this);
let person = {
    name:'Harry',
    age:25,
    me:{
        newName:'Peter',
        me:{
        whoIsMe: ()=>{
        console.log(this)
        }
    }
}
} */
/* 
let person = {
    name:'Harry',
    age:25,
whiIsMe:function(){
    console.log(this);
}}

person.me.me.whoIsMe(); */

class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    whoIsThis = ()=>{
        console.log(this);
    }
}

let p1 = new Person('Sara',23);
let p2 = new Person('Lana',27);
 p1.whoIsThis()
 p2.whoIsThis()