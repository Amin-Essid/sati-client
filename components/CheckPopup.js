import styles from "../styles/CheckPopup.module.css";
import { useShopContext } from "../context/shop";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CheckPopup() {
  const router = useRouter();

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
              // style={btnStyle}
              className={styles.popupBtnStyle}
            >
              إتمام الشراء
            </div>
          )}

          <div
            onClick={() => {
              setShowButtons(false);
            }}
            // style={btnStyle}
            className={styles.popupBtnStyle}
          >
            مواصلة التسوّق
          </div>
        </div>
      </div>
    </div>
  );
}
