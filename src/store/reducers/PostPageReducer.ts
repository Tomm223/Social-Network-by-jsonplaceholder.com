import { PostType } from "../../types/post"
import { ActionsTypePostPage, TypesPostsPage } from "../../types/reducers/postPage"

interface PostPageStateTypes {
   loading: boolean,
   post: PostType | null,
   username: string | null,
   error: string | null,
   isModal: boolean
}

const initState: PostPageStateTypes = {
   loading: false,
   post: null,
   username: null,
   error: null,
   isModal: false
}

const PostPageReducer = (state = initState, action: ActionsTypePostPage) => {

   switch (action.type) {
      case TypesPostsPage.POST_CHANGE:
         return { ...state, loading: false, post: action.payload }
      case TypesPostsPage.POST_LOADING:
         return { ...state, loading: true }
      case TypesPostsPage.POST_USERNAME_CHANGE:
         return { ...state, username: action.payload }
      case TypesPostsPage.POST_USERNAME_RESET:
         return { ...state, username: null }
      case TypesPostsPage.POST_MODAL_OPEN:
         return { ...state, isModal: true }
      case TypesPostsPage.POST_MODAL_CLOSE:
         return { ...state, isModal: false }
      case TypesPostsPage.POST_ERROR:
         return { ...state, loading: false, error: action.payload }
      case TypesPostsPage.POST_ERROR_CLOSE:
         return { ...state, error: null }
      default:
         return { ...state }
   }
}
export default PostPageReducer