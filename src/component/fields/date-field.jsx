import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useField, ErrorMessage } from 'formik';

const DateField = ({ label, name, setField, ...props }) => {

  return (
    <div className='d-flex align-items-center justify-content-center my-2 '>
      <label className='pr-3' htmlFor={name}>{label}</label>
      <DatePicker name={name}  {...props} selected={props.value} value={props.value} onChange={date => setField(name, date)} />
      <ErrorMessage component={"span"} name={name} className='error' />
    </div>
  )

}

export default DateField
