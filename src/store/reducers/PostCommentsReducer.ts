import { CommentsType } from "../../types/comments"
import { ActionsTypePostComments, TypesPostComments } from "../../types/reducers/postComments"

interface PostCommentsStateTypes {
   loading: boolean,
   comments: CommentsType[],
   error: string | null

}

const initState: PostCommentsStateTypes = {
   loading: false,
   comments: [],
   error: null,
}

const PostCommentsReducer = (state = initState, action: ActionsTypePostComments) => {

   switch (action.type) {
      case TypesPostComments.COMMENTS_CHANGE:
         return { ...state, loading: false, comments: action.payload }
      case TypesPostComments.COMMENTS_LOADING:
         return { ...state, loading: true }
      case TypesPostComments.COMMENTS_ERROR:
         return { ...state, loading: false, error: action.payload }
      case TypesPostComments.COMMENTS_ERROR_CLOSE:
         return { ...state, error: null }
      default:
         return { ...state }
   }
}
export default PostCommentsReducer