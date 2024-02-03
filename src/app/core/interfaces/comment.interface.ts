import { Reply } from "./reply.interface";

export interface IComment{
    status?:number,
    _id?:string,
    content?:string,
    postId?:string,
    userId?:string,
    replies?:Reply[],
    likes?:number,
}
