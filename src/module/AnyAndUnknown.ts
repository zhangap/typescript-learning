
// 示例1
let x:number = 1;
let y:unknown = x;
let z:any = x;

console.log(x,y,z);

type T = {

}

// 示例2
function getList(array: Array<T>, pageSize:number):Array<T> {
    return array.splice(0, pageSize)

}

function getList2(array: Array<T>, pageSize:any):Array<T> {
    return array.splice(0, pageSize)

}

// 以下代码会报错
// function getList3(array: Array<T>, pageSize:unknown):Array<T> {
//     return array.splice(0, pageSize)
//
// }

// 以下会报错
let str: unknown = 'unknown';
let str2: string = 'hello world';
// str2 = str;


//这里不会报错
let str3:any = 'any';
str2 = str3;


// 结论：unknown只是个top type(顶层类型，任何类型都是他的子类型 sub type), 而any既是top type, 又是 sub type,这就导致了any类型基本放弃了
// 任何类型的检查。使用unknown你还可以继续保证类型安全，使用any就是彻底放弃了类型检查
