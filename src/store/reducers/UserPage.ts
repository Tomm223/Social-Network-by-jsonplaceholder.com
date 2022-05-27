import { PostType } from "../../types/post"
import { ActionsTypeUserPage, TypesUserPage } from "../../types/reducers/userPage"
import { User } from "../../types/user"

interface UsersPageStateTypes {
   loading: boolean,
   user: User | null,
   error: string | null,
}

const initState: UsersPageStateTypes = {
   loading: false,
   user: null,
   error: null,
}


const UserPageReducer = (state = initState, action: ActionsTypeUserPage) => {

   switch (action.type) {
      case TypesUserPage.USER_CHANGE:
         return { ...state, loading: false, user: action.payload }
      case TypesUserPage.USER_LOADING:
         return { ...state, loading: true }
      case TypesUserPage.USER_ERROR:
         return { ...state, loading: false, error: action.payload }
      case TypesUserPage.USER_ERROR_CLOSE:
         return { ...state, error: null }
      default:
         return { ...state }
   }
}
export default UserPageReducer