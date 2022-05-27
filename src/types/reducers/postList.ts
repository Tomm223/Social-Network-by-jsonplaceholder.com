import { PostType } from "../post"

export enum TypesPostsList {
   POSTS_CHANGE = 'POSTS/CHANGE',
   POSTS_LOADING = 'POSTS/LOADING',
   POSTS_ERROR = 'POSTS/ERROR',
   POSTS_ERROR_CLOSE = 'POSTS/ERROR/CLOSE'
}

export interface PostsListChange {
   type: TypesPostsList.POSTS_CHANGE,
   payload: PostType[]
}
export interface PostsListLoading {
   type: TypesPostsList.POSTS_LOADING
}
export interface PostsListErrorClose {
   type: TypesPostsList.POSTS_ERROR_CLOSE,
   timeout: number
}
export interface PostsListError {
   type: TypesPostsList.POSTS_ERROR,
   payload: string,
}

export type ActionsTypePostsList = PostsListChange | PostsListLoading | PostsListError | PostsListErrorClose
