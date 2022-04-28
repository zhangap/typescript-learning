/**
 *单件设计模式
 * Store:模拟localStorage进行存储
 */
export class Store {

    // 备注：单件设计模式里面有一个饿汉式单件设计模式，也就是在不需要直接去获取实例，在代码加载的时候，就已经new了一个对象实例,如下所示
    // private static store: Store = new Store();

    private static store: Store;
    // public static  id: string = Date.now() + '@' + Math.random()

    //定义私有变量，外部不能直接访问
    private items!: Map<string, object>;
    // 定义私有构造方法，外部不能直接new实例
    private constructor() {
        console.log('构造函数初始化。。。。')
        this.items =new Map();
    }

    public setItem(key:string, value: any):void {
        this.items.set(key, value);
    }

    public getItem(key: string) {
        return this.items.get(key);
    }

    public static  getInstance():Store {
        // console.log('this.store',this.store)
        if(!this.store) {
            this.store = new Store();
        }
        return this.store;
    }

}

