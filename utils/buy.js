import axios from "axios";

export default async function buy(body) {
  let result;
  await axios
    .post(`${process.env.API_URL}/contact/buy`, body)
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
