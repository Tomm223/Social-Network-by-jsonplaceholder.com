import React from "react";
import * as yup from 'yup'

function checkDef(message) {
   return this.test("isValidCountry", message, function (value) {
      const { path, createError } = this

      if (!value) {
         return createError({ path, message: message ?? 'Поле Обязательно к заполнению' });
      }

      if (value.length < 3) {
         return createError({ path, message: message ?? 'Минимум 3 символа' });
      }

      if (value.length > 40) {
         return createError({ path, message: message ?? 'Максимум 40 символов' })
      }

      return true;
   });
}
yup.addMethod(yup.string, "checkDefMethod", checkDef);

function checkEmail(message) {
   return this.test('isValidateEmail', message, function (value) {
      const { path, createError } = this

      if (value != email) {
         return createError({ path, message: message ?? 'Email не валидный' })
      }
      return true
   })
}
yup.addMethod(yup.string, "checkEmailMethod", checkDef);


const email = /^ [-a - z0 - 9!#$ %& '*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&' * +/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/

export const validationYupCommenting = yup.object().shape({
   name: yup.string().checkDefMethod(),
   email: yup.string().checkEmailMethod().required('Обязательно к заполнению'),
   message: yup.string().max(40).default(10)
})
