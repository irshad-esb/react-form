import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup";
import TextField from '../fields/text-field'
import DropDown from '../fields/dropdown-field'

export const PreferencesSchema = Yup.object().shape({
  noticePeriod: Yup.number().required("enter notice period").typeError("enter number only").max(20, "too much").min(1, "enter more than 0"),
  expectedCTC: Yup.number().required("enter expected ctc").typeError("enter number only").max(1000000, "too much").min(1, "enter more than 0"),
  currentCTC: Yup.number().required("enter current ctc").typeError("enter number only").max(1000000, "too much").min(1, "enter more than 0"),
  preferedLocation: Yup.string().required("select a preferedLocation"),
  department: Yup.string().required("select a department"),
})

function Preferences({ data, formik }) {

  return (
    <div className="container">
      <h2 className="text-justify">Perferences</h2>
      <Form>
        <div className="form-row d-flex justify-content-around">
          <DropDown name="preferedLocation" label="Prefered Location" value={["rajkot", "ahm", "diu"]} />
          <div>
            <TextField name="noticePeriod" label="Notice Period " />
            <TextField name="expectedCTC" label="Expected CTC " />
            <TextField name="currentCTC" label="current CTC " />
          </div>
          <DropDown name="department" label="Department" value={["web", "android", "ios"]} />
        </div>
      </Form>
    </div>
  )
}

export default Preferences
