import "../styles/globals.css";
import { JournalsWrapper } from "../context/journalsContext";

function MyApp({ Component, pageProps }) {
  return (
    <JournalsWrapper>
      <Component {...pageProps} />
    </JournalsWrapper>
  );
}

export default MyApp;
