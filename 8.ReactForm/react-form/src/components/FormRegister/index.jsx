import React from "react";
import styles from "./FormRegister.module.css";
import { useState } from "react";



export default function FormRegister() {
  const [form, setForm] = useState({});
  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit() {
    const isValid =
      form.username && form.email && form.password && form.confirmPassword;
    alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
  }
  return (
    <div className={styles.form_Container}>
      <h1 className={styles.form_header}>Sign up</h1>
      <form>
        <div className={styles.input_Container}>
          <label className={styles.input_label}>Username : </label>
          <input
            className={styles.input_item}
            name="username"
            value={form.username || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.input_Container}>
          <label className={styles.input_label}>Email : </label>
          <input
            className={styles.input_item}
            name="email"
            value={form.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.input_Container}>
          <label className={styles.input_label}>Password : </label>
          <input
            className={styles.input_item}
            type="password"
            name="password"
            value={form.password || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.input_Container}>
          <label className={styles.input_label}>Confirm password : </label>
          <input
            className={styles.input_item}
            type="password"
            name="confirmPassword"
            value={form.confirmPassword || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleSubmit} className={styles.form_button}>
          Submit
        </button>
      </form>
    </div>
  );
}
