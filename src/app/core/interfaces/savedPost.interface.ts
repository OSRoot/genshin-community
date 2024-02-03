// this interface represents the collection of saved Posts
// you need to change it here to have only the postID as well for the like collection
export interface SavedPost{
    status?:number,
    _id?:string,
    postId:string,
    userId:string,
}
