import styles from "./FormMedical.module.css";
import { Field, Formik } from "formik";
import InputCustom from "./InputCustom";
import FormMedicalSchema from "./validateFormMedical";

export default function FormMedical() {
  function handleOnSubmit(values, actions) {
    console.log(values);
    console.log(actions);
    //alert("Thêm liên hệ thành công");
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
          insuranceCard: false,
          city: "",
          district: "",
          ward: "",
          address: "",
          phone: "",
          email: "",
          visitedCountry: "",
          signal: [],
          contact: [],
        }}
        validationSchema={FormMedicalSchema}
        onSubmit={handleOnSubmit}
      >
        {({ handleChange, values, errors }) => (
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

            <div className={styles.input_Container}>
              <span>Giới tính</span>
              <input type="radio" id="male" name="sex" value="Male"></input>
              <label htmlFor="male">Name</label>

              <input type="radio" id="female" name="sex" value="Female"></input>
              <label htmlFor="female">Nữ</label>
            </div>

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

            <div className={styles.input_Container}>
              <label htmlFor="insuranceCard">Có thẻ bảo hiểm y tế</label>
              <input
                type="checkbox"
                id="insuranceCard"
                name="insuranceCard"
                checked={values.insuranceCard}
                onChange={handleChange}
              ></input>
            </div>

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

            <h4 className={styles.header}>
              Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia/ vùng lãnh thổ
              nào (Có thể đi qua nhiều quốc gia)
            </h4>
            <textarea
              className={styles.textarea}
              name="visitedCountry"
              value={values.visitedCountry}
              onChange={handleChange}
            ></textarea>
            <h4 className={styles.header}>
              Tròng vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau
              đây không?
            </h4>
            <div className={styles.input_wrapper}>
              <label>
                <Field type="checkbox" name="signal" value="Sốt" />
                Sốt
              </label>
              <label>
                <Field type="checkbox" name="signal" value="Ho" />
                Ho
              </label>
              <label>
                <Field type="checkbox" name="signal" value="Khó thở" />
                Khó thở
              </label>
              <label>
                <Field type="checkbox" name="signal" value="Viêm phổi" />
                Viêm phổi
              </label>
              <label>
                <Field type="checkbox" name="signal" value=" Đau họng" />
                Đau họng
              </label>
              <label>
                <Field type="checkbox" name="signal" value="Mệt mỏi" />
                Mệt mỏi
              </label>
            </div>
            <h4 className={styles.header}>
              Tròng vòng 14 ngày qua, Anh/Chị có tiếp xúc với?
            </h4>
            <div className={styles.input_wrapper}>
              <label>
                <Field type="checkbox" name="contact" value="Viêm phổi" />
                Viêm phổi
              </label>
              <label>
                <Field type="checkbox" name="contact" value=" Đau họng" />
                Đau họng
              </label>
              <label>
                <Field type="checkbox" name="contact" value="Mệt mỏi" />
                Mệt mỏi
              </label>
            </div>
            <button
              type="submit"
              onClick={(e) => handleOnSubmit(values)}
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
