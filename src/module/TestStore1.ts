import {Store} from "./Store";

const store = Store.getInstance();

const user = {
    id: '001',
    name: 'zap',
    age: 32
};

export const addUser = () => {
    store.setItem('loginUser', user);

    // 间隔五秒后，修改用户信息,再重新更新
    setTimeout(() => {
        user.name = 'tengri';
        user.age = 100;
        store.setItem('loginUser', user);
    }, 5000)
}

