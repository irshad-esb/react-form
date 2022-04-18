import React from 'react'
import { Formik, Form, FieldArray } from 'formik'
import * as Yup from "yup";
import TextField from '../fields/text-field';
import DateField from '../fields/date-field';

export const WorkExperienceSchema = Yup.object().shape({
  experience: Yup.array().of(Yup.object().shape({
    CompanyName: Yup.string().required("enter company name"),
    Designation: Yup.string().required("enter designation name"),
    From: Yup.date().required("enter from date"),
    To: Yup.date().default(null)
      .when("From", (From, Yup) => From && Yup.min(From, "End time cannot be before start time")),
  }))
})


const WorkExperience = ({ data, formik }) => {

  return (
    <div className="container">
      <h2 className="text-justify">Work Experience</h2>
      <FieldArray name='experience'>
        {
          ({ push, remove }) => (
            <div>
              {formik.values.experience.map((exp, index) => (
                <div key={index} className="form-row d-flex justify-content-around">
                  <TextField name={`experience.${index}.CompanyName`} label='Company Name' />
                  <TextField name={`experience.${index}.Designation`} label='Designation' />
                  <DateField name={`experience.${index}.From`} label='From' setField={formik.setFieldValue} value={exp.From} />
                  <DateField name={`experience.${index}.To`} label='To' value={exp.To} setField={formik.setFieldValue} />
                  {
                    index === 0 ? <button type='button' onClick={() => { push({ CompanyName: "", Designation: "", From: new Date(), To: new Date() }) }}>+</button> : <button type='button' onClick={() => { remove(index) }}>-</button>
                  }
                </div>
              ))}
            </div>
          )
        }
      </FieldArray>
    </div>
  )
}

export default WorkExperience
