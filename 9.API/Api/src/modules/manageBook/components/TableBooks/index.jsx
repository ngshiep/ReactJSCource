import React, { useEffect, useState } from "react";
import { manageBookServices } from "../../services/manageBook.api";

export default function TableBooks() {
  const [listBooks, setListBooks] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await manageBookServices.getAllBooks();
        console.log("🚀 ~ file: index.jsx:10 ~ fetch ~ data:", data);
        setListBooks(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleEdit = () => {};
  const handleDelete = async (book) => {
    try {
      const data = await manageBookServices.deleteBooks(book.id);
      console.log("🚀 ~ file: index.jsx:23 ~ handleDelete ~ data:", data);
      if (data.status === 200) {
        const data = await manageBookServices.getAllBooks();
        setListBooks(data);
        alert("xoa book thanh cong");
      } else {
        alert("xoa book that bai");
      }
    } catch (error) {
      alert("xoa book that bai");
    }
  };
  return (
    <div>
      <table>
        <thead style={{ height: "35px" }}>
          <th style={{ width: "50%" }}>Title</th>
          <th style={{ width: "15%" }}>Quantity</th>
          <th style={{ width: "35%" }}>Actions</th>
        </thead>
        <tbody>
          {listBooks &&
            listBooks.length > 0 &&
            listBooks.map((book) => (
              <tr style={{ height: "35px" }} key={book.id}>
                <td>{book.title}</td>
                <td>{book.quantity}</td>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <button
                    style={{
                      padding: "8px",
                      backgroundColor: "blue",
                      color: "white",
                      borderRadius: "4px",
                      border: "none",
                      minWidth: "100px",
                    }}
                    onClick={(e) => handleEdit(book)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      padding: "8px",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "4px",
                      border: "none",
                      minWidth: "100px",
                    }}
                    onClick={(e) => handleDelete(book)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
