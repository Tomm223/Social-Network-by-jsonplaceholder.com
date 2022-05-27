import { Dispatch } from "react";
import { getUserById, getUsers } from "../../assests/fetch";
import { ActionsTypeUsersList, TypesUsersList } from "../../types/reducers/userList";


export function usersListChange() {
   return async (dispatch: Dispatch<ActionsTypeUsersList>) => {
      try {
         dispatch({
            type: TypesUsersList.USERS_LIST_LOADING
         })

         const resp = await getUsers()
         dispatch({
            type: TypesUsersList.USERS_LIST_CHANGE,
            payload: resp
         })
      }
      catch {
         dispatch({
            type: TypesUsersList.USERS_LIST_ERROR,
            payload: 'При загрузке Пользователей произошла ошибка',
         })
         dispatch({
            type: TypesUsersList.USERS_LIST_ERROR_CLOSE,
            timeout: 4000
         })
      }
   }
}