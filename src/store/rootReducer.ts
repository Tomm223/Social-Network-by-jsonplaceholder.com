import React from "react"
import { combineReducers } from 'redux'
import PostCommentsReducer from "./reducers/PostCommentsReducer"
import PostPageReducer from "./reducers/PostPageReducer"
import PostsListReducer from "./reducers/PostsListReducer"
import UserPageReducer from "./reducers/UserPage"
import UserPagePostsReducer from "./reducers/UserPagePosts"
import UsersListReducer from "./reducers/UsersList"

export const rootReducer = combineReducers({
   postList: PostsListReducer,
   postPage: PostPageReducer,
   userList: UsersListReducer,
   userPage: UserPageReducer,
   userPagePosts: UserPagePostsReducer,
   postComments: PostCommentsReducer
})

export default rootReducer
export type RootType = ReturnType<typeof rootReducer>
