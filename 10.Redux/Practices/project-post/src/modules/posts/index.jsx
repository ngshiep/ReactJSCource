import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_POST } from "../../redux/action";
import styles from "./Posts.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Posts() {
  const posts = useSelector((state) => state);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_POST, payload: {} });
  }, []);

  const handleAddPost = () => {
    navigation("/add");
  };
  const handleDeletePost = async (id) => {
    navigation("/" + id);
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Post</h1>
          <button
            className={styles.post_action}
            style={{ backgroundColor: "#00BFFF" }}
            onClick={handleAddPost}
          >
            Add Posts
          </button>
        </div>
        {posts.length > 0 &&
          posts.map((post) => (
            <>
              <div className={styles.post_container} key={post.id}>
                <div className={styles.post_content}>
                  <h3 className={styles.post_title}>{post.title}</h3>
                  <p className={styles.post_desc}>{post.body}</p>
                </div>
                <button
                  className={styles.post_action}
                  style={{ backgroundColor: "#71eb77" }}
                  onClick={(e) => handleDeletePost(post.id)}
                >
                  Edit
                </button>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
export default Posts;
