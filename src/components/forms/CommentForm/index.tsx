import styles from './index.module.scss'
import { Formik } from 'formik'
import { validationYupCommenting } from '../validate'
import { FC } from 'react'
import { CommentsFormState } from '../../../types/forms'

interface CommFormProps {
   onSubmit: (values: CommentsFormState) => void
}

const CommentForm: FC<CommFormProps> = ({ onSubmit }) => {

   const state: CommentsFormState = {
      name: '',
      email: '',
      message: ''
   }
   return (
      <Formik
         initialValues={state}
         validationSchema={validationYupCommenting}
         validateOnBlur
         onSubmit={onSubmit}

      >
         {({ values, errors, touched, isValid, handleBlur, handleChange, handleSubmit, dirty }) => (
            <form onSubmit={handleSubmit}>
               <div className={styles.formBlock}>
                  <input className={styles.formInput} type='email' name='email' onChange={handleChange}
                     onBlur={handleBlur} value={values.email} placeholder='Email' />
                  {touched.email && errors.email &&
                     <p className={styles.formError}>{errors.name}</p>
                  }
               </div>
               <div className={styles.formBlock}>
                  <input className={styles.formInput} type='text' name='name' onChange={handleChange}
                     onBlur={handleBlur} value={values.name} placeholder='Имя' />
                  {touched.name && errors.name &&
                     <p className={styles.formError}>{errors.name}</p>
                  }
               </div>
               <div className={styles.formBlock}>
                  <textarea className={styles.formTextArea} name='message' onChange={handleChange}
                     onBlur={handleBlur} value={values.message} placeholder='Комментарий' />
                  {touched.message && errors.message &&
                     <p className={styles.formError}>{errors.message}</p>
                  }
               </div>
               <div className={styles.formBtnBlock}>
                  <button type='submit' className='BtnBlack' disabled={!isValid || !dirty}>Отправить</button>
               </div>
            </form>
         )}

      </Formik>
   )
}

export default CommentForm