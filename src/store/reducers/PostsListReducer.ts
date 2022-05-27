import { PostType } from "../../types/post"
import { ActionsTypePostsList, TypesPostsList } from "../../types/reducers/postList"

interface PostsListStateTypes {
   loading: boolean,
   posts: PostType[],
   error: string | null

}

const initState: PostsListStateTypes = {
   loading: false,
   posts: [],
   error: null,
}

const PostsListReducer = (state = initState, action: ActionsTypePostsList) => {

   switch (action.type) {
      case TypesPostsList.POSTS_CHANGE:
         return { ...state, loading: false, posts: action.payload }
      case TypesPostsList.POSTS_LOADING:
         return { ...state, loading: true }
      case TypesPostsList.POSTS_ERROR:
         return { ...state, loading: false, error: action.payload }
      case TypesPostsList.POSTS_ERROR_CLOSE:
         return { ...state, error: null }
      default:
         return { ...state }
   }
}
export default PostsListReducer