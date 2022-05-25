import React, { FC } from 'react'
import styles from './index.module.scss'

interface PostHeadProps {
   username: string,
   postID: number
   onClick: () => void
}

const PostPageHead: FC<PostHeadProps> = ({ username, postID, onClick }) => {

   function handleName(e: React.MouseEvent<HTMLAnchorElement>) {
      e.preventDefault()
      onClick()
   }
   return (
      <div className={styles.postHead}>
         <div className={styles.postHeadItem}>
            <h2 className={styles.postHeadTitle}>Пост №{postID}</h2>
         </div>
         <div className={styles.postHeadSupp}>
            <p>Пост написан пользователем <a onClick={handleName} className={styles.postLink} href="#">{username}</a></p>
         </div>
      </div>
   )
}

export default PostPageHead