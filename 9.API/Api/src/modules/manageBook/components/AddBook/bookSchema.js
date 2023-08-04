import * as Yup from "yup";

const bookSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  quantity: Yup.number().required("Required"),
});

export default bookSchema;
