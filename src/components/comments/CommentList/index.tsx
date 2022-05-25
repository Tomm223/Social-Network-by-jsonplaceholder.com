import { FC } from 'react'
import { isTemplateExpression } from 'typescript'
import { getUserByEmail } from '../../../fetch'
import { useNavigateParams } from '../../../hooks/useNavigateParams'
import { CommentsType } from '../../../types/comments'
import CommentItem from '../CommentsItem'
import styles from './index.module.scss'

interface commentsProps {
   comments: CommentsType[]
}

const CommentList: FC<commentsProps> = ({ comments }) => {


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
         </ul>
         <div className={styles.commentsBtn}>
            <button className={'BtnBlack'}>Оставить Комментарий</button>
         </div>
      </div>
   )
}

export default CommentList