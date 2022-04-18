import React from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik"
import * as Yup from "yup";
import TextField from '../fields/text-field';
import DropDown from '../fields/dropdown-field';
import RadioButton from '../fields/radiobutton-field';


export const TechnologySchema = Yup.object().shape({
  technology: Yup.array().of(Yup.object().shape({
    name: Yup.string().required("required"),
    type: Yup.array().of(Yup.string().oneOf(["Beginner", "Mediator", "Expert"], "select atleast one"))
      .min(1, "Must choose at least one option.").nullable()
  }))
})


function Technology({ data, formik }) {
  let filterValue
  console.log(data)
  for (const key in data.technology) {
    console.log(data.technology[key].name)
    filterValue = data.technology.map(a => console.log(a))
  }

  return (
    <>
      <div className="container">
        <h2 className="text-justify">Technology Known</h2>
        <FieldArray name='technology'>
          {
            ({ push, remove }) => (
              <div>
                {
                  formik.values.technology.map((ref, index) => (

                    <div key={index} className="form-row d-flex justify-content-around">
                      <DropDown name={`technology.${index}.name`} label="Technology " value={["node", "ios", "nest"]} errors={formik.errors} touched={formik.errors} />

                      <RadioButton name={`technology.${index}.type`} value={["Begginer", "Mediator", "Expert"]} />

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

export default Technology