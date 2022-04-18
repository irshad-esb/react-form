import React from 'react';
import { useField, ErrorMessage } from 'formik';


const TextField = ({ label, errors, touched, ...props }) => {

  const [field, meta] = useField(props)
  return (
    <>
      <div className='d-flex align-items-center justify-content-center my-2 '>
        <label className='pr-3' htmlFor={field.name}>{label}</label>
        <input type="text" autoComplete='off' {...field} {...props} className={`errors.${field.name} && touched.${field.name}` ? "is-invalid" : null} />
        <ErrorMessage component={'span'} name={field.name} className={'invalid-feedback'} />
      </div>
    </>
  )
}

export default TextField