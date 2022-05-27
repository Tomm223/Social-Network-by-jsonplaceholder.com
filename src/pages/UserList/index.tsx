import { FC, useEffect, useReducer, useState } from "react";
import UserCard from "../../components/users/UserCard";
import { useNavigateParams } from "../../hooks/useNavigateParams";
import styles from "./index.module.scss";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useAction";
import { LoadingDefault } from "../../components/UI/Loading";
import { AlertDefault } from "../../components/UI/Alert";
import { useResponsive } from "../../hooks/useResponsive";



const UsersList: FC = () => {

   const users = useTypeSelector(state => state.userList.users)
   const isLoading = useTypeSelector(state => state.userList.loading)
   const error = useTypeSelector(state => state.userList.error)
   const { usersListChange } = useAction()
   useEffect(() => {
      usersListChange()
   }, [])

   //navigate for post to PostPage
   const navigateSearch = useNavigateParams()

   return (
      <>
         <AlertDefault error={error} />
         <div className={styles.posts}>
            <div className={styles.postsHead}>
               <p className={styles.postsTitle}>ПОЛЬЗОВАТЕЛИ</p>
            </div>
            <hr className='hr' />
            {
               isLoading ?
                  <div className="ds-flex-center">
                     <LoadingDefault isLoading={isLoading} />
                  </div>
                  :
                  <ul className={styles.postsList}>
                     {
                        users.map((user, i) => {
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
            }


         </div>
      </>
   )
}

export default UsersList

/*
 

*/