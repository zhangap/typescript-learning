function Person() {
    this.favorite = ['book', 'coding','dance'];
}
Person.prototype.showFavorite = function() {
    return `My favorite is ${this.favorite.join(',')}`
}
Person.prototype.sayName = function() {
    return this.name;
}

Person.staticProp = '这个是静态属性';
Person.staticFn = function() {
    console.log('这个是静态方法');
}

// 基于构造函数的继承
function Teacher(name) {
    Person.call(this);
    this.name = name;
}

/**
 * 备课的方法
 */
Teacher.prototype.prepareLessons = function() {
    console.log('我正在备课')
}

/**
 * 继承
 * @param parent
 * @param child
 */
function inherit(parent, child) {
    Object.setPrototypeOf(child.prototype, parent.prototype);
}
inherit(Person, Teacher);

// 寄生组合式继承时，子类如果要在原型链上添加方法和属性，一定要要先执行继承的方法，再来添加，否则子类上原型链
// 上的属性和方法将要被覆盖
Teacher.prototype.teach = function() {
    console.log(`I'm a teacher!`)
}


const t1 = new Teacher('t1');
console.log(t1)
// 此时打印的是undefined，也就是说寄生组合继承，父类的静态属性和方法是不能被继承到的。
console.log(Teacher.staticFn)
// 解决办法,循环复制
// 方案1
// Object.keys(Person).forEach(key => {
//     Teacher[key] = Person[key]
// })

// 方案2
// for (let key in Person) {
//     if(Person.hasOwnProperty(key)) {
//         Teacher[key] = Person[key]
//     }
// }
// 方案3
// Teacher.__proto__ = Person;

// 方案4
Object.setPrototypeOf(Teacher, Person);

console.log(Teacher.staticFn, Teacher.staticProp)
