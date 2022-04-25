export default class Person2 {
    public name!:string;
    public age!:number;
    public address!:string;

    constructor(name:string, age:number, address:string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    sayHello() {
        return `hello, my name is ${this.name}, I'm ${this.age}`
    }
}
