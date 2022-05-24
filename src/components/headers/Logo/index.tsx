import { FC } from 'react'
import styles from './index.module.scss'


const Logo: FC = () => {

   return (
      <div className={styles.logo}>
         <p className={styles.logoItem}>
            contect club
         </p>
      </div>
   )
}

export default Logo