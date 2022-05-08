const objId = Symbol('objId');

let obj = {
    [objId]: 100,
    name: 'test'
}
console.log(obj[objId])


function add(num1: string | number, num2: string|number):number {
    return num1 as any + num2 as any;
}

console.log(add(1,2))
