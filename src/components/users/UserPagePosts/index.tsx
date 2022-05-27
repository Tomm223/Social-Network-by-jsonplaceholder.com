import { FC, useEffect } from 'react'
import { getPostsAllByUserId, getPostsPreviewByUserId } from '../../../assests/fetch'
import { useAction } from '../../../hooks/useAction'
import { useNavigateParams } from '../../../hooks/useNavigateParams'
import { useTypeSelector } from '../../../hooks/useTypeSelector'
import PostCard from '../../posts/PostCard'
import { LoadingDefault } from '../../UI/Loading'
import styles from './index.module.scss'

interface UserPagePostPRops {
   userID: number | string,
   isLoading: boolean
}

const UserPagePosts: FC<UserPagePostPRops> = ({ userID, isLoading }) => {
   const posts = useTypeSelector(state => state.userPagePosts.posts)
   const previewPostInUserPage = useTypeSelector(state => state.userPagePosts.previewAmountPosts)
   const isShowFullPosts = useTypeSelector(state => state.userPagePosts.isShowFullPosts)
   const navigateSearch = useNavigateParams()
   const { userPagePostsChange, userPagePostsShowFullPosts } = useAction()
   useEffect(() => {
      userPagePostsChange(userID, previewPostInUserPage)
   }, [userID])

   useEffect(() => {
      if (isShowFullPosts) {
         userPagePostsChange(userID)
      }
   }, [isShowFullPosts])


   return (
      <>
         <div className={styles.userPosts}>
            {posts.map((post, i) => {

               return (
                  <PostCard
                     key={i}
                     onClick={() => navigateSearch('/posts/', { id: post.id })}
                     post={post} />
               )
            })}
         </div>
         {
            isLoading &&
            <div className='ds-flex-center'>
               <LoadingDefault isLoading={isLoading} />
            </div>
         }
      </>
   )
}

export default UserPagePosts

