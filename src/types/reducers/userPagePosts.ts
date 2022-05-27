import { PostType } from "../post"

export enum TypesUserPagePost {
   USER_SHOW_FULL_POSTS = "USER/SHOW/FULL/POSTS",
   USER_HIDE_FULL_POSTS = "USER/HIDE/FULL/POSTS",
   USER_PREVIEW_POSTS_CHANGE = "USER/PREVIEW/POSTS/CHANGE",
   USER_POSTS_CHANGE = 'USER/POSTS/CHANGE',
   USER_POSTS_LOADING = 'USER/POSTS/LOADING',
   USER_POSTS_ERROR = 'USER/POSTS/ERROR',
   USER_POSTS_ERROR_CLOSE = 'USER/POSTS/ERROR/CLOSE',
}

export interface UserPagePostChange {
   type: TypesUserPagePost.USER_POSTS_CHANGE,
   payload: PostType[],
   timeout?: number
}
export interface UserPageShowFullPosts {
   type: TypesUserPagePost.USER_SHOW_FULL_POSTS
}
export interface UserPageHideFullPosts {
   type: TypesUserPagePost.USER_HIDE_FULL_POSTS
}
export interface UserPagePostsLoading {
   type: TypesUserPagePost.USER_POSTS_LOADING
}
export interface UserPagePreviewPostsChange {
   type: TypesUserPagePost.USER_PREVIEW_POSTS_CHANGE,
   payload: number
}
export interface UserPagePostsErrorClose {
   type: TypesUserPagePost.USER_POSTS_ERROR_CLOSE,
   timeout: number
}
export interface UserPagePostsError {
   type: TypesUserPagePost.USER_POSTS_ERROR,
   payload: string,
}

export type ActionsTypeUserPagePosts = UserPageShowFullPosts | UserPagePreviewPostsChange |
   UserPagePostsErrorClose | UserPagePostsError | UserPagePostChange | UserPagePostsLoading |
   UserPageHideFullPosts
