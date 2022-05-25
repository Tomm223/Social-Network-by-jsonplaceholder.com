import { FC, useEffect, useState } from "react";
import { handlePostCard } from "../../assests/navigate";
import PostCard from "../../components/posts/PostCard";
import UserCard from "../../components/users/UserCard";
import { getPosts, getUsers } from "../../fetch";
import { useNavigateParams } from "../../hooks/useNavigateParams";
import { CommentsType } from "../../types/comments";
import { PostType } from "../../types/post";
import { User } from "../../types/user";
import styles from "./index.module.scss";

interface UsersListProps {
   posts: PostType[]
}

const UsersList: FC = () => {
   const [list, setList] = useState<User[]>([])
   useEffect(() => {
      const getPost = async () => {
         const resp = await getUsers()
         setList(resp)
      }
      getPost()
   }, [])

   //navigate for post to PostPage
   const navigateSearch = useNavigateParams()

   return (
      <div className={styles.posts}>
         <div className={styles.postsHead}>
            <p className={styles.postsTitle}>ПОЛЬЗОВАТЕЛИ</p>
         </div>
         <hr className='hr' />
         <ul className={styles.postsList}>
            {
               list.map((user, i) => {
                  return (
                     <div key={i} className={styles.postsBlock}>
                        <UserCard
                           onClick={() => navigateSearch('/users/', { id: user.id })}
                           user={user} />
                     </div>
                  )
               })
            }
         </ul>
      </div>
   )
}

export default UsersList