import { Dispatch } from "react";
import { getCommentsByPostId } from "../../assests/fetch";
import { ActionsTypePostComments, TypesPostComments } from "../../types/reducers/postComments";



export function postCommentsChange(postId: number | string) {
   return async (dispatch: Dispatch<ActionsTypePostComments>) => {
      try {
         dispatch({
            type: TypesPostComments.COMMENTS_LOADING
         })

         const resp = await getCommentsByPostId(postId)
         dispatch({
            type: TypesPostComments.COMMENTS_CHANGE,
            payload: resp
         })
      }
      catch {
         dispatch({
            type: TypesPostComments.COMMENTS_ERROR,
            payload: 'При загрузке Комментариев произошла ошибка',
         })
         dispatch({
            type: TypesPostComments.COMMENTS_ERROR_CLOSE,
            timeout: 4000
         })
      }
   }
}