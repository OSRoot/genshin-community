// this interface represents the collection of saved Posts
// you need to change it here to have only the postID as well for the like collection
export interface ILike{
    status?:number,
    _id?:string,
    userId:string,
    commentId?:string,
    replyId?:string,
    postId?:string
}

export interface ILikePost {
    status?:number,
    _id?:string,
    userId?:string,
    postId?:string
}

export interface ILikeReply {
    status?:number,
    _id?:string,
    userId?:string,
    replyId?:string
}

export interface ILikeComment {
    status?:number,
    _id?:string,
    userId?:string,
    commentId?:string
}
export interface ILikeMessage{
    _id?:string,
    status?:number,
    messageId?:string,
    likerId?:string,
}
