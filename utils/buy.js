import axios from "axios";

export default async function buy(body, url) {
  let result;
  console.log(url);
  await axios
    .post(url, body)
    .then(function (response) {
      // handle success
      console.log("success");
      result = true;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      result = false;
    });
  return result;
}
