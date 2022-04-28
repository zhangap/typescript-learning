import {Store} from "./Store";

const store = Store.getInstance();

//TS中是不允许new 一个非类的, 也不能随便把一个方法当做构造函数来new
// const store2 = new store();
// const store3 = new Store.getInstance();

export const getUser = () => {
    return store.getItem('loginUser');
}

