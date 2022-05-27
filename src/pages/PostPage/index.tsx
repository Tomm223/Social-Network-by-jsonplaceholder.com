import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentList from '../../components/comments/CommentList'
import PostPageBody from '../../components/posts/PostBody'
import PostPageHead from '../../components/posts/PostHead'
import PostPageInfo from '../../components/posts/PostInfo'
import { getCommentsByPostId, getPostById, getUserById, getUserByUserName } from '../../assests/fetch'
import { useNavigateParams } from '../../hooks/useNavigateParams'
import { CommentsType } from '../../types/comments'
import { PostType } from '../../types/post'
import { TypesUrlSearchPage } from '../../types/urlSearch'
import styles from './index.module.scss'
import { User } from '../../types/user'
import CommentsModal from '../../components/modals/CommetsModal'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useAction } from '../../hooks/useAction'
import { LoadingDefault } from '../../components/UI/Loading'
import { AlertDefault } from '../../components/UI/Alert'

interface PostProps {
   username: string,
   post: PostType,
   comments: CommentsType[]
}

const PostPage: FC = () => {
   // const data post
   const post = useTypeSelector(state => state.postPage.post)
   const errorPost = useTypeSelector(state => state.postPage.error)
   const isloadingPost = useTypeSelector(state => state.postPage.loading)
   const username = useTypeSelector(state => state.postPage.username)
   // const data comments
   const comments = useTypeSelector(state => state.postComments.comments)
   const errorComments = useTypeSelector(state => state.postComments.error)
   const isLoadingComment = useTypeSelector(state => state.postComments.loading)
   // view effrct
   const isModal = useTypeSelector(state => state.postPage.isModal)
   // geting postID
   const [searchParams, setSearchParams] = useSearchParams()
   const postID = searchParams.get('id')
   // actionCreaters
   const { postCommentsChange, postPageChange, postPageUserNameChange,
      postPageUserNameReset, postPageModalOpen, postPageModalClose
   } = useAction()

   useEffect(() => {
      if (postID) {
         // seting post + comments
         postPageChange(postID)
         postCommentsChange(postID)
      }
   }, [postID])
   useEffect(() => {
      // setting username
      if (post) {
         postPageUserNameChange(post.userId)
      }
      return () => {
         postPageUserNameReset()
      }
   }, [post])

   const navigateSearch = useNavigateParams()
   async function handleUserName() {
      navigateSearch(TypesUrlSearchPage.USER, { id: post?.userId })
   }
   return (
      <>
         {
            isModal && post &&
            <CommentsModal postID={post?.id} onClose={() => postPageModalClose()} />
         }
         <AlertDefault error={errorPost} />
         {
            isloadingPost ?
               <div className='pos-center'>
                  <LoadingDefault isLoading={isloadingPost} />
               </div>

               :
               <div className={styles.post}>
                  {post ?
                     <>
                        <PostPageHead
                           postID={post.id}
                           username={username || ''}
                           key={'head'}
                           onClick={() => handleUserName()}
                        />
                        <hr className='hr' />
                        <PostPageInfo title={post.title} key='info' />
                        <PostPageBody body={post.body} key='body' />
                     </>
                     :
                     <h1>Нет данных...</h1>
                  }
                  <hr className='hr' />
                  <CommentList comments={comments} isLoading={isLoadingComment} />
                  <div className={styles.postBtn}>
                     <button onClick={postPageModalOpen} className={'BtnBlack'}>Оставить Комментарий</button>
                  </div>
               </div>
         }


      </>

   )
}

export default PostPage

