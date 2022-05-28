import React, { FC, useState } from 'react'
import styles from './index.module.scss'

interface SearchProps {
   onSubmit: (value: string) => void
}

const Search: FC<SearchProps> = ({ onSubmit }) => {
   const [value, setValue] = useState('')
   function handle(e: React.FormEvent) {
      e.preventDefault()
      onSubmit(value)
   }
   return (
      <form onSubmit={handle} className={styles.search}>
         <input type="text" className={styles.input} placeholder='Поиск по заголовкам'
            value={value} onChange={(e) => setValue(e.target.value)}
         />
         <button type='submit' aria-label='SearchBtn' className={styles.btn}>
            <img src="/img/search.png" alt="search" />
         </button>
      </form>
   )
}

export default Search