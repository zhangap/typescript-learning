// 抽象类
abstract  class People {
    public name!:string;
    constructor(name:string) {
        this.name = name;
    }
    public abstract eat():void;
}

// 抽象类是不能被实例化的，所以这里会报错
// let people = new People();


class Chinese extends People {
    constructor(name: string) {
        super(name);
    }
    eat(): void {
    }

}
