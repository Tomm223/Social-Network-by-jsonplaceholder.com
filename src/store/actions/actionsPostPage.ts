import { Dispatch } from "react";
import { getPostById, getUserById } from "../../assests/fetch";
import {
   ActionsTypePostPage, PostPageModalClose, PostPageModalOpen,
   PostPageUserNameChange, PostPageUserNameReset, TypesPostsPage
} from "../../types/reducers/postPage";;


export function postPageChange(postId: | string) {
   return async (dispatch: Dispatch<ActionsTypePostPage>) => {
      try {
         dispatch({
            type: TypesPostsPage.POST_LOADING
         })

         const resp = await getPostById(postId)
         dispatch({
            type: TypesPostsPage.POST_CHANGE,
            payload: resp
         })
      }
      catch {
         dispatch({
            type: TypesPostsPage.POST_ERROR,
            payload: 'При загрузке Поста произошла ошибка',
         })
         dispatch({
            type: TypesPostsPage.POST_ERROR_CLOSE,
            timeout: 4000
         })
      }
   }
}
export function postPageUserNameChange(userId: number | string) {
   return async (dispatch: Dispatch<ActionsTypePostPage>) => {
      try {
         const resp = await getUserById(userId)
         dispatch({
            type: TypesPostsPage.POST_USERNAME_CHANGE,
            payload: resp.name
         })
      }
      catch {
         dispatch({
            type: TypesPostsPage.POST_ERROR,
            payload: 'При загрузки данных о пользователе произошла ошибка'
         })
         dispatch({
            type: TypesPostsPage.POST_ERROR_CLOSE,
            timeout: 4000
         })
      }


   }
}
export function postPageUserNameReset(): PostPageUserNameReset {
   return {
      type: TypesPostsPage.POST_USERNAME_RESET
   }
}
export function postPageModalOpen(): PostPageModalOpen {
   return {
      type: TypesPostsPage.POST_MODAL_OPEN
   }
}
export function postPageModalClose(): PostPageModalClose {
   return {
      type: TypesPostsPage.POST_MODAL_CLOSE
   }
}