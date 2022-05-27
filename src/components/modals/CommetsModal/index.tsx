import React, { FC, useRef } from 'react'
import { postComments } from '../../../assests/fetch'
import { buildCommetsToServer } from '../../../assests/forms'
import { CommentsFormState } from '../../../types/forms'
import CommentForm from '../../forms/CommentForm'
import styles from './index.module.scss'

interface CommModal {
   postID: number,
   onClose: () => void
}

const CommentsModal: FC<CommModal> = ({ postID, onClose }) => {

   const backModal = useRef<HTMLDivElement>(null)
   async function handleSubmit(values: CommentsFormState) {
      const comment = buildCommetsToServer(values, postID)
      const resp = await postComments(comment)
      console.log(resp);
      onClose()
   }
   function handleClose(e: React.MouseEvent<HTMLDivElement>) {
      if (backModal.current === e.target) {
         onClose()
      }
   }
   return (
      <div ref={backModal} onClick={handleClose} className={styles.back}>
         <div className={styles.modal}>
            <div className={styles.modalHead}>
               <h3 className={styles.modalTitle}>
                  Оставить комментарий
               </h3>
            </div>
            <CommentForm onSubmit={handleSubmit} />
         </div>
      </div>
   )
}
export default CommentsModal


