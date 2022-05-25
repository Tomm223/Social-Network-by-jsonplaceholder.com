import styles from './index.module.scss'
import Header from '../../components/headers/Header'
import PostPage from '../PostPage'
import { Outlet, useLocation } from 'react-router-dom'
import IntroPic from '../../components/IntroPic'
import { TypesUrlSearchPage } from '../../types/urlSearch'


const Layout = () => {

   const location = useLocation()
   const isIntro =
      location.pathname === TypesUrlSearchPage.POSTS ||
      location.pathname === TypesUrlSearchPage.USERS


   return (
      <>
         <Header />
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