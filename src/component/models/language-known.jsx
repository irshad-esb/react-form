import React from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik"
import * as Yup from "yup";
import TextField from '../fields/text-field';
import DropDown from '../fields/dropdown-field';

export const LanguageKnownSchema = Yup.object().shape({
  language: Yup.array().of(Yup.object().shape({
    language: Yup.string().required("required"),
    known: Yup.array().of(Yup.string().oneOf(["read", "write", "speak"], "select atleast one"))
      .min(1, "Must choose at least one option.")
  }))
})


function LanguageKnown({ data, formik }) {

  return (
    <>
      <div className="container">
        <h2 className="text-justify">Language Known</h2>
        <FieldArray name='language'>
          {
            ({ push, remove }) => (
              <div>
                {
                  formik.values.language.map((ref, index) => (
                    <div key={index} className="form-row d-flex justify-content-around">
                      <DropDown name={`language.${index}.language`} label="Language " value={["Himdi", "Laravel", "Node"]} errors={formik.errors} touched={formik.errors} />
                      <label >Read</label>
                      <Field name={`language.${index}.known`} value="Hindi" label="Hindi " type="checkbox" />
                      <label >Write</label>
                      <Field name={`language.${index}.known`} value="Laravel" label="Laravel" type="checkbox" />
                      <label >Speak</label>
                      <Field name={`language.${index}.known`} value="Node" label="Node " type="checkbox" />
                      <ErrorMessage component="div" name={`language.${index}.known`} className={"invalid-feedback d-block"} />
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

export default LanguageKnown