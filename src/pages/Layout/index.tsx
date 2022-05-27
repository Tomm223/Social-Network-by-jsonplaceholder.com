import styles from './index.module.scss'
import Header from '../../components/headers/Header'
import PostPage from '../PostPage'
import { Outlet, useLocation } from 'react-router-dom'
import IntroPic from '../../components/IntroPic'
import { TypesUrlSearchPage } from '../../types/urlSearch'
import CommentsModal from '../../components/modals/CommetsModal'
import BurgerProvider from '../../context/burgerContext'


const Layout = () => {

   const location = useLocation()
   const isIntro =
      location.pathname === TypesUrlSearchPage.POSTS ||
      location.pathname === TypesUrlSearchPage.USERS


   return (
      <>
         <BurgerProvider>
            <Header />
         </BurgerProvider>
         <main>
            {
               isIntro &&
               <IntroPic />
            }
            <Outlet />
         </main>
      </>
   )
}

export default Layout