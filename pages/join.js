import { Formik, Form } from "formik";
import styles from "../styles/AcheterContainer.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Input from "../components/inputs/Input";
import Header from "../components/Header";
import Footer from "../components/Footer";
import sell from "../utils/sell";

export default function join() {
  const [formError, setFormError] = useState("");

  const router = useRouter();
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header />
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            code: "",
            province: "",
            city: "",
            address: "",
            number: "",
            email: "",
            description: "",
            fileOne: null,
            fileTwo: null,
            fileThree: null,
          }}
          onSubmit={async (values, { resetForm }) => {
            setFormError("");
            const {
              firstName,
              lastName,
              code,
              province,
              city,
              address,
              number,
              email,
              description,
              // fileOne,
              // fileTwo,
              // fileThree,
            } = values;
            if (
              firstName != "" &&
              lastName != "" &&
              code != "" &&
              province != "" &&
              city != "" &&
              address != "" &&
              number != "" &&
              email != "" &&
              description != ""
            ) {
              let result = await sell({
                firstName,
                lastName,
                code,
                province,
                city,
                address,
                number,
                email,
                description,
                // fileOne,
                // fileTwo,
                // fileThree,
              });
              console.log(result);
              if (result) {
                router.push("/success");
              } else {
                router.push("/error");
              }
            } else {
              setFormError(`الرجاء اكمال ادخال كل البيانات الخاصة بك`);
              console.log("aasba");
              console.log(values);
            }
          }}
        >
          {({ handleChange, handleSubmit, setFieldValue, values }) => (
            <Form
              className={styles.acheterForm}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
              //   className={styles.AcheterInputs}
            >
              <div className={styles.formError}>{formError}</div>
              <div className={styles.AcheterInputs}>
                <Input
                  value={values.firstName || ""}
                  mainstyle={styles.AcheterInput}
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  label="الاسم:"
                />
                <Input
                  value={values.lastName || ""}
                  mainstyle={styles.AcheterInput}
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  label="اللقب:"
                />

                <Input
                  value={values.province || ""}
                  mainstyle={styles.AcheterInput}
                  onChange={handleChange}
                  type="text"
                  name="province"
                  label="الولاية:"
                />
                <Input
                  value={values.city || ""}
                  mainstyle={styles.AcheterInput}
                  onChange={handleChange}
                  type="text"
                  name="city"
                  label="المدينة:"
                />

                <Input
                  value={values.code || ""}
                  mainstyle={styles.AcheterInput}
                  onChange={handleChange}
                  type="text"
                  name="code"
                  label="الترقيم البريدي:"
                />
                <Input
                  value={values.address || ""}
                  mainstyle={styles.AcheterInput}
                  onChange={handleChange}
                  type="text"
                  name="address"
                  label="العنوان:"
                />

                <Input
                  value={values.number || ""}
                  mainstyle={styles.AcheterInput}
                  onChange={handleChange}
                  type="text"
                  name="number"
                  label="رقم الهاتف:"
                />
                <Input
                  value={values.email || ""}
                  mainstyle={styles.AcheterInput}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  label="البريد الالكتروني:"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <label htmlFor="description">
                    ماذا تريد أن تعرض على موقعنا:
                  </label>
                  <textarea
                    placeholder=""
                    name="description"
                    rows="4"
                    cols="47"
                    id="description"
                    onChange={handleChange}
                    style={{
                      borderColor: "#0aa96c",
                      marginRight: "5px",
                    }}
                  ></textarea>
                </div>
              </div>
              {/* <div style={{ marginTop: "20px" }}>
                <label>الرجاء تحميل العمل الذي تريد عرضه او عينة منه:</label>
                <input
                  className={styles.fileInput}
                  id="fileOne"
                  name="fileOne"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("fileOne", event.currentTarget.files[0]);
                  }}
                />
                {values.fileOne ? (
                  <input
                    className={styles.fileInput}
                    id="fileTwo"
                    name="fileTwo"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("fileTwo", event.currentTarget.files[0]);
                    }}
                  />
                ) : null}
                {values.fileTwo ? (
                  <input
                    className={styles.fileInput}
                    id="fileThree"
                    name="fileThree"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("fileThree", event.currentTarget.files[0]);
                    }}
                  />
                ) : null}
              </div> */}
              <button type="submit" className={styles.AcheterSubmit}>
                ارسال
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
}
