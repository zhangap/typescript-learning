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

Teacher.prototype = new Person();
// 需要重新设置子类的constructor，Person.prototype = new People()相当于子类的原型对象完全被覆盖了
Teacher.prototype.constructor = Teacher;

const t1 = new Teacher('t1');
t1.favorite.push('cooking');
// t1 My favorite is book,coding,dance,cooking
console.log(t1.sayName(), t1.showFavorite())

const t2 = new Teacher('t2');
// t2 My favorite is book,coding,dance
console.log(t2.sayName(), t2.showFavorite())
