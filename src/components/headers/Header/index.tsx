import { FC, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BurgerProvider, { burgerContext } from '../../../context/burgerContext'
import { useNavigateParams } from '../../../hooks/useNavigateParams'
import { useResponsive } from '../../../hooks/useResponsive'
import { TypesUrlSearchPage } from '../../../types/urlSearch'
import ButtonWhite from '../../UI/btns/BtnWhite'
import Burger from '../Burger'
import Logo from '../Logo'
import Menu from '../Menu'
import Navingation from '../Navigation'
import styles from './index.module.scss'


const Header: FC = () => {

   const { isModal, setIsModal } = useContext(burgerContext)


   const { maxTablet } = useResponsive()

   const navigate = useNavigate()
   return (
      <div className={styles.header}>
         <div className={styles.headerBlock}>
            <div className={styles.headerLogo}>
               <Logo onClick={() => navigate(TypesUrlSearchPage.POSTS)} />
            </div>
            {!maxTablet ?
               <nav className={styles.nav}>
                  <Navingation
                     toPosts={() => navigate(TypesUrlSearchPage.POSTS)}
                     toUsers={() => navigate(TypesUrlSearchPage.USERS)} />
               </nav>
               :
               <div className={styles.headerBurger}>
                  <Burger isOpen={isModal} onClick={() => { setIsModal(!isModal) }} />
               </div>
            }
         </div>
         {
            isModal && maxTablet &&
            <Menu onClose={() => setIsModal(false)}>
               <Navingation
                  toPosts={() => navigate(TypesUrlSearchPage.POSTS)}
                  toUsers={() => navigate(TypesUrlSearchPage.USERS)} />
            </Menu>
         }
      </div>
   )
}

export default Header