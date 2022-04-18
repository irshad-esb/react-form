import React from 'react';
import { useField, ErrorMessage } from 'formik';

const RadioButton = ({ label, value, ...props }) => {
  const [field, meta, set] = useField(props);
  return (
    <div className='d-flex  align-items-center form-group'>
      <label className='pr-4'>{label}</label>

      {value.map((a, index) => {
        return (
          <div key={index} className='d-flex  align-items-center  form-control'>
            <input type="radio" {...field} value={a} checked={field.value === a} />
            <label htmlFor={field.name}>{a}</label>
            <ErrorMessage component={'span'} name={field.name} className={'invalid-feedback d-block'} />
          </div>
        )
      })}
    </div>
  )
}

export default RadioButton