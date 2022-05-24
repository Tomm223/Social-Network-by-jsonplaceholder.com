import { FC } from 'react'
import styles from './index.module.scss'


const PostCard: FC = () => {
   return (
      <div className={styles.card}>
         <h3 className={styles.cardTitle}>
            Пост №43
         </h3>
         <hr />
         <p className={styles.cardName}>
            <div className={styles.cardSupp}>Имя поста:</div> <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>
         </p>
         <div className={styles.cardPreview}>
            <p className={styles.cardBody}>ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae</p>
         </div>
      </div>
   )
}

export default PostCard