import React, { FC, useRef } from 'react'
import styles from './index.module.scss'

interface MenuProps {
   children: React.ReactNode,
   onClose: () => void
}

const Menu: FC<MenuProps> = ({ children, onClose }) => {
   const back = useRef<HTMLDivElement>(null)
   function handleClose(e: React.MouseEvent<HTMLDivElement>) {
      if (e.target === back.current) {
         onClose()
      }
   }
   return (
      <div ref={back} onClick={handleClose} className={styles.back}>
         <ul className={styles.list}>
            {children}
         </ul>
      </div>
   )
}

export default Menu