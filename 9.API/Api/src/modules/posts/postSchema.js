import * as Yup from "yup";

const postSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  user: Yup.string().required("Required"),
});

export default postSchema;
