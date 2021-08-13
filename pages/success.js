import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function success() {
  const router = useRouter();
  const btnStyle = {
    // marginLeft: "30px",
    color: "white",
    width: "250px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "600",
    backgroundColor: "#0aa96c",
    cursor: "pointer",
    marginTop: "20px",
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "700",
            textAlign: "center",
            color: "green",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            تم ارسال طلبك بنجاح، و سيتم الاتصال بك قريبا
          </div>
          <div>شكرا لك</div>
        </div>
        <div onClick={() => router.push("/")} style={btnStyle}>
          العودة إلى الصفحة الرئيسية
        </div>
      </div>
      <Footer />
    </div>
  );
}
