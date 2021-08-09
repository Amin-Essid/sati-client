import { useShopContext } from "../context/shop";
import Link from "next/link";
import styles from "../styles/Checkout.module.css";

export default function EndButtons({ setFinish }) {
  const { shopFiles, setShowButtons } = useShopContext();
  console.log(shopFiles);

  const btnStyle = {
    marginLeft: "30px",
    color: "white",
    width: "170px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "600",
    backgroundColor: "#0aa96c",
    cursor: "pointer",
  };

  return (
    <div className={styles.checkoutActions}>
      {shopFiles.length > 0 && (
        <div style={btnStyle} onClick={() => setFinish(true)}>
          إتمام الشراء
        </div>
      )}
      <Link href={`/`}>
        <div style={btnStyle}>مواصلة التسوّق</div>
      </Link>
    </div>
  );
}
