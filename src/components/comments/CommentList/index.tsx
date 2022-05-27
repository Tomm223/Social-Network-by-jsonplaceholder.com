import { FC } from 'react'
import { isTemplateExpression } from 'typescript'
import { getUserByEmail } from '../../../assests/fetch'
import { useNavigateParams } from '../../../hooks/useNavigateParams'
import { CommentsType } from '../../../types/comments'
import { LoadingDefault } from '../../UI/Loading'
import CommentItem from '../CommentsItem'
import styles from './index.module.scss'

interface commentsProps {
   comments: CommentsType[],
   isLoading: boolean
}

const CommentList: FC<commentsProps> = ({ comments, isLoading }) => {

   if (isLoading) {
      return <LoadingDefault isLoading={isLoading} />
   }

   return (
      <div className={styles.comments}>
         <div className={styles.commentsTitle}>
            <p className={styles.commentsSupp}>Комментарии</p>
         </div>
         <ul className={styles.commentsList}>
            {
               comments.map((item: CommentsType, i) => {
                  return (
                     <CommentItem
                        key={i}
                        email={item.email}
                        name={item.name}
                        body={item.body}
                     />
                  )
               })
            }
            {!comments.length &&
               <h1>Пока Комментариев нет</h1>
            }
         </ul>

      </div>
   )
}

export default CommentList