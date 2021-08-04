import axios from "axios";
import FilePageContainer from "../../components/FilePageContainer";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function FilePage({ file }) {
  console.log(file);
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header />
      <FilePageContainer file={file} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { file } = params;
  console.log(file);
  let fileData;
  await axios
    .get(`http://localhost:5000/journals/${file}`)
    .then(function (response) {
      // handle success
      fileData = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return {
    props: {
      file: fileData,
    }, // will be passed to the page component as props
  };
}
