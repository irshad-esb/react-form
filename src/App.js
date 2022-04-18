import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";
import BasicDetail, {
  BasicDetailSchema,
} from "./component/models/basic-detail.component";
import EducationDetail, {
  EducationDetailSchema,
} from "./component/models/education-detail.jsx";
import WorkExperience, {
  WorkExperienceSchema,
} from "./component/models/work-experience.jsx";
import ReferenceContact, {
  ReferenceContactSchema,
} from "./component/models/reference-contact";
import Preferences, { PreferencesSchema } from "./component/models/preferences";
import LanguageKnown, {
  LanguageKnownSchema,
} from "./component/models/language-known";
import Technology, { TechnologySchema } from "./component/models/technology";

export const initialValues = {
  firstName: "",
  lastName: "",
  designation: "",
  email: "",
  phoneNumber: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  relationShipStatus: "",
  zipcode: "",
  dob: new Date(),
  education: [{ boardName: "", passingYear: "", percentage: "" }],
  experience: [
    { CompanyName: "", Designation: "", From: new Date(), To: new Date() },
  ],
  reference: [{ Name: "", ContactNumber: "", Relation: "" }],
  language: [{ language: "", known: [] }],
  technology: [{ name: "", type: [] }],
  preferedLocation: "",
  noticePeriod: "",
  expectedCTC: "",
  currentCTC: "",
  department: "",
};

function App() {
  const [data, setData] = useState(initialValues);
  const [index, setIndex] = useState(0);

  const handleSubmit = (values) => {
    const temp = { ...data, ...values };
    setData((prev) => {
      return { ...prev, ...values };
    });
    if (index == 6) {
      console.log(temp);
      return;
    }
    setIndex(index + 1);
  };

  const prevState = (values) => {
    setData((prev) => {
      return { ...prev, ...values };
    });
    setIndex(index - 1);
  };

  const validationSchema = [
    BasicDetailSchema,
    WorkExperienceSchema,
    TechnologySchema,
    EducationDetailSchema,
    LanguageKnownSchema,
    ReferenceContactSchema,
    PreferencesSchema,
  ];

  function switchComponent(index, formik) {
    switch (index) {
      case 0:
        return <BasicDetail data={data} formik={formik} />;
      case 1:
        return <WorkExperience data={data} formik={formik} />;
      case 2:
        return <Technology data={data} formik={formik} />;
      case 3:
        return <EducationDetail data={data} formik={formik} />;
      case 4:
        return <LanguageKnown data={data} formik={formik} />;
      case 5:
        return <ReferenceContact data={data} formik={formik} />;
      case 6:
        return <Preferences data={data} formik={formik} />;

      default:
        return <BasicDetail data={data} formik={formik} />;
    }
  }

  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        enableReinitialize={true}
        validationSchema={validationSchema[index]}
      >
        {(formik) => {
          return (
            <div className="container ">
              <Form>
                {switchComponent(index, formik)}
                <div className="form-row d-flex justify-content-around">
                  {index ? (
                    <button
                      type="button"
                      onClick={() => prevState(formik.values)}
                    >
                      Prev
                    </button>
                  ) : null}
                  <button type="submit">Next</button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default App;
