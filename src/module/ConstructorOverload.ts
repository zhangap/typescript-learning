// 构造器的重载（计算矩形的面积）


// 定义一个图形的参数类型
type type_chartParams = {
    width: number,
    height:number,
    radius?: number
}

class Square {

    public width:number;
    public height:number;

    // 构造器重载签名
    constructor(width:number, height:number)
    // 构造器重载签名
    constructor(objParams: type_chartParams)
    // 构造器实现签名
    constructor(widthOrObjParams: any, height?:any) {
        if(typeof widthOrObjParams === 'object') {
            const {width, height} = widthOrObjParams;
            this.width = width;
            this.height = height;
        } else {
            this.width = widthOrObjParams;
            this.height = height;
        }
    }

    // 计算面积的方法
    public calcArea():number {
        return this.width * this.height;
    }
}

let sq1 = new Square(40, 50);
console.log(sq1.calcArea())

const params: type_chartParams = {
    width: 100,
    height:50
}
let sq2 = new Square(params);
console.log(sq2.calcArea())
