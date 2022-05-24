import { InformationEvent } from 'http'
import { FC } from 'react'
import styles from './index.module.scss'

export interface UserInfoItemProps {
   title: string,
   info: infoArrayItem[]
}
interface infoArrayItem {
   name: string,
   value: string
}

const UserInfoItem: FC<UserInfoItemProps> = ({ title, info }) => {
   return (
      <>
         <div className={styles.userInfoList}>
            <h3 className={styles.userInfoTitle}>{title}:</h3>
            {
               info.map((item: infoArrayItem) => {
                  return (
                     <div className={styles.userInfoItem}>
                        <span className={styles.userInfoSupp}>{item.name}:</span>
                        <p className={styles.userInfoText}>{item.value}</p>
                     </div>
                  )
               })
            }


         </div>
      </>


   )
}

export default UserInfoItem