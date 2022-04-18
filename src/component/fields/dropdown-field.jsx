import React from 'react'
import { useField, ErrorMessage } from 'formik';

const DropDown = ({ label, value, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label className='pr-3' htmlFor={field.name}>{label}</label>

      <select name={field.name}   {...field} {...props} >
        <option value=''>select </option>
        {
          value.map((a, index) => (
            <option key={index} value={a}>{a}</option>
          ))
        }
      </select>
      <ErrorMessage component={'span'} name={field.name} className={'invalid-feedback d-block'} />
    </div>
  )
}

export default DropDown
