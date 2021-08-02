import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useJournalsContext } from "../context/journalsContext";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeContainer from "../components/HomeContainer";

export default function Home({ data }) {
  // const { journals, setJournals } = useJournalsContext();
  // setJournals(data);
  console.log(data);
  // console.log(journals);

  return (
    <div className={styles.container}>
      <Header />
      <HomeContainer allFiles={data} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  let journals = [];
  await axios
    .get("http://localhost:5000/journals")
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
