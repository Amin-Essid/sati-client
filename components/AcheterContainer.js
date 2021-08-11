import { Formik, Form } from "formik";
import styles from "../styles/AcheterContainer.module.css";
import { useState } from "react";
import Input from "./inputs/Input";
import buy from "../utils/buy";
import { useRouter } from "next/router";

export default function AcheterContainer({ boughtFiles }) {
  const [formError, setFormError] = useState("");
  const router = useRouter();

  return (
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
          files: boughtFiles,
        }}
        onSubmit={async (values) => {
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
            files,
          } = values;
          if (
            firstName != "" &&
            lastName != "" &&
            code != "" &&
            province != "" &&
            city != "" &&
            address != "" &&
            number != "" &&
            email != ""
          ) {
            let result = await buy({
              firstName,
              lastName,
              code,
              province,
              city,
              address,
              number,
              email,
              files,
            });
            console.log(result);
            if (result) {
              router.push("/success");
            }
            router.push("/error");
          } else {
            setFormError(`الرجاء اكمال ادخال كل البيانات الخاصة بك`);
            console.log("aasba");
          }
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form
            className={styles.acheterForm}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
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
            </div>
            <button type="submit" className={styles.AcheterSubmit}>
              ارسال
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
