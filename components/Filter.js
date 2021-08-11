import Select from "./inputs/Select";
import styles from "../styles/Filter.module.css";

export default function Filter({ setType, setJLevel, setSubject }) {
  return (
    <div className={styles.FilterContainer}>
      <Select
        label="المجال"
        setValue={setSubject}
        options={[
          { value: "", label: "الكل" },
          { value: "arabic", label: "عربية" },
          { value: "science", label: "علوم" },
          { value: "frensh", label: "فرنسية" },
          { value: "other", label: "مجال آخر" },
        ]}
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
          { value: "dafterTakyim", label: "دفتر التقييم" },
          { value: "korasJouthathet", label: "كراس الجذاذات" },
          { value: "other", label: "وسائل بيداغوجية أخرى" },
        ]}
        mainstyle="select_div"
        secondStyle="select_div_label"
        name="type"
      />
      <Select
        label="المستوى"
        setValue={setJLevel}
        options={[
          { value: "", label: "الكل" },
          { value: "zero", label: "التحضيري" },
          { value: "one", label: "الأولى" },
          { value: "two", label: "الثانية" },
          { value: "three", label: "الثالثة" },
          { value: "four", label: "الرابعة" },
          { value: "five", label: "الخامسة" },
          { value: "six", label: "السادسة" },
        ]}
        mainstyle="select_div"
        secondStyle="select_div_label"
        name="level"
      />
    </div>
  );
}
