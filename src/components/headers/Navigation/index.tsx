import { FC, useContext } from 'react'
import { burgerContext } from '../../../context/burgerContext'
import { useResponsive } from '../../../hooks/useResponsive'
import ButtonWhite from '../../UI/btns/BtnWhite'
import styles from './index.module.scss'

interface NavProps {
   toPosts: () => void
   toUsers: () => void
}

const Navingation: FC<NavProps> = ({ toPosts, toUsers }) => {
   const { maxTablet } = useResponsive()

   const { isModal, setIsModal } = useContext(burgerContext)

   return (
      <ul className={styles.navList}>
         <div className={styles.navItem}>
            <ButtonWhite onClick={
               maxTablet ?
                  () => {
                     setIsModal(false)
                     toPosts()
                  }
                  : toPosts}
               style={maxTablet ? { fontSize: '25px', padding: '.5em', } : {}}
            >
               Посты
            </ButtonWhite>
         </div>
         <div className={styles.navItem}>
            <ButtonWhite onClick={maxTablet ?
               () => {
                  setIsModal(false)
                  toUsers()
               }
               : toUsers}
               style={maxTablet ? { fontSize: '25px', padding: '.5em', } : {}}
            >
               Пользователи
            </ButtonWhite>
         </div>
      </ul>
   )
}

export default Navingation