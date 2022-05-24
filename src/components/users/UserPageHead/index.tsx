import { FC } from 'react'
import { string } from 'yup'
import styles from './index.module.scss'

interface HeadProps {
   username: string
}

const UserPageHead: FC<HeadProps> = ({ username }) => {

   return (
      <div className={styles.userHead}>
         <div className={styles.userAva}>
            <img className={styles.userAvaImg} src="/img/icons8-person-64.png" alt="" />
         </div>
         <h3 className={styles.userTitle}>
            {username}
         </h3>
      </div>
   )
}

export default UserPageHead