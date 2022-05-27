import { FC } from 'react'
import styles from './index.module.scss'

interface LogoProps {
   onClick: () => void
}

const Logo: FC<LogoProps> = ({ onClick }) => {

   return (
      <div onClick={onClick} className={styles.logo}>
         <p className={styles.logoItem}>
            contect club
         </p>
      </div>
   )
}

export default Logo