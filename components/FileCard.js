import styles from "../styles/FilesMenu.module.css";
import Shop from "../public/shop.png";
import Image from "next/image";

export default function FileCard({ file }) {
  console.log(file);
  return (
    <div className={styles.fileCard}>
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
      </div>
      <div className={styles.fileCardActions}>
        <div
          style={{
            backgroundColor: "#0aa96c",
            color: "white",
            width: "170px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          شراء
        </div>
        <div
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: "#0aa96c",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={Shop} alt="shop" />
        </div>
      </div>
    </div>
  );
}
