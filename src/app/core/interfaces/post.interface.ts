import { IComment } from "./comment.interface";
import { ILike } from "./like.interface";
import { IMedia } from "./media.interface";
export interface Post {
    _id?:string;
    userId?:string;
    status?:number;
    content?:string;
    media?:IMedia[];
    mediaType:'image'|'video';
    comments?:IComment[],
    likes?:ILike[]| string[];
    createdAt?:any;
    updatedAt?:any;
    user?:{username:string};
}
