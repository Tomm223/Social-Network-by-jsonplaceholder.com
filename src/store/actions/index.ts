import * as PostPage from './actionsPostPage'
import * as PostList from './actionsPostsList'
import * as UserList from './actionsUsersList'
import * as UserPage from './actionsUserPage'
import * as UserPagePosts from './actionsUserPagePosts'
import * as PostComm from './actionsPostComments'


export default {
   ...PostPage,
   ...PostList,
   ...UserList,
   ...UserPage,
   ...UserPagePosts,
   ...PostComm
}