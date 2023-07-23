import React from "react";
import styles from "./InputCustom.module.css";
import ErrorCustom from "../ErrorCustom";

// eslint-disable-next-line react/prop-types
export default function InputCustom({
  label,
  name,
  value,
  errors,
  handleChange,
}) {
  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {label}:
      </label>
      <input
        className={styles.input}
        name={name}
        value={value || ""}
        onChange={handleChange}
        id={name}
      />
      <ErrorCustom error={errors[name]}></ErrorCustom>
    </div>
  );
}
