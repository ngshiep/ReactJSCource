import React, { useState } from "react";
import styles from "./AddPost.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { FETCH_POST } from "../../../../redux/action";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setDesc] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleAddPost = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts/";
      const res = await axios.post(url, { title, body });
      if (res.status === 201) {
        dispatch({ type: FETCH_POST, payload: {} });
        navigation("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className={styles.header}>Add Post</h2>
      <div className={styles.post_container}>
        <label className={styles.post_label}>Title</label>
        <input
          className={styles.post_input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label className={styles.post_label}>Content</label>
        <textarea
          className={styles.post_input}
          value={body}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button
          className={styles.post_action}
          style={{ backgroundColor: "#71eb77" }}
          onClick={handleAddPost}
        >
          Add
        </button>
      </div>
    </div>
  );
}
