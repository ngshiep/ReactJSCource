import styles from "./ErrorCustom.module.css";

// eslint-disable-next-line react/prop-types
export default function ErrorCustom({ error }) {
  return (
    <div>
      <div className={styles.error_wrapper}>
        {error && <p className={styles.input_error}>{error}</p>}
      </div>
    </div>
  );
}
