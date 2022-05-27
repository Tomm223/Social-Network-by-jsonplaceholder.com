import { Dispatch } from "react";
import { getUserById } from "../../assests/fetch";
import { ActionsTypeUserPage, TypesUserPage } from "../../types/reducers/userPage";


export function userPageChange(userId: number | string) {
   return async (dispatch: Dispatch<ActionsTypeUserPage>) => {
      try {
         dispatch({
            type: TypesUserPage.USER_LOADING
         })

         const resp = await getUserById(userId)
         dispatch({
            type: TypesUserPage.USER_CHANGE,
            payload: resp
         })
      }
      catch {
         dispatch({
            type: TypesUserPage.USER_ERROR,
            payload: 'При загрузке Пользователя произошла ошибка',
         })
         dispatch({
            type: TypesUserPage.USER_ERROR_CLOSE,
            timeout: 4000
         })
      }
   }
}

