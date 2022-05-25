import { FC } from 'react'
import { User } from '../../../types/user'
import styles from './index.module.scss'

interface UserCardProps {
   user: User,
   onClick: () => void
}

const UserCard: FC<UserCardProps> = ({ user, onClick }) => {

   return (
      <div onClick={onClick} className={styles.card}>
         <div className={styles.cardHead}>
            <div className={styles.cardAva}>
               <img className={styles.cardAvaImg} src="/img/icons8-person-64.png" alt="" />
            </div>
            <h3 className={styles.cardTitle}>
               {user.username}
            </h3>
         </div>
         <div className={styles.cardInfo}>
            <div className={styles.cardInfoItem}>
               <span className={styles.cardSupp}>Имя:</span> <p>{user.name}</p>
            </div>
            <div className={styles.cardInfoItem}>
               <span className={styles.cardSupp}>Email:</span> <p>{user.email}</p>
            </div>

         </div>
      </div>
   )
}

export default UserCard