import { CommentsType } from "../comments"

export enum TypesPostComments {
   COMMENTS_CHANGE = 'COMMENTS/CHANGE',
   COMMENTS_LOADING = 'COMMENTS/LOADING',
   COMMENTS_ERROR = 'COMMENTS/ERROR',
   COMMENTS_ERROR_CLOSE = 'COMMENTS/ERROR/CLOSE',
}

export interface PostCommentsChange {
   type: TypesPostComments.COMMENTS_CHANGE,
   payload: CommentsType[]
}
export interface PostCommentsLoading {
   type: TypesPostComments.COMMENTS_LOADING
}
export interface PostCommentsError {
   type: TypesPostComments.COMMENTS_ERROR,
   payload: string
}
export interface PostCommentsErrorClose {
   type: TypesPostComments.COMMENTS_ERROR_CLOSE,
   timeout: number
}

export type ActionsTypePostComments = PostCommentsChange | PostCommentsLoading |
   PostCommentsError | PostCommentsErrorClose
