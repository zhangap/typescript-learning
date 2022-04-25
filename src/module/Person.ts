export default class Person {
    constructor(public name: string, public age: number, public address: string) {
    }

    public sayHello():string  {
        return `hello my name is ${this.name}`
    }

    private saySecret():string {
        return `I'm ${this.age} years old, My house is in ${this.address}`
    }

}



