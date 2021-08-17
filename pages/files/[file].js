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
  // isFile = false;
  await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/journals/${file}`)
    .then(function (response) {
      // handle success
      // isFile = true;
      fileData = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  if (!fileData.title) {
    return { notFound: true };
  }
  return {
    props: {
      file: fileData,
    }, // will be passed to the page component as props
  };
}
