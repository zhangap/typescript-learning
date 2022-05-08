
let arr = [1,3,2];
let obj = {};
// 1、typeof不能判断复杂类型，下面两个打印的都是object
console.log(typeof obj)
console.log(typeof arr)
// 替代方案 Object.protototype.toString.call()

// [object Array]
console.log(Object.prototype.toString.call(arr))
// [object Object]
console.log(Object.prototype.toString.call(obj))


class People {
    constructor(public name: string, public age:number) {
    }
}

class Teacher extends People {
    constructor(name:string, age: number) {
        super(name, age);
    }
}

let p1 = new People('张三', 100)
// [object Object]  Object.prototype.toString.call 没有办法判断自定义函数和自定义类，解决办法就是用instanceof
console.log(Object.prototype.toString.call(p1))
// instanceof帮助我们准确的判断一种自定义函数或类创建的对象实例, instanceof会沿着原型链一直往上找原型对象空间，直到找到object
// true
console.log(p1 instanceof People)
console.log(p1 instanceof Object)
console.log('--------------------------------------------------)')
const teacher = new Teacher('张三', 20);
console.log(teacher instanceof Teacher);
console.log(teacher instanceof People);
console.log(teacher instanceof Object);




export {}
