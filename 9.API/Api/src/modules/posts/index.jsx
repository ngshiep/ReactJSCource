import { useEffect, useState } from "react";
import { postApiServices } from "../posts/services/posts.api";
import styles from "./Posts.module.css";
import { Formik } from "formik";
import postSchema from "./postSchema";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await postApiServices.getAllPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const handleSubmit = () => {};
  return (
    <div>
      <h1>List Posts</h1>
      <div className={styles.contianer}>
        <table>
          <thead>
            <th style={{ width: "10%" }}>No</th>
            <th style={{ width: "45%" }}>Title</th>
            <th style={{ width: "45%" }}>UserName</th>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{post.user_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Formik
          initialValues={{
            title: "",
            user: "",
          }}
          validationSchema={postSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <>
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
                <label className={styles.input_label}>User : </label>
                <input
                  className={styles.input_item}
                  name="user"
                  value={values.user || ""}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.error_wrapper}>
                {errors.user && (
                  <p className={styles.input_error}>{errors.user}</p>
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
    </div>
  );
}
