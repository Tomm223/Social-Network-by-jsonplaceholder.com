import { PostType } from "../../types/post"
import { ActionsTypeUserPagePosts, TypesUserPagePost } from "../../types/reducers/userPagePosts"
import { User } from "../../types/user"

interface UsersPageStateTypes {
   loading: boolean,
   error: string | null,
   posts: PostType[],
   previewAmountPosts: number,
   isShowFullPosts: boolean

}

const initState: UsersPageStateTypes = {
   loading: false,
   posts: [],
   previewAmountPosts: 3,
   isShowFullPosts: false,
   error: null,
}

const UserPagePostsReducer = (state = initState, action: ActionsTypeUserPagePosts) => {

   switch (action.type) {
      case TypesUserPagePost.USER_POSTS_CHANGE:
         return { ...state, loading: false, posts: action.payload }
      case TypesUserPagePost.USER_POSTS_LOADING:
         return { ...state, loading: true }
      case TypesUserPagePost.USER_SHOW_FULL_POSTS:
         return { ...state, isShowFullPosts: true }
      case TypesUserPagePost.USER_HIDE_FULL_POSTS:
         return { ...state, isShowFullPosts: false }
      case TypesUserPagePost.USER_PREVIEW_POSTS_CHANGE:
         return { ...state, previewAmountPosts: action.payload }
      case TypesUserPagePost.USER_POSTS_ERROR:
         return { ...state, loading: false, error: action.payload }
      case TypesUserPagePost.USER_POSTS_ERROR_CLOSE:
         return { ...state, error: null }
      default:
         return { ...state }
   }
}
export default UserPagePostsReducer