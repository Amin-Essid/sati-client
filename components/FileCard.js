import styles from "../styles/FilesMenu.module.css";
import BuyButton from "./BuyButton";
import Link from "next/link";

export default function FileCard({ file }) {
  // console.log(file);
  return (
    <div className={styles.fileCard}>
      <Link href={`/files/${file._id}`}>
        <section className={styles.fileCardContainer}>
          <div className={styles.fileCardImage}>
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/public/${file.images[0]}.png`}
              alt="file image"
              style={{ width: "225px", height: "180px" }}
            />
          </div>
          <div className={styles.fileCardInfo}>
            <p>{file.title}</p>
            {/* <p>إعداد: {file.author} </p> */}
            <p>عدد الأوراق: {file.numberOfPages}</p>
            <p style={{ fontWeight: "bold" }}>الثمن: {file.price} دينار</p>
          </div>
        </section>
      </Link>
      <BuyButton file={file} />
    </div>
  );
}
