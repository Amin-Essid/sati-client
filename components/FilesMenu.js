import styles from "../styles/FilesMenu.module.css";
import FileCard from "./FileCard";

export default function FilesMenu({ filtredFiles }) {
  console.log(filtredFiles);
  let FilesCards;
  if (filtredFiles.length > 0) {
    FilesCards = filtredFiles.map((file, index) => (
      <FileCard key={file._id} file={file} />
    ));
  } else {
    FilesCards = (
      <div style={{ color: "black", fontSize: "24px" }}>
        هذه الوثائق لا تتوفر حاليا، انتظرنا في القريب العاجل
      </div>
    );
  }
  return <div className={styles.filesContainer}>{FilesCards}</div>;
}
