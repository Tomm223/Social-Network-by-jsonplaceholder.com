import { User } from "../user"

export enum TypesUserPage {
   USER_CHANGE = 'USER/CHANGE',
   USER_LOADING = 'USER/LOADING',
   USER_ERROR = 'USER/ERROR',
   USER_ERROR_CLOSE = 'USER/ERROR/CLOSE',
}

export interface UserPageChange {
   type: TypesUserPage.USER_CHANGE,
   payload: User
   timeout?: number
}
export interface UserPageLoading {
   type: TypesUserPage.USER_LOADING
}
export interface UserPageErrorClose {
   type: TypesUserPage.USER_ERROR_CLOSE,
   timeout: number
}
export interface UserPageError {
   type: TypesUserPage.USER_ERROR,
   payload: string,
}

export type ActionsTypeUserPage = UserPageChange | UserPageLoading |
   UserPageError | UserPageErrorClose
