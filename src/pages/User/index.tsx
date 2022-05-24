import { FC } from 'react'
import PostCard from '../../components/posts/PostCard'
import UserInfoList from '../../components/users/UserInfoList'
import UserInfo from '../../components/users/UserInfoList'
import UserPageHead from '../../components/users/UserPageHead'
import { User } from '../../types/user'
import styles from './index.module.scss'


const UserPage: FC = () => {

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

   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]
   return (
      <div className={styles.user}>
         <UserPageHead username={user.username} />
         <hr className={styles.userHR} />
         <UserInfoList user={user} />
         <hr className={styles.userHR} />
         <h3 className={styles.userPostsTitle}>Посты</h3>
         <div className={styles.userPosts}>
            {arr.map((item: number) => {
               return (
                  <PostCard />
               )
            })}
         </div>
      </div>
   )
}

export default UserPage