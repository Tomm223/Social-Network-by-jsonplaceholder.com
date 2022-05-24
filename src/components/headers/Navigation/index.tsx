import styles from './index.module.scss'


const Navingation = () => {

   return (
      <ul className={styles.navList}>
         <div className={styles.navItem}>
            <button className={styles.navBtn}>
               Посты
            </button>
         </div>
         <div className={styles.navItem}>
            <button className={styles.navBtn}>
               Пользователи
            </button>
         </div>
      </ul>
   )
}

export default Navingation