import { Dispatch } from "react";
import { getPosts } from "../../assests/fetch";
import { ActionsTypePostsList, TypesPostsList } from "../../types/reducers/postList";


export function postListChange() {
   return async (dispatch: Dispatch<ActionsTypePostsList>) => {
      try {
         dispatch({
            type: TypesPostsList.POSTS_LOADING
         })

         const resp = await getPosts()
         dispatch({
            type: TypesPostsList.POSTS_CHANGE,
            payload: resp
         })
      }
      catch {
         dispatch({
            type: TypesPostsList.POSTS_ERROR,
            payload: 'При загрузке Постов произошла ошибка',
         })
         dispatch({
            type: TypesPostsList.POSTS_ERROR_CLOSE,
            timeout: 4000
         })
      }
   }
}