import styles from './index.module.scss'
import Header from '../headers/Header'

import UserPage from '../../pages/User'



const Layout = () => {


   return (
      <>
         <Header />

         <main>
            <div className={styles.cont}>
               <UserPage />
            </div>
         </main>
      </>
   )
}

export default Layout