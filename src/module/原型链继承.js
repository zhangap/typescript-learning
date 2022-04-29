function Person() {
    this.name = 'zap';
    this.favorite = ['book', 'coding','dance'];
}

Person.prototype.sayName = function() {
    return this.name;
}

function Teacher() {

}

Teacher.prototype = new Person();

const t1 = new Teacher();
console.log(t1.sayName(), t1.favorite);

const t2 = new Teacher();
console.log(t2.sayName(), t2.favorite);
// 这个时候更改p1的favorite，会对p2的favorite造成影响
t2.favorite.push('cooking');
console.log(t1.favorite, t2.favorite)

// 问题：父类构造函数中的引用类型（对象、数组）,会被所有的子实例共享，数据不能进行隔离。
