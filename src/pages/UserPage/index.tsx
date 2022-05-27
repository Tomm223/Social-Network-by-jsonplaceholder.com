import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import UserPageHead from '../../components/users/UserPageHead'
import { useNavigateParams } from '../../hooks/useNavigateParams'
import styles from './index.module.scss'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import UserPagePosts from '../../components/users/UserPagePosts'
import { useAction } from '../../hooks/useAction'
import UserInfoList from '../../components/users/UserInfoList'
import { LoadingDefault } from '../../components/UI/Loading'


const UserPage: FC = () => {
   //user const
   const user = useTypeSelector(state => state.userPage.user)
   const isLoadingUser = useTypeSelector(state => state.userPage.loading)
   //posts const
   const isLoadingPosts = useTypeSelector(state => state.userPagePosts.loading)
   const isShowFullPosts = useTypeSelector(state => state.userPagePosts.isShowFullPosts)
   //getting userID
   const [searchParams, setSearchParams] = useSearchParams()
   const userID = searchParams.get('id')

   const { userPagePostsHideFullPosts, userPagePostsShowFullPosts, userPageChange } = useAction()
   useEffect(() => {
      if (userID) {
         userPageChange(userID)
      }
      // Закрытие полного списка постов юзера
      return () => {
         userPagePostsHideFullPosts()
      }
   }, [userID])



   return (
      <>
         {
            isLoadingUser ?
               <div className='pos-center'>
                  <LoadingDefault isLoading={isLoadingUser} />
               </div>

               :

               <div className={styles.user}>
                  <UserPageHead username={user?.username || ''} />
                  <hr className={styles.userHR} />
                  {
                     user ?
                        <UserInfoList user={user} />
                        :
                        <h3>Данных на пользователя не найдены...</h3>
                  }
                  <hr className={styles.userHR} />
                  <h3 className={styles.userPostsTitle}>Посты</h3>
                  {user && <UserPagePosts userID={user?.id} isLoading={isLoadingPosts} />}
                  {
                     !isShowFullPosts &&
                     <div className={styles.userBtnBlock}>
                        <button
                           onClick={() => userPagePostsShowFullPosts()}
                           className='BtnBlack'
                        >Загрузить ещё</button>
                     </div>
                  }
               </div>
         }
      </>

   )
}

export default UserPage


/*


*/