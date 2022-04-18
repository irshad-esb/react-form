import React from 'react'
import { useField, ErrorMessage } from 'formik';
// import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from '../fields/text-field';
import RadioButton from '../fields/radiobutton-field'
import DropDown from '../fields/dropdown-field';
import DateField from '../fields/date-field'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


export const BasicDetailSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("FirstName is required ")
    .min(2, "Too Short")
    .max(20, "Too Max"),
  lastName: Yup.string()
    .required("LastName is required ")
    .min(2, "Too Short")
    .max(20, "Too Max"),
  designation: Yup.string()
    .required("Designation is required ")
    .min(2, "Too Short")
    .max(20, "Too Max"),
  address: Yup.string()
    .required("Address is required ")
    .min(2, "Too Short")
    .max(200, "Too Max"),
  email: Yup.string()
    .required("LastName is required ")
    .min(2, "Too Short")
    .max(40, "Too Max")
    .email("Please enter proper email"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "Phone number must be of 10 digit")
    .min(10, "Phone number must be of 10 digit")
    .required("Phone Number is required "),
  city: Yup.string().required("Please Enter City"),
  zipcode: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits"),
  gender: Yup.string().required("select a gender"),
  state: Yup.string().required("select a state"),
  relationShipStatus: Yup.string()
    .required("select a RelationShip Status")
    .min(2, "must select an state"),
  dob: Yup.date().required("please enter the date"),
});

const BasicDetail = ({ data, formik }) => {

  return (
    <>
      <div className="container ">
        <h2 className="text-center" >Basic detail</h2>
        <div className="form-row d-flex  justify-content-between">
          <TextField name="firstName" label="First Name" />
          <TextField name="lastName" label="Last Name" />
        </div>
        <div className="form-row d-flex  justify-content-between">
          <TextField name="designation" label="Designation" />
          <TextField name="address" label="Address " />
        </div>
        <div className="form-row d-flex  justify-content-between">
          <TextField name="email" label="Email" type="email" />
          <DateField name='dob' label="BirthDate"
            setField={formik.setFieldValue} value={formik.values.dob}
          />
        </div>
        <div className="form-row d-flex  justify-content-between">
          <TextField name="phoneNumber" label="Phone Number" />
          <TextField name="city" label="City" />
        </div>
        <div className="form-row d-flex  justify-content-between">
          <RadioButton name="gender" label="Gender" value={["male", "female"]} />
          <DropDown name="state" label="State" value={["guj", "maha", "delhi"]} />
        </div>
        <div className="form-row d-flex  justify-content-between">
          <DropDown name="relationShipStatus" label="RelationShip Status" value={["Single", "Married"]} />
          <TextField name="zipcode" label="Zipcode" />
        </div>
      </div>
    </>
  )
}

export default BasicDetail
