import * as Yup from "yup";

const LibrarySchema = Yup.object().shape({
  title: Yup.string()
    .required("Required"),
  count: Yup.number()
    .required("Required"),
});

export default LibrarySchema;
