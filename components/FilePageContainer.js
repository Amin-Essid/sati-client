import styles from "../styles/FilePageContainer.module.css";
import BuyButton from "./BuyButton";

export default function FilePageContainer({ file }) {
  return (
    <div className={styles.fileContainer}>
      <div className={styles.fileContainerInfo}>
        <h1>{file.title}</h1>
        <p style={{ fontWeight: "bold" }}>الثمن: {file.price} دينار</p>
        {/* <p>المجال: {file.subject} </p> */}
        <p>إعداد: {file.author} </p>
        <p>المدرسة: {file.school} </p>
        <p>
          {file.city}، {file.province}
        </p>
        <p style={{ marginBottom: "30px" }}>{file.description}</p>
        <BuyButton file={file} />
      </div>
      <div className={styles.fileContainerGallery}>
        <img
          src={`http://localhost:5000/public/${file.images[0]}.jpg`}
          alt="file image"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
