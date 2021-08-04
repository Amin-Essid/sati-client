import "../styles/globals.css";
import { ShopWrapper } from "../context/shop";

function MyApp({ Component, pageProps }) {
  return (
    <ShopWrapper>
      <Component {...pageProps} />
    </ShopWrapper>
  );
}

export default MyApp;
