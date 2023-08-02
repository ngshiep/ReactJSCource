import { useEffect, useState } from "react";
import { postApiServices } from "../posts/services/posts.api";
import styles from "./Posts.module.css";
import { Field, Formik } from "formik";
import postSchema from "./postSchema";
import userHelper from "./utils/user.helper";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [modifyPost, setModifyPost] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const dataPosts = await postApiServices.getAllPosts();
        console.log("🚀 ~ file: index.jsx:16 ~ fetch ~ dataPosts:", dataPosts);
        setPosts(dataPosts);
        const dataUsers = await postApiServices.getAllUsers();
        console.log("🚀 ~ file: index.jsx:17 ~ fetch ~ dataUsers:", dataUsers);
        setUsers(dataUsers);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleSubmit = async (values) => {
    console.log("🚀 ~ file: index.jsx:28 ~ handleSubmit ~ values:", values);
    if (!modifyPost) {
      try {
        const res = await postApiServices.addPost(values);
        console.log("🚀 ~ file: index.jsx:32 ~ handleSubmit ~ res:", res);
        if (res.status === 201) {
          alert("Add post thành công");
          const posts = await postApiServices.getAllPosts();
          setPosts(posts);
        } else {
          alert("Add post thất bại");
        }
      } catch (error) {
        console.log("🚀 ~ file: index.jsx:41 ~ handleSubmit ~ error:", error);
        alert("Add post thất bại");
      }
    } else {
      try {
        const res = await postApiServices.modifyPost(modifyPost.id, values);
        if (res.status === 200) {
          alert("Modify post thành công");
          const posts = await postApiServices.getAllPosts();
          setPosts(posts);
        } else {
          alert("Modify post thất bại");
        }
      } catch (error) {
        alert("Modify post thất bại");
      }
    }
  };

  const handleDelete = async (post) => {
    try {
      const res = await postApiServices.deletePost(post.id);
      if (res.status === 200) {
        alert("Xóa post thành công");
        const posts = await postApiServices.getAllPosts();
        setPosts(posts);
      } else {
        alert("Xóa post thất bại ");
      }
    } catch (error) {
      alert("Xóa post thất bại ");
    }
  };
  const handleModify = (post) => {
    setModifyPost(post);
  };
  return (
    <div>
      <h1>List Posts</h1>
      <Formik
        initialValues={{
          title: modifyPost?.title || "",
          user_id: modifyPost?.user_id || "",
        }}
        enableReinitialize
        validationSchema={postSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <div className={styles.table_container}>
              <table>
                <thead>
                  <th style={{ width: "15%", height: "30px" }}>No</th>
                  <th style={{ width: "45%" }}>Title</th>
                  <th style={{ width: "25%" }}>UserName</th>
                  <th style={{ width: "20%" }}>Actions</th>
                </thead>
                <tbody>
                  {posts.map((post, index) => (
                    <tr key={post.id}>
                      <td>{index + 1}</td>
                      <td>{post.title}</td>
                      <td>
                        {userHelper.findUserNameById(users, post.user_id)}
                      </td>
                      <td className={styles.form_buttons_container}>
                        <button
                          type="button"
                          onClick={(e) => {
                            handleModify(post);
                          }}
                          className={styles.form_button}
                        >
                          Modify
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            handleDelete(post);
                          }}
                          className={styles.form_button}
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "2px solid #206bc4",
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={styles.form_Container}>
                <h3>{modifyPost ? "Modify Post" : "Add New Post"}</h3>
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
                  <Field
                    name="user_id"
                    as="select"
                    className={styles.input_item}
                  >
                    {users.map((user) => {
                      return (
                        <option value={user.id} key={user.id}>
                          {user.name}
                        </option>
                      );
                    })}
                  </Field>
                  {/* <select
                    name="user_id"
                    value={values.user_id || ""}
                    className={styles.input_item}
                    onChange={handleChange}
                  >
                    {users.map((user) => {
                      return (
                        <option value={user.id} key={user.id}>
                          {user.name}
                        </option>
                      );
                    })}
                  </select> */}
                </div>

                <div className={styles.error_wrapper}>
                  {errors.user && (
                    <p className={styles.input_error}>{errors.user}</p>
                  )}
                </div>
                {modifyPost ? (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className={styles.form_button}
                  >
                    Modify
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className={styles.form_button}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
