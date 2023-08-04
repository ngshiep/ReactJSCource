import { Field, Formik, Form } from "formik";
import React from "react";
import bookSchema from "./bookSchema";
import { manageBookServices } from "../../services/manageBook.api";
import { useNavigate } from "react-router-dom";
import { routers } from "../../../../routers/routers";

export default function AddBook() {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const data = await manageBookServices.addBooks(values);
      console.log("🚀 ~ file: index.jsx:23 ~ handleDelete ~ data:", data);
      if (data.status === 201) {
        navigate(routers.web.books.books);
      } else {
        alert("xoa book that bai");
      }
    } catch (error) {
      alert("xoa book that bai");
    }
  };
  return (
    <div>
      <h2>AddBook</h2>
      <Formik
        initialValues={{
          title: "",
          quantity: 1,
        }}
        enableReinitialize
        validationSchema={bookSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {({ errors }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "200px",
              margin: "0 auto",
            }}
          >
            <label style={{ textAlign: "left" }}>Title</label>
            <Field type="title" name="title" placeholder="Title" />
            {errors.title && <div className="error">{errors.title}</div>}

            <label style={{ textAlign: "left", marginTop: "10px" }}>
              Quantity
            </label>
            <Field type="title" name="quantity" placeholder="Quantity" />
            {errors.quantity && <div className="error">{errors.quantity}</div>}
            <button
              type="submit"
              style={{
                marginTop: "10px",
                padding: "5px",
                backgroundColor: "#7CFC00",
                border: "none",
              }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
