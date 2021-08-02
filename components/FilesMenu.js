import styles from "../styles/FilesMenu.module.css";
import FileCard from "./FileCard";

export default function FilesMenu({ filtredFiles }) {
  console.log(filtredFiles);
  const FilesCards = filtredFiles.map((file, index) => (
    <FileCard key={file._id} file={file} />
  ));
  return <div className={styles.filesContainer}>{FilesCards}</div>;
}
