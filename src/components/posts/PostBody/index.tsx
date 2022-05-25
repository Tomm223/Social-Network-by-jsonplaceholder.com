import { FC } from 'react'
import styles from './index.module.scss'

interface PostBodyProps {
   body: string
}

const PostPageBody: FC<PostBodyProps> = ({ body }) => {

   return (
      <div className={styles.postBody}>
         <p className={styles.postText}>
            {body}{body}{body}{body}{body}.
         </p>
      </div>
   )
}

export default PostPageBody