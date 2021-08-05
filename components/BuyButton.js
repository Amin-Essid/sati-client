import styles from "../styles/FilesMenu.module.css";
import Shop from "../public/shop.png";
import Image from "next/image";
import { useShopContext } from "../context/shop";
import { useState } from "react";

export default function BuyButton({ file }) {
  const { checkShopFiles, updateShopFiles } = useShopContext();
  const [checked, setChecked] = useState(checkShopFiles(file));
  let text = !checked ? "أضف إلى مشترياتي" : "إحذف من مشترياتي";
  let color = !checked ? "#0aa96c" : "#89A198";
  return (
    <div
      className={styles.fileCardActions}
      style={{
        backgroundColor: color,
        cursor: "pointer",
      }}
      onClick={() => {
        updateShopFiles(file);
        setChecked(checkShopFiles(file));
        // setShowButtons(true);
      }}
    >
      <div
        style={{
          color: "white",
          width: "170px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        {text}
      </div>
      <div
        style={{
          height: "50px",
          width: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={Shop} alt="shop" />
      </div>
    </div>
  );
}
