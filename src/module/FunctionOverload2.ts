// 函数的重载

// 定义消息类型
type MessageType = 'image' | 'audio' | string;


/**
 * 定义消息实体类型
 */
type Message = {
    id: number,
    type: MessageType,
    content: string
}

let messages:Array<Message> = [
    {id: 1, type: 'image', content: '蒙拉丽莎'},
    {id: 2, type: 'image', content: '清明上河图'},
    {id: 3, type: 'audio', content: '美国之声'},
    {id: 4, type: 'audio', content: '喜马拉雅'},
    {id: 5, type: 'audio', content: '最美中国'},
    {id: 6, type: 'text', content: '五一放假'}
]


// 重载签名
function findMsg(id: number): Message
// 重载签名
function findMsg(type:MessageType, pageSize:number): Array<Message>
/**
 * 实现签名函数
 * @param payload
 * @param pageSize 如果重载签名函数和实现签名函数的参数个数不一致，此时，可以在实现签名函数上给参数加上默认值，可以解决此问题。
 */
function findMsg(payload:any, pageSize: number = 1): Message | Array<Message> | undefined {
    if(typeof payload === 'number') {
        return messages.find(msg => msg.id === payload)
    } else {
        return messages.filter(msg => msg.type === payload).splice(0, pageSize);
    }
}


console.log(findMsg(2).content);

console.log(findMsg('audio', 10))

