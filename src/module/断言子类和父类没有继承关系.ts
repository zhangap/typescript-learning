class People {
    constructor(public name: string, public age: number, public address:string) {
    }
    sayHello() {

    }
}


class Student {
    // 如果name是private和protected时，都会报错
    // protected name!:string;
    // private name!:string;
    public name!:string;
    public age!: number;
    public address!: string;
    public phone!: string;

    constructor(name: string, age: number, address:string, phone: string) {
        this.phone = phone;
    }
    // 如果这里没有sayHello方法，下面的断言 p1 as Student就会报错
    sayHello() {}
    sayAge() {}
}


let p1 = new People('zap', 32, '湖北武汉');
// 当断言的时候，只有两个类是包含和被包含的关系时，才可以进行断言，否则编译不会通过
let result = p1 as Student


export {}
