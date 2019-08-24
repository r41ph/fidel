import axios from "axios";

/**
 * Performs an api request.
 */

const fetchTransactions = last => {
  const programID = "2314f371-39b1-4c80-8040-4144ff1bad09";
  const secretKey = process.env.REACT_APP_FIDEL_API_SECRET_KEY;
  const baseURL = "https://api-dev.fidel.uk/v1d/programs";
  const headers = {
    "content-type": "application/json",
    "fidel-key": `${secretKey}`
  };
  let url = null;
  console.log("last", last);
  console.log("last strg", JSON.stringify(last));
  if (last) {
    url = `${baseURL}/${programID}/transactions?start=${JSON.stringify(last)}`;
    console.log("url", url);
  } else {
    url = `${baseURL}/${programID}/transactions`;
  }

  const data = axios
    .get(url, { headers })
    .then(res => {
      console.log("res in fetchTransactions", res);
      return res;
    })
    .catch(error => {
      console.log("WTF", error);
    });

  return data;
};

export default fetchTransactions;
