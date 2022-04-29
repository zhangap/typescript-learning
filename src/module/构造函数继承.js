function Person() {
    this.name = 'zap';
    this.favorite = ['book', 'coding','dance'];
    this.showFavorite = function() {
        return `My favorite is ${this.favorite.join(',')}`
    }
}

Person.prototype.sayName = function() {
    return this.name;
}

// 基于构造函数的继承
function Teacher() {
    Person.call(this);
}

const t1 = new Teacher();
console.log(t1.name)
// 这里会打印undefined，说明子类没有继承到父类原型链上的sayName方法
console.log(typeof t1.sayName)

const t2 = new Teacher();
console.log(t2.name);
t1.favorite.push('cooking');

// [ 'book', 'coding', 'dance', 'cooking' ] 'My favorite is book,coding,dance,cooking'
console.log(t1.favorite, t1.showFavorite());
// [ 'book', 'coding', 'dance' ] 'My favorite is book,coding,dance'
console.log(t2.favorite,t2.showFavorite())
