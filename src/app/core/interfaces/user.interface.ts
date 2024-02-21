import { IComment } from "./comment.interface";
import { ILikeComment, ILikePost, ILikeReply } from "./like.interface";
import { IMessage } from "./message.interface";
import { Post } from "./post.interface";
import { Reply } from "./reply.interface";
import { SavedPost } from "./savedPost.interface";

export interface IUser{
    status:number,
    _id:string,
    username:string,
    email:string,
    password?:string,
    phone?:string,
    // You may want to add the media in a 1 collection
    picture?:string,
    cover?:string;
    posts:Post[],
    comments?:IComment[],
    replies?:Reply[],
    savedPosts?:SavedPost[],
    likeReplies?:ILikeReply[]
    likePosts?:ILikePost[],
    likeComments?:ILikeComment[],
    messages?:IMessage[],
    Friends?:any[],
    followers?:any[],
    interests?:string[],
};

export interface ISignUp{
    username:string;
    email:string;
    picture:string;
    password:string;
    phone?:string
}
export interface ILogin{
    email:string,
    password:string
}
