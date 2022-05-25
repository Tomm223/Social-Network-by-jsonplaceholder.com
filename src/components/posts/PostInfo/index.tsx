import { FC } from 'react'
import styles from './index.module.scss'

interface PostInfoProps {
   title: string
}

const PostPageInfo: FC<PostInfoProps> = ({ title }) => {

   return (
      <div className={styles.postInfo}>
         <div className={styles.postInfoItem}>
            <span className={styles.postSupp}>Заголовок:</span>
            <p className={styles.postName}>{title}</p>
         </div>
      </div>
   )
}

export default PostPageInfo