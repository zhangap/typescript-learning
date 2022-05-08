/**
 * 接受输入方法
 * @param data
 */
// 这个是常规写法
function acceptInput(data: any) {

    if(typeof data === 'string') {
        console.log('输入的输字符串', data.substring(0,10))
    } else if(typeof data === 'function') {
        data();
    }
}

function isString(str: any):boolean {
    return typeof str === 'string';
}

function isFunction(data: any):boolean {
    return typeof data === 'function';
}

// 这个写法很重要
function isNumber(num:any): num is number {
    return typeof num === 'number'
}

function acceptInput2(data: any) {

    if(isString(data)) {
        console.log('输入的输字符串', data.substring(0,10))
    } else if(isFunction(data)) {
        data();
    }
}


