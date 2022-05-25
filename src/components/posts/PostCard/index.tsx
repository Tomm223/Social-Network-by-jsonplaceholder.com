import { FC } from 'react'
import { PostType } from '../../../types/post'
import styles from './index.module.scss'

interface PostCardProps {
   post: PostType
   onClick: () => void
}

const PostCard: FC<PostCardProps> = ({ post, onClick }) => {
   return (
      <div onClick={onClick} className={styles.card}>
         <h3 className={styles.cardTitle}>
            Пост №{post.id}
         </h3>
         <hr />
         <p className={styles.cardName}>
            <div className={styles.cardSupp}>Имя поста:</div> <span>{post.title}</span>
         </p>
         <div className={styles.cardPreview}>
            <p className={styles.cardBody}>{post.body}</p>
         </div>
      </div>
   )
}

export default PostCard