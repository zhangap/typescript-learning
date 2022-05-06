function Person() {
    this.favorite = ['book', 'coding','dance'];
}
Person.prototype.showFavorite = function() {
    return `My favorite is ${this.favorite.join(',')}`
}
Person.prototype.sayName = function() {
    return this.name;
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
    // 第一种寄生组合继承，缺点就是构造中间对象，中间对象会开辟一个新的对象空间会把子类原型链上的方法覆盖掉。
    // function F() {
    //     this.value = 'middle-function';
    // }
    // F.prototype = parent.prototype;
    // const middleProto = new F();
    // middleProto.constructor = child;
    // child.prototype = middleProto;

    // 第二种寄生组合继承
    Object.setPrototypeOf(child.prototype, parent.prototype);

}
inherit(Person, Teacher);

// 寄生组合式继承时，子类如果要在原型链上添加方法和属性，一定要要先执行继承的方法，再来添加，否则子类上原型链
// 上的属性和方法将要被覆盖
Teacher.prototype.teach = function() {
    console.log(`I'm a teacher!`)
}


const t1 = new Teacher('t1');
t1.favorite.push('cooking');
// t1 My favorite is book,coding,dance,cooking
// console.log(t1.sayName(), t1.showFavorite())
console.log('t1', t1)

const t2 = new Teacher('t2');
// t2 My favorite is book,coding,dance
// console.log(t2.sayName(), t2.showFavorite())
// console.log('teacher1', t1);
// console.log('t2', t2)
// console.log(t2.teach())
console.log('t2', t2)

console.log(t1.__proto__ === Teacher.prototype)
