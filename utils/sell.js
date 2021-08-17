import axios from "axios";

export default async function sell(body, url) {
  let result;
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
