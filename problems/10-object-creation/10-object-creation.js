/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let Jorge = {
    name: 'Jorge',
    age: 16
}

function person(name, age){
    this.name = name;
    this.age = age;
}

class personClass {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(Jorge.name);

let ric = new person('Ric', 21);
console.log(ric.name);

let brenda = new personClass('Brenda', 35);
console.log(brenda.name);
