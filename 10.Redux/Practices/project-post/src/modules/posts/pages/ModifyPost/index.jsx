import React, { useEffect, useState } from "react";
import styles from "./ModifyPost.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FETCH_POST } from "../../../../redux/action";

export default function ModifyPost() {
  const [title, setTitle] = useState("");
  const [body, setDesc] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/posts/" + id;
        const res = await axios.get(url);
        setTitle(res.data.title);
        setDesc(res.data.body);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  let { id } = useParams();
  const handleModifyPost = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts/" + id;
      const res = await axios.put(url, { title, body });
      if (res.status === 200) {
        dispatch({ type: FETCH_POST, payload: {} });
        navigation("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className={styles.header}>Modify Post</h2>
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
          onClick={handleModifyPost}
        >
          Modify
        </button>
      </div>
    </div>
  );
}
