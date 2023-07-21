import styles from "./FormMail.module.css";
import { useState } from "react";
import { Formik } from "formik";
import ToEmailSchema from "./validateFormMail";

export default function FormMail() {
  const [file, setFile] = useState(null);

  const handleChangeFile = (event) => {
    setFile(event.currentTarget.files[0]);
  };

  const handleSubmit = () => {
    alert("Gửi mail thành công");
  };
  return (
    <div className={styles.form_Container}>
      <Formik
        initialValues={{
          email: "",
          title: "",
          message: "",
        }}
        validationSchema={ToEmailSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <h1 className={styles.form_header}>Mail</h1>
            <div className={styles.input_Container}>
              <label className={styles.input_label}>Email : </label>
              <input
                className={styles.input_item}
                name="email"
                value={values.email || ""}
                onChange={handleChange}
              />
            </div>

            <div className={styles.error_wrapper}>
              {errors.email && (
                <p className={styles.input_error}>{errors.email}</p>
              )}
            </div>

            <div className={styles.input_Container}>
              <label className={styles.input_label}>Title : </label>
              <input
                className={styles.input_item}
                name="title"
                value={values.title || ""}
                onChange={handleChange}
              />
            </div>

            <div className={styles.error_wrapper}>
              {errors.title && (
                <p className={styles.input_error}>{errors.title}</p>
              )}
            </div>

            <div className={styles.input_Container}>
              <label className={styles.input_label}>Message : </label>
              <textarea
                className={styles.input_textarea}
                type="text"
                name="message"
                value={values.message || ""}
                onChange={handleChange}
              />
            </div>

            <div className={styles.error_wrapper}>
              {errors.message && (
                <p className={styles.input_error}>{errors.message}</p>
              )}
            </div>

            <div className={styles.input_Container}>
              <input
                className={styles.input_textarea}
                type="file"
                onChange={handleChangeFile}
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className={styles.form_button}
            >
              Submit
            </button>
          </>
        )}
      </Formik>
    </div>
  );
}
