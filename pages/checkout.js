import Header from "../components/Header";
import Footer from "../components/Footer";
import { useShopContext } from "../context/shop";
import Link from "next/link";
import styles from "../styles/Checkout.module.css";
import Image from "next/image";
import remove from "../public/remove.png";
import EndButtons from "../components/EndButtons";

export default function CheckouOut() {
  const { shopFiles, updateShopFiles } = useShopContext();
  console.log(shopFiles);
  const shopFilesList = shopFiles.map((file) => (
    <div key={file._id}>
      <div className={styles.checkoutFile}>
        <Link href={`/files/${file._id}`}>
          <h1>{file.title}</h1>
        </Link>
        <div
          style={{ width: "40px", height: "40px", cursor: "pointer" }}
          onClick={() => updateShopFiles(file)}
        >
          <Image src={remove} alt="remove" />
        </div>
      </div>
    </div>
  ));

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header />
      <div className={styles.checkoutContainer}>
        <div>
          {shopFiles.length > 0 ? (
            shopFilesList
          ) : (
            <div>
              <h1 style={{ textAlign: "center" }}>لا يوجد لديك أي مشتريات</h1>
            </div>
          )}
          <EndButtons />
        </div>
      </div>
      <Footer />
    </div>
  );
}
