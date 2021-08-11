import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function error() {
  const router = useRouter();
  const btnStyle = {
    marginLeft: "30px",
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "red",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            للأسف لم يتم إرسال طلبك بنجاح
          </div>
          <div>رجاءا أعد المحاولة مرة أخرى</div>
        </div>
        <div onClick={() => router.push("/")} style={btnStyle}>
          إعادة المحاولة
        </div>
      </div>
      <Footer />
    </div>
  );
}
