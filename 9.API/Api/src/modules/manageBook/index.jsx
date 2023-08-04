import React from "react";
import TableBooks from "./components/TableBooks";
import { useNavigate } from "react-router-dom";
import { routers } from "../../routers/routers";

export default function ManageBook() {
  const navigate = useNavigate();
  const handleAddBook = async () => {
    navigate(routers.web.books.addBooks);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          width: "100%",
          marginBottom: "5px",
          padding: "5px",
          cursor: "pointer",
        }}
      >
        <button
          onClick={handleAddBook}
          style={{ backgroundColor: "#7CFC00", border: "none", padding: "6px" }}
        >
          Add Book
        </button>
      </div>
      <TableBooks></TableBooks>
    </div>
  );
}
