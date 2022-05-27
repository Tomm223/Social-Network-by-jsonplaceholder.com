import { FC } from 'react'
import styles from './index.module.scss'

interface BurgerProps {
   onClick: () => void,
   isOpen: boolean
}

const Burger: FC<BurgerProps> = ({ onClick, isOpen }) => {

   return (
      <div onClick={onClick} className={styles.block}>
         <img src={isOpen ? "/img/remove.png" : "/img/add-button.png"} alt="Menu" />
      </div>
   )
}

export default Burger