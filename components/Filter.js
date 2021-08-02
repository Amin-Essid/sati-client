import Select from "./inputs/Select";
import styles from "../styles/Filter.module.css";

export default function Filter({ setType, setJLevel, setSubject }) {
  return (
    <div className={styles.FilterContainer}>
      <Select
        label="المجال"
        setValue={setSubject}
        options={[{ value: "", label: "الكل" }]}
        mainstyle="select_div"
        secondStyle="select_div_label"
        name="subject"
      />
      <Select
        label="الصنف"
        setValue={setType}
        options={[
          { value: "", label: "الكل" },
          { value: "journal", label: "دفتر إعداد الدروس" },
        ]}
        mainstyle="select_div"
        secondStyle="select_div_label"
        name="type"
      />
      <Select
        label="المستوى"
        setValue={setJLevel}
        options={[{ value: "", label: "الكل" }]}
        mainstyle="select_div"
        secondStyle="select_div_label"
        name="level"
      />
    </div>
  );
}
