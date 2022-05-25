import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentList from '../../components/comments/CommentList'
import PostPageBody from '../../components/posts/PostBody'
import PostPageHead from '../../components/posts/PostHead'
import PostPageInfo from '../../components/posts/PostInfo'
import { getPostById, getUserByUserName } from '../../fetch'
import { useNavigateParams } from '../../hooks/useNavigateParams'
import { CommentsType } from '../../types/comments'
import { PostType } from '../../types/post'
import { TypesUrlSearchPage } from '../../types/urlSearch'
import styles from './index.module.scss'

interface PostProps {
   username: string,
   post: PostType,
   comments: CommentsType[]
}

const PostPage: FC = () => {

   const [post, setPost] = useState<PostType>()

   const [searchParams, setSearchParams] = useSearchParams()
   const postID = searchParams.get('id')

   useEffect(() => {
      const getPost = async () => {
         if (postID?.length) {
            const resp = await getPostById(postID)
            setPost(resp)
         }
      }
      getPost()
   }, [postID])
   useEffect(() => {
      console.log("PostByID: ", post);


   }, [post])

   const username = 'Antonette'

   const comment = {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
   }
   const comments = [comment, comment, comment]

   const navigateSearch = useNavigateParams()
   async function handleUserName() {
      const resp = await getUserByUserName(username)
      navigateSearch(TypesUrlSearchPage.USER, { id: resp.id })
   }
   return (
      <>
         {
            post ?
               <div className={styles.post}>
                  <PostPageHead
                     postID={post.id}
                     username={username}
                     key={'head'}
                     onClick={() => handleUserName()}
                  />
                  <hr className='hr' />
                  <PostPageInfo title={post.title} key='info' />
                  <PostPageBody body={post.body} key='body' />
                  <hr className='hr' />
                  <CommentList comments={comments} />
               </div>
               :
               <h1>Нет данных...</h1>
         }
      </>

   )
}

export default PostPage