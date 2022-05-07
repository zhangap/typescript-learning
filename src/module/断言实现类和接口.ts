
interface People {
    name: string;
    age: number;
    address: string;
    sayHello():void
}

class Student implements People {
    address: string;
    age: number;
    name: string;
    constructor(name:string, age:number, address:string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    sayHello(): void {
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old `)
    }
}

let student = new Student('张三丰', 100, '武当山');
let result = student as People
result.sayHello()

export {}
