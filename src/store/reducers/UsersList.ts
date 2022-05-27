import { ActionsTypeUsersList, TypesUsersList } from "../../types/reducers/userList"
import { User } from "../../types/user"

interface UsersListStateTypes {
   loading: boolean,
   users: User[],
   error: string | null

}

const initState: UsersListStateTypes = {
   loading: false,
   users: [],
   error: null,
}

const UsersListReducer = (state = initState, action: ActionsTypeUsersList) => {

   switch (action.type) {
      case TypesUsersList.USERS_LIST_CHANGE:
         return { ...state, loading: false, users: action.payload }
      case TypesUsersList.USERS_LIST_LOADING:
         return { ...state, loading: true }
      case TypesUsersList.USERS_LIST_ERROR:
         return { ...state, loading: false, error: action.payload }
      case TypesUsersList.USERS_LIST_ERROR_CLOSE:
         return { ...state, error: null }
      default:
         return { ...state }
   }
}
export default UsersListReducer