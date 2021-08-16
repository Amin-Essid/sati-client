// -H 0.0.0.0 -p ${PORT:-8080}

import styles from "../styles/Home.module.css";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeContainer from "../components/HomeContainer";
// import CheckPopup from "../components/CheckPopup";

export default function Home({ data }) {
  // const { journals, setJournals } = useJournalsContext();
  // setJournals(data);
  console.log(data);
  // console.log(journals);

  return (
    <div
      className={styles.container}
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <Header />
      <HomeContainer allFiles={data} />
      {/* <CheckPopup /> */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  let journals = [];
  await axios
    .get(`${process.env.API_URL}/journals`)
    .then(function (response) {
      // handle success
      journals = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return {
    props: {
      data: journals,
    }, // will be passed to the page component as props
  };
}
