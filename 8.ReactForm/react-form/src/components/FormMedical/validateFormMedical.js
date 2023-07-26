import * as Yup from "yup";

const FormMedicalSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  cmnd: Yup.string().required("Required"),
  dayOfBirth: Yup.string().required("Required"),
  sex: Yup.string().required("Required"),
  nationality: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  team: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  district: Yup.string().required("Required"),
  ward: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string()
    // .matches("/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$", "Invalid email address")
    .email("Invalid email address")
    .required("Required"),
});

export default FormMedicalSchema;
