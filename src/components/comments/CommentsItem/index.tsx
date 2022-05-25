import { FC } from 'react'
import styles from './index.module.scss'
import { NavLink } from 'react-router-dom'
interface CommItemProps {
   email: string,
   name: string,
   body: string,
}

const CommentItem: FC<CommItemProps> = ({ email, name, body }) => {

   return (
      <div className={styles.card}>
         <div className={styles.cardTitle}>
            <span className={styles.cardSupp}>Email пользователя:</span>
            <p>{email}</p>
         </div>
         <div className={styles.cardName}>
            <p>{name}</p>
         </div>
         <div className={styles.cardBody}>
            <p className={styles.cardText}>
               {body}
            </p>
         </div>
      </div>
   )
}

export default CommentItem