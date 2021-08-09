import Header from "../components/Header";
import Footer from "../components/Footer";
import { useShopContext } from "../context/shop";
import Link from "next/link";
import styles from "../styles/Checkout.module.css";
import Image from "next/image";
import remove from "../public/remove.png";
import EndButtons from "../components/EndButtons";
import AcheterContainer from "../components/AcheterContainer";
import { useState } from "react";

export default function CheckouOut() {
  const { shopFiles, updateShopFiles } = useShopContext();
  const [finish, setFinish] = useState(false);
  let toatalPrice = 0;
  console.log(shopFiles);
  const shopFilesList = shopFiles.map((file) => {
    toatalPrice = toatalPrice + file.price;
    return (
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
    );
  });

  const filesLength = 133 + 84 * shopFiles.length;
  console.log(filesLength);
  return (
    <div>
      <Header />
      <div className={styles.checkoutContainer}>
        <div>
          {shopFiles.length > 0 ? (
            <div>
              {shopFilesList}
              <div style={{ textAlign: "center", fontSize: "24px" }}>
                الثمن:
                <span style={{ marginRight: "5px" }}>{toatalPrice} دينار</span>
              </div>
            </div>
          ) : (
            <div>
              <h1 style={{ textAlign: "center" }}>لا يوجد لديك أي مشتريات</h1>
            </div>
          )}
          {!finish && <EndButtons setFinish={setFinish} />}
          {finish && <AcheterContainer />}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
