import React from "react";
import styles from "./FormMedical.module.css";
import { useState } from "react";
import { Formik } from "formik";
import InputCustom from "./InputCustom";
import ErrorCustom from "./ErrorCustom";
import FormMedicalSchema from "./validateFormMedical";

export default function FormMedical() {
  function handleSubmit() {
    alert("Thêm liên hệ thành công");
  }

  return (
    <div className={styles.form_Container}>
      <Formik
        initialValues={{
          name: "",
          cmnd: "",
          dayOfBirth: "",
          sex: "",
          nationality: "",
          company: "",
          team: "",
          insuranceCard: "",
          city: "",
          district: "",
          ward: "",
          address: "",
          phone: "",
          email: "",
        }}
        validationSchema={FormMedicalSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <h1 className={styles.form_header}>Sign up</h1>

            <InputCustom
              label={"Họ tên"}
              name={"name"}
              value={values.name}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Số hộ chiếu /CMND"}
              name={"cmnd"}
              value={values.cmnd}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Năm sinh"}
              name={"dayOfBirth"}
              value={values.cmnd}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Giới tính"}
              name={"sex"}
              value={values.sex}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Quốc tịch"}
              name={"nationality"}
              value={values.nationality}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Công ty làm việc"}
              name={"company"}
              value={values.company}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Bộ phận làm việc"}
              name={"team"}
              value={values.team}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Có thẻ bảo hiểm y tế"}
              name={"insuranceCard"}
              value={values.insuranceCard}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Tỉnh thành"}
              name={"city"}
              value={values.city}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Quận /huyện"}
              name={"district"}
              value={values.district}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Phường /xã"}
              name={"ward"}
              value={values.ward}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Số nhà, phố, tổ dân phố /thôn /đội"}
              name={"address"}
              value={values.address}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Điện thoại"}
              name={"phone"}
              value={values.phone}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

            <InputCustom
              label={"Email"}
              name={"email"}
              value={values.email}
              handleChange={handleChange}
              errors={errors}
            ></InputCustom>

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
  );
}
