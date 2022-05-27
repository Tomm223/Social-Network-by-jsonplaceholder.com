import { Dispatch } from "react";
import { getPostsAllByUserId, getPostsPreviewByUserId } from "../../assests/fetch";
import {
   ActionsTypeUserPagePosts, TypesUserPagePost, UserPageHideFullPosts,
   UserPagePreviewPostsChange, UserPageShowFullPosts
} from "../../types/reducers/userPagePosts";


export function userPagePostsChange(userID: string | number, limit?: string | number) {
   return async (dispatch: Dispatch<ActionsTypeUserPagePosts>) => {
      try {
         dispatch({
            type: TypesUserPagePost.USER_POSTS_LOADING
         })

         const resp = limit ? await getPostsPreviewByUserId(userID, limit) :
            await getPostsAllByUserId(userID)

         dispatch({
            type: TypesUserPagePost.USER_POSTS_CHANGE,
            payload: resp
         })
      }
      catch {
         dispatch({
            type: TypesUserPagePost.USER_POSTS_ERROR,
            payload: 'При загрузке Постов произошла ошибка',
         })
         dispatch({
            type: TypesUserPagePost.USER_POSTS_ERROR_CLOSE,
            timeout: 4000
         })
      }
   }
}

export function userPagePostsShowFullPosts(): UserPageShowFullPosts {
   return {
      type: TypesUserPagePost.USER_SHOW_FULL_POSTS
   }
}
export function userPagePostsHideFullPosts(): UserPageHideFullPosts {
   return {
      type: TypesUserPagePost.USER_HIDE_FULL_POSTS
   }
}
export function userPagePreviewPostsChange(num: number): UserPagePreviewPostsChange {
   return {
      type: TypesUserPagePost.USER_PREVIEW_POSTS_CHANGE,
      payload: num
   }
}
