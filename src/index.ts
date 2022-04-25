import {find} from "./module/util";
import Person from "./module/Person";
import Person2 from "./module/Person2";

/**
 * 入口文件
 */
const count: number = 15;
console.log(`count=${count}`);
console.log(find('test es-module'));


// let person = {
//     name: 'zap',
//     age: 32,
//     address: '湖北秭归'
// };
//
// let person2 = person;
//
// person = {
//     name: 'zhangsan',
//     age: 33,
//     address: 'hello'
// }
//
// console.log(person2, person)


// function showPerson(p:any) {
//     p.name = 'zhangaiping';
//     console.log(p)
// }
// showPerson(person2);
// console.log(person)


let p1 = new Person('张无忌', 30, '冰火岛');
console.log(p1);
console.log(p1.sayHello());
// console.log(p1.saySecret())

let p2 = new Person2('张三丰', 100, '武当山');
console.log(p2.sayHello())
