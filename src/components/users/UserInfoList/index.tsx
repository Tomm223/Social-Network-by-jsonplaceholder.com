import { FC } from 'react'
import { User } from '../../../types/user'
import UserInfoItem, { UserInfoItemProps } from '../UserInfoItem'
import styles from './index.module.scss'

interface InfoProps {
   user: User
}

const UserInfoList: FC<InfoProps> = ({ user }) => {

   const list = {
      name: {
         title: "Имя Пользователя",
         info: [
            {
               name: 'ФИО',
               value: user.name
            }
         ]
      } as UserInfoItemProps,
      contacts: {
         title: "Контакты",
         info: [
            {
               name: 'Email',
               value: user.email
            },
            {
               name: 'Телефон',
               value: user.email
            },
            {
               name: 'Веб-сайт',
               value: user.website
            }
         ]
      } as UserInfoItemProps,
      address: {
         title: "Адресс",
         info: [
            {
               name: 'Город',
               value: user.address.city
            },
            {
               name: 'Улица',
               value: user.address.street
            },
            {
               name: 'Квартира',
               value: user.address.suite
            }
         ]
      } as UserInfoItemProps,
      company: {
         title: "Компания",
         info: [
            {
               name: 'Название',
               value: user.company.name
            },
            {
               name: 'Cфера',
               value: user.company.bs
            },
            {
               name: 'Слоган',
               value: user.company.catchPhrase
            }
         ]
      } as UserInfoItemProps,

   }

   return (
      <div className={styles.userInfo}>
         <UserInfoItem title={list.name.title} info={list.name.info} />
         <UserInfoItem title={list.contacts.title} info={list.contacts.info} />
         <UserInfoItem title={list.address.title} info={list.address.info} />
         <UserInfoItem title={list.company.title} info={list.company.info} />
      </div>
   )
}

export default UserInfoList



/*
 <div className={styles.userInfoList}>
            <h3 className={styles.userInfoTitle}>Имя пользователя:</h3>
            <p className={styles.userInfoText}>{user.name}</p>
         </div>
         <div className={styles.userInfoList}>
            <h3 className={styles.userInfoTitle}>Контакты:</h3>
            <div className={styles.userInfoItem}>
               <span className={styles.userInfoSupp}>Email</span>
               <p className={styles.userInfoText}>{user.email}</p>
            </div>
            <div className={styles.userInfoItem}>
               <span className={styles.userInfoSupp}>телефон</span>
               <p className={styles.userInfoText}>{user.phone}</p>
            </div>
            <div className={styles.userInfoItem}>
               <span className={styles.userInfoSupp}>Веб-сайт</span>
               <p className={styles.userInfoText}>{user.website}</p>
            </div>
         </div>
         <div className={styles.userInfoList}>
            <h3 className={styles.userInfoTitle}>Адресс:</h3>
            <div className={styles.userInfoItem}>
               <span className={styles.userInfoSupp}>Город:</span>
               <p className={styles.userInfoText}>{user.address.city}</p>
            </div>
            <div className={styles.userInfoItem}>
               <span className={styles.userInfoSupp}>Улица:</span>
               <p className={styles.userInfoText}>{user.address.street}</p>
            </div>
            <div className={styles.userInfoItem}>
               <span className={styles.userInfoSupp}>Квартира:</span>
               <p className={styles.userInfoText}>{user.address.suite}</p>
            </div>

         </div>
         <div className={styles.userInfoList}>
            <h3 className={styles.userInfoTitle}>Компания:</h3>
            <div className={styles.userInfoItem}>
               <span className={styles.userInfoSupp}>Название:</span>
               <p className={styles.userInfoText}>{user.company.name}</p>
            </div>
            <div className={styles.userInfoItem}>
               <span className={styles.userInfoSupp}>Сфера:</span>
               <p className={styles.userInfoText}>{user.company.bs}</p>
            </div>
            <div className={styles.userInfoItem}>
               <span className={styles.userInfoSupp}>Слоган:</span>
               <p className={styles.userInfoText}>{user.company.catchPhrase}</p>
            </div>

         </div>


*/