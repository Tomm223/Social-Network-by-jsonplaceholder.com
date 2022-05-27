import { FC } from 'react'
import styles from './index.module.scss'

interface btnWhiteProps {
   children: React.ReactNode,
   onClick: () => void
   style?: any
}

const ButtonWhite: FC<btnWhiteProps> = ({ children, onClick, style }) => {

   return (
      <button style={style}
         className={styles.btn} onClick={onClick}>
         {children}
      </button>
   )
}

export default ButtonWhite