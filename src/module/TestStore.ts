import {getUser} from "./TestStore2";
import {addUser} from "./TestStore1";


addUser();

// 第一次获取
console.log(getUser())

// 间隔10秒后再获取
setTimeout(() => {
    // { id: '001', name: 'tengri', age: 100 }
    // 这个例子已经说明，TestStore1和TestStore2获取的对象实例实际上市同一个
    console.log(getUser())
}, 10000)
