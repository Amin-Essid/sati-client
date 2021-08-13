import { useShopContext } from "../context/shop";
import Link from "next/link";
import styles from "../styles/Checkout.module.css";

export default function EndButtons({ setFinish }) {
  const { shopFiles, setShowButtons } = useShopContext();
  console.log(shopFiles);

  return (
    <div className={styles.checkoutActions}>
      {shopFiles.length > 0 && (
        <div
          // style={btnStyle}
          className={styles.endBtnStyle}
          onClick={() => setFinish(true)}
        >
          إتمام الشراء
        </div>
      )}
      <Link href={`/`}>
        <div
          //  style={btnStyle}
          className={styles.endBtnStyle}
        >
          مواصلة التسوّق
        </div>
      </Link>
    </div>
  );
}
