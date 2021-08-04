import styles from "../styles/FilesMenu.module.css";
import BuyButton from "./BuyButton";
import Link from "next/link";

export default function FileCard({ file }) {
  // console.log(file);
  return (
    <div className={styles.fileCard}>
      <Link href={`/files/${file._id}`}>
        <section>
          <div className={styles.fileCardImage}>
            <img
              src={`http://localhost:5000/public/${file.images[0]}.jpg`}
              alt="file image"
              style={{ width: "225px", height: "180px" }}
            />
          </div>
          <div className={styles.fileCardInfo}>
            <p>{file.title}</p>
            <p>إعداد: {file.author} </p>
            <p style={{ fontWeight: "bold" }}>الثمن: {file.price} دينار</p>
          </div>
        </section>
      </Link>
      <BuyButton file={file} />
    </div>
  );
}
