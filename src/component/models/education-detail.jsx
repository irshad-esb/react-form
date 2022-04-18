import React from 'react'
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import TextField from '../fields/text-field';
import DropDown from '../fields/dropdown-field'

export const EducationDetailSchema = Yup.object().shape({
  education: Yup.array().of(Yup.object().shape({
    boardName: Yup.string().required("enter the name"),
    passingYear: Yup.string().required("enter the name"),
    percentage: Yup.number().required("enter SSC percentage").max(3, "atmost 3 digit ").min(1, "aleast 1 digit ").typeError("enter number only").max(2022, "enter year less than 2022"),
  }))
})

function EducationDetail({ data, formik }) {

  return (
    <>
      <div className="container">
        <h2 className="text-justify">Education Detail</h2>
        <FieldArray name='education'>
          {
            ({ push, remove }) => (
              <div>
                {
                  formik.values.education.map((edu, index) => (
                    <div key={index} className="form-row d-flex justify-content-around">
                      <DropDown name={`education.${index}.boardName`} label="Board Name " value={["HSC", "SSC", "BE", "MTECH"]} errors={formik.errors} touched={formik.errors} />
                      <TextField name={`education.${index}.passingYear`} label="Passing Year " errors={formik.errors} touched={formik.errors} />
                      <TextField name={`education.${index}.percentage`} label="Percentage " errors={formik.errors} touched={formik.errors} />
                      {
                        index === 0 ? <button type='button' onClick={() => { push({ boardName: "", passingYear: "", percentage: "" }) }}>+</button> : <button type='button' onClick={() => { remove(index) }}>-</button>
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

export default EducationDetail