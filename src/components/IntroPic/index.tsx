import { isExportDeclaration } from 'typescript'
import styles from './index.module.scss'


const IntroPic = () => {

   return (
      <div className={styles.intro}>
         <img src='/img/6412a54272 1.png' className={styles.introImg} />
         <div className={styles.introBlock}>
            <div className={styles.introItem}>
               <div className={styles.introText}>
                  <p className={styles.introTitle}>Twenty One Pilots</p>
               </div>
               <div className={styles.introGradient}></div>
            </div>
            <div className={styles.introItem}>
               <div className={styles.introText}>
                  <p className={styles.introSupp}>22.02.23 в 21:00</p>
               </div>
               <div className={styles.introGradient}></div>
            </div>
         </div>


      </div>
   )
}

export default IntroPic