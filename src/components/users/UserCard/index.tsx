import { FC } from 'react'
import styles from './index.module.scss'

const UserCard: FC = () => {

   return (
      <div className={styles.card}>
         <div className={styles.cardHead}>
            <div className={styles.cardAva}>
               <img className={styles.cardAvaImg} src="/img/icons8-person-64.png" alt="" />
            </div>
            <h3 className={styles.cardTitle}>
               Antonette
            </h3>
         </div>
         <div className={styles.cardInfo}>
            <div className={styles.cardInfoItem}>
               <span className={styles.cardSupp}>Имя:</span> <p>Leanne Graham</p>
            </div>
            <div className={styles.cardInfoItem}>
               <span className={styles.cardSupp}>Email:</span> <p>Leanne Graham</p>
            </div>

         </div>
      </div>
   )
}

export default UserCard