// 函数的重载

// 定义消息类型
import {find} from "./util";

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
function findMsg(type:MessageType): Array<Message>
// 实现签名函数
function findMsg(payload:any): Message | Array<Message> | undefined {
    if(typeof payload === 'number') {
        return messages.find(msg => msg.id === payload)
    } else {
        return messages.filter(msg => msg.type === payload)
    }
}


console.log(findMsg(2).content);

console.log(findMsg('audio'))

