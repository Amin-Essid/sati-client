import styles from "../styles/Home.module.css";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeContainer from "../components/HomeContainer";
// import Head from "next/head";
import HeadTags from "../components/HeadTags";

export default function Home({ data }) {
  return (
    <div
      className={styles.container}
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <HeadTags
        title="sati.tn"
        description="كل ما يحتاج له المعلم في مكان واحد"
        image="/logo.png"
      />
      <Header />
      <HomeContainer allFiles={data} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  let journals = [];
  await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/journals`)
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
