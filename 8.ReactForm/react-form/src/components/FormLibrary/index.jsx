import { Formik } from "formik";
import styles from "./FormLibrary.module.css";
import { useState } from "react";
import LibrarySchema from "./validateFormLibrary";

export default function FormLibrary() {
  const [books, setBooks] = useState([]);
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleEdit = (book, index, setFieldValue) => {
    setFieldValue("title", book.title);
    setFieldValue("count", book.count);
    setIndexSelected(index);
  };

  const handleDelete = (book) => {
    const newBooks = books.filter((x) => x.title !== book.title);
    setBooks(newBooks);
    setIndexSelected(-1);
  };

  const handleUpdate = (values, handleReset) => {
    console.log(121212);
    const newBooks = [...books];
    newBooks[indexSelected] = values;
    setBooks(newBooks);
    setIndexSelected(-1);
    handleReset();
  };

  const handleSubmit = (values, formikConfig) => {
    setBooks([...books, values]);
    formikConfig.resetForm();
  };
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          title: "",
          count: "",
        }}
        validationSchema={LibrarySchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleReset,
          handleSubmit,
          values,
          errors,
          setFieldValue,
        }) => (
          <>
            <h3>Form Library</h3>
            <label className={styles.label}>Tiêu đề</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={values.title}
              className={styles.input}
            ></input>
            <div className={styles.error_wrapper}>
              {errors.title && (
                <p className={styles.input_error}>{errors.title}</p>
              )}
            </div>
            <label className={styles.label}>Số lương</label>
            <input
              className={styles.input}
              type="text"
              name="count"
              onChange={handleChange}
              value={values.count}
            ></input>
            <div className={styles.error_wrapper}>
              {errors.count && (
                <p className={styles.input_error}>{errors.count}</p>
              )}
            </div>
            {indexSelected === -1 ? (
              <button
                type="button"
                onClick={handleSubmit}
                className={styles.form_button}
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleUpdate(values, handleReset)}
                className={styles.form_button}
              >
                Update
              </button>
            )}

            <table>
              <thead>
                <th>Title</th>
                <th>Number</th>
                <th>Action</th>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={book.title}>
                    <td>{book.title}</td>
                    <td>{book.count}</td>
                    <td>
                      <div className={styles.form_button_container}>
                        <button
                          onClick={() => handleEdit(book, index, setFieldValue)}
                          className={styles.form_button_action}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(book)}
                          className={styles.form_button_action}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </Formik>
    </div>
  );
}
