import { ILikeMessage } from "./like.interface";

export interface IMessage{
    status?:number,
    _id?:string,
    senderId?:string,
    receiverId?:string,
    content?:string,
    likes:ILikeMessage[],
}
