// 方法和函数的区别

/**
 * 什么是方法：方法是一种特定场景下的函数，由对象变量【实例变量】直接调用的函数都可以叫做方法。
 * 1、函数内部用this定义的函数是方法。
 * 2、TS类中定义的函数是方法（TS类中定义的方法就是编译后JS底层prototype的一个函数）
 * 3、接口内部定义的函数都是方法。
 * 4、type内部定义的函数都是方法。
 */

type Student = {
    id: number,
    name: string
}


class ArrayList {
    constructor(public elements: Array<Student>) {
    }
    public add(student: Student) {
        this.elements.push(student);
    }
    public show() {
        this.elements.forEach(ele => {
            console.log(ele);
        })
    }
    // 方法的重载
    public remove(index: number):number
    public remove(student: Student): Student
    public remove(value: number | Student):any {
        let result = null;
        this.elements = this.elements.filter((ele,index) => {
            if(typeof value === 'number') {
                if(value === index) {
                    result = index;
                    return false;
                } else {
                    return true;
                }
            } else {
                if(value === ele) {
                    result = value;
                    return false;
                }else {
                    return true;
                }
            }
        })
        return result;
    }
}

let stu1 =  {
    id: 1,
    name: '张三'
};

let stu2 = {
    id: 2,
    name: '李四'
};
let stu3 = {
    id: 3,
    name: '王五'
};

let arr = new ArrayList([stu1, stu2]);
console.log(arr)
arr.add(stu3)
console.log(arr)

let res = arr.remove(1);
console.log(res);
let res2 = arr.remove(stu3);
console.log(res2);
// arr.show()


