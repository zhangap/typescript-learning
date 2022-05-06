/**
 * super的使用：
 * 1、子类构造函数中，通过super给父类的构造函数传递参数
 * 2、子类的方法中，通过super.xxx调用父类的某个方法。
 */
class Parent {
    public name!:string;
    public age!:number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    public sayHello() {
        return `hello my name is ${this.name}`
    }
    protected sayAge() {
        return `I'm ${this.age} years old!`
    }
}

class Child extends Parent {
    public address!:string;
    constructor(name: string,age:number, address:string) {
        super(name, age);
        this.address = address;
    }

    /**
     * 介绍自己
     */
    public introMySelf() {
        console.log(this.sayHello() + ';' + super.sayAge() + '！' + this.address)
    }
}


let c1 = new Child('张三丰', 100, '武当山');
c1.introMySelf();








