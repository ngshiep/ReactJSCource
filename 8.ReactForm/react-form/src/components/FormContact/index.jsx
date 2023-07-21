import React from "react";
import styles from "./FormContact.module.css";
import { useState } from "react";
import { Formik } from "formik";

export default function FormContact() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  function handleValidate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(values.email)) {
      errors.email = "Invalid email address";
      console.log("code");
    }
    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.phone) {
      errors.phone = "Required";
    }

    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  }

  function handleSubmit() {
    alert("Thêm liên hệ thành công");
  }

  return (
    <div className={styles.form_Container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <h1 className={styles.form_header}>Sign up</h1>
            <div className={styles.input_Container}>
              <label className={styles.input_label}>Name : </label>
              <input
                className={styles.input_item}
                name="name"
                value={values.name || ""}
                onChange={handleChange}
              />
            </div>
            <div className={styles.error_wrapper}>
              {errors.name && (
                <p className={styles.input_error}>{errors.name}</p>
              )}
            </div>
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
              <label className={styles.input_label}>Phone : </label>
              <input
                className={styles.input_item}
                name="phone"
                value={values.phone || ""}
                onChange={handleChange}
              />
            </div>
            <div className={styles.error_wrapper}>
              {errors.phone && (
                <p className={styles.input_error}>{errors.phone}</p>
              )}
            </div>
            <div className={styles.input_Container}>
              <label className={styles.input_label}>Message : </label>
              <textarea
                className={styles.input_item}
                type="message"
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
