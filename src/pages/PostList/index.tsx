import { FC, useEffect, useState } from "react";
import PostCard from "../../components/posts/PostCard";
import { getPosts } from "../../assests/fetch";
import { useNavigateParams } from "../../hooks/useNavigateParams";
import { PostType } from "../../types/post";
import styles from "./index.module.scss";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useAction";
import { AlertDefault } from "../../components/UI/Alert";
import { LoadingDefault } from "../../components/UI/Loading";
import { loadavg } from "os";
import Search from "../../components/UI/Search";


const PostList: FC = () => {

   const posts = useTypeSelector(state => state.postList.posts)
   const [postFilt, setPostFilt] = useState<PostType[]>([])
   const isLoading = useTypeSelector(state => state.postList.loading)
   const error = useTypeSelector(state => state.postList.error)

   const { postListChange } = useAction()

   useEffect(() => {
      postListChange()
   }, [])

   //navigate for post to PostPage
   const navigateSearch = useNavigateParams()

   useEffect(() => {
      handleSearch('')
   }, [posts])
   function handleSearch(value: string) {
      if (value.trim()) {
         setPostFilt(posts.filter((item) => item.title.toLowerCase().includes(value.toLowerCase())))
      }
      else {
         setPostFilt(posts)
      }
   }

   return (
      <>
         <AlertDefault error={error} />
         <div className={styles.posts}>
            <div className={styles.postsHead}>
               <p className={styles.postsTitle}>ПОСТЫ</p>
            </div>
            <Search onSubmit={handleSearch} />
            <hr className='hr' />
            {
               isLoading ?
                  <div className="ds-flex-center">
                     <LoadingDefault isLoading={isLoading} />
                  </div>
                  :
                  <ul className={styles.postsList}>
                     {
                        postFilt.length ?
                           postFilt.map((post, i) => {
                              return (
                                 <div key={i} className={styles.postsBlock}>
                                    <PostCard
                                       onClick={() => navigateSearch('/posts/', { id: post.id })}
                                       post={post} />
                                 </div>
                              )
                           })
                           :
                           <h1>Не найдено...</h1>
                     }
                  </ul>
            }
         </div>
      </>
   )
}

export default PostList