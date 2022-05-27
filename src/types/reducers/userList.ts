import { User } from "../user"

export enum TypesUsersList {
   USERS_LIST_CHANGE = 'USERS/LIST/CHANGE',
   USERS_LIST_LOADING = 'USERS/LIST/LOADING',
   USERS_LIST_ERROR = 'USERS/LIST/ERROR',
   USERS_LIST_ERROR_CLOSE = 'USERS/LIST/ERROR/CLOSE'
}

export interface UsersListChange {
   type: TypesUsersList.USERS_LIST_CHANGE,
   payload: User[],
   timeout?: number
}

export interface UsersListLoading {
   type: TypesUsersList.USERS_LIST_LOADING
}
export interface UsersListErrorClose {
   type: TypesUsersList.USERS_LIST_ERROR_CLOSE,
   timeout: number
}
export interface UsersListError {
   type: TypesUsersList.USERS_LIST_ERROR,
   payload: string,
}

export type ActionsTypeUsersList = UsersListChange | UsersListLoading | UsersListError | UsersListErrorClose
