import { FC } from 'react'
import Logo from '../Logo'
import Navingation from '../Navigation'
import styles from './index.module.scss'


const Header: FC = () => {

   return (
      <div className={styles.header}>
         <div className={styles.headerBlock}>
            <Logo />

            <nav className={styles.nav}>
               <Navingation />
            </nav>
         </div>
      </div>
   )
}

export default Header