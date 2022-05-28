import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigationType, useSearchParams } from 'react-router-dom'
import { serialize } from 'v8'
import { useNavigateParams } from '../../../hooks/useNavigateParams'
import styles from './index.module.scss'

interface SearchProps {
   onSubmit: (value: string) => void
}

const Search: FC = () => {
   //автонаписание запроса
   const [searchParams, setSearchParams] = useSearchParams()
   const search = searchParams.get('search')
   useEffect(() => {
      if (search?.trim()) {
         setValue(search)
      }
   }, [search])
   // часть отправления на урд запросы
   const [value, setValue] = useState('')
   const navigateSearch = useNavigateParams()
   const location = useLocation()
   function handle(e: React.FormEvent) {
      e.preventDefault()
      navigateSearch(location.pathname, { search: value })
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


/*

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

*/