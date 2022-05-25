import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handlePostCard } from '../../assests/navigate'
import PostCard from '../../components/posts/PostCard'
import UserInfoList from '../../components/users/UserInfoList'
import UserInfo from '../../components/users/UserInfoList'
import UserPageHead from '../../components/users/UserPageHead'
import { getPostsByUserId, getPosts } from '../../fetch'
import { useNavigateParams } from '../../hooks/useNavigateParams'
import { PostType } from '../../types/post'
import { User } from '../../types/user'
import styles from './index.module.scss'


const UserPage: FC = () => {

   const [list, setList] = useState<PostType[]>([])
   useEffect(() => {
      const getPost = async () => {
         const resp = await getPostsByUserId(3)
         setList(resp)
      }
      getPost()
   })
   const user: User = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
         street: "Kulas Light",
         suite: "Apt. 556",
         city: "Gwenborough",
         zipcode: "92998-3874",
         geo: {
            lat: "-37.3159",
            lng: "81.1496"
         }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
         name: "Romaguera-Crona",
         catchPhrase: "Multi-layered client-server neural-net",
         bs: "harness real-time e-markets"
      }
   }
   // navigate for post 
   const navigateSearch = useNavigateParams()

   return (
      <div className={styles.user}>
         <UserPageHead username={user.username} />
         <hr className={styles.userHR} />
         <UserInfoList user={user} />
         <hr className={styles.userHR} />
         <h3 className={styles.userPostsTitle}>Посты</h3>
         <div className={styles.userPosts}>
            {list.map((post: PostType) => {
               return (
                  <PostCard
                     onClick={() => navigateSearch('/posts/', { id: post.id })}
                     post={post} />
               )
            })}
         </div>
      </div>
   )
}

export default UserPage