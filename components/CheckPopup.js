import styles from "../styles/CheckPopup.module.css";
import { useShopContext } from "../context/shop";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CheckPopup() {
  const router = useRouter();
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

  const { showButtons, setShowButtons, shopFiles } = useShopContext();
  let popupClass = styles.overlay_hidden;
  if (showButtons) popupClass = styles.overlay;

  return (
    <div className={popupClass}>
      <div className={styles.popup}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          تمت إضافة منتج جديد إلى قائمة مشترياتك
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            justifyContent: "center",
          }}
        >
          {shopFiles.length > 0 && (
            <div
              onClick={() => {
                setShowButtons(false);
                router.push("/checkout");
              }}
              style={btnStyle}
            >
              إتمام الشراء
            </div>
          )}
          <Link href={`/`}>
            <div
              onClick={() => {
                setShowButtons(false);
              }}
              style={btnStyle}
            >
              مواصلة التسوّق
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
