import React from 'react'
import { Formik, Form, FieldArray } from "formik"
import * as Yup from "yup";
import TextField from '../fields/text-field';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const ReferenceContactSchema = Yup.object().shape({
  reference: Yup.array().of(Yup.object().shape({
    Name: Yup.string().required("enter the name"),
    ContactNumber: Yup.string().matches(phoneRegExp, 'Contact number is not valid').max(10, "Contact number must be of 10 digit").min(10, "Phone number must be of 10 digit").required("Phone Number is required "),
    Relation: Yup.string().required("enter the relation"),
  }))
})

function ReferenceContact({ data, formik }) {


  return (
    <>

      <div className="container">
        <h2 className="text-justify">Reference Relation</h2>
        <FieldArray name='reference'>
          {
            ({ push, remove }) => (
              <div>
                {
                  formik.values.reference.map((ref, index) => (
                    <div key={index} className="form-row d-flex justify-content-around">
                      <TextField name={`reference.${index}.Name`} label="Name " />
                      <TextField name={`reference.${index}.ContactNumber`} label="Contact Number " />
                      <TextField name={`reference.${index}.Relation`} label="Relation " />
                      {
                        index === 0 ? <button type='button' onClick={() => { push({ Name: "", ContactNumber: "", Relation: "" }) }}>+</button> : <button type='button' onClick={() => { remove(index) }}>-</button>
                      }
                    </div>
                  ))
                }
              </div>
            )
          }
        </FieldArray>

      </div>
    </>
  )
}

export default ReferenceContact
