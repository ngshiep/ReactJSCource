import * as Yup from "yup";

const ToEmailSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  title: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

export default ToEmailSchema;
