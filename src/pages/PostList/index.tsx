import { FC, useEffect, useState } from "react";
import { handlePostCard } from "../../assests/navigate";
import PostCard from "../../components/posts/PostCard";
import { getPosts } from "../../fetch";
import { useNavigateParams } from "../../hooks/useNavigateParams";
import { CommentsType } from "../../types/comments";
import { PostType } from "../../types/post";
import styles from "./index.module.scss";

interface PostListProps {
   posts: PostType[]
}

const PostList: FC = () => {
   const [list, setList] = useState<PostType[]>([])
   useEffect(() => {
      const getPost = async () => {
         const resp = await getPosts()
         setList(resp)
      }
      getPost()
   }, [])

   //navigate for post to PostPage
   const navigateSearch = useNavigateParams()

   return (
      <div className={styles.posts}>
         <div className={styles.postsHead}>
            <p className={styles.postsTitle}>ПОСТЫ</p>
         </div>
         <hr className='hr' />
         <ul className={styles.postsList}>
            {
               list.map((post: PostType, i) => {
                  return (
                     <div key={i} className={styles.postsBlock}>
                        <PostCard
                           onClick={() => navigateSearch('/posts/', { id: post.id })}
                           post={post} />
                     </div>
                  )
               })
            }
         </ul>
      </div>
   )
}

export default PostList