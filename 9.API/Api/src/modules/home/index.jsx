import { useNavigate } from "react-router-dom";
import { routers } from "../../routers/routers";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const handleGoPosts = async () => {
    navigate(routers.web.posts);
  };
  const handleGoBooks = async () => {
    navigate(routers.web.books.books);
  };
  return (
    <div className={styles.contianer}>
      <h1 className={styles.header}>Home</h1>
      <button onClick={handleGoPosts} className={styles.button_navigate}>
        Go to Posts
      </button>
      <button onClick={handleGoBooks} className={styles.button_navigate}>
        Go to Books
      </button>
    </div>
  );
}
