// 继承关系可以互相断言、互相重叠
class People {
    public name!:string;
    public age!:number;
    public address!: string;

    constructor(name:string, age:number, address:string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    study() {

    }
}

class Student extends People {
    constructor(name:string,age:number, address:string, public phone:string) {
        super(name, age, address);
        this.phone = phone;
    }

    study() {
        console.log('study')
    }
}

let people = new People('zap', 32, '湖北武汉');
let result = people as Student;
result.study()


let student = new Student('张三', 15, '湖北秭归', '110');
let result2 = student as People
result2.study()


export {}


