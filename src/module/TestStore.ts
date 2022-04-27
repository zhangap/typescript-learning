import {Store} from "./Store";

const store = Store.getInstance();

const user = {
    id: '001',
    name: 'zap',
    age: 32
};

// 设置值
store.setItem('loginUser',user);

console.log(store.getItem('loginUser'));

const store2 = Store.getInstance()
console.log(store.getItem('loginUser'));

