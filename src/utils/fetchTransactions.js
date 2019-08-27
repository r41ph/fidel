import axios from "axios";

/**
 * Performs an api request to fetch transactions.
 */

const fetchTransactions = last => {
  const programID = "2314f371-39b1-4c80-8040-4144ff1bad09";
  const secretKey = process.env.REACT_APP_FIDEL_API_SECRET_KEY;
  const baseURL = "https://api-dev.fidel.uk/v1d/programs";
  const headers = {
    "content-type": "application/json",
    "fidel-key": `${secretKey}`
  };
  const url = `${baseURL}/${programID}/transactions`;

  const data = axios
    .get(
      url,
      { headers },
      {
        params: {
          start: JSON.stringify(last)
        }
      }
    )
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(JSON.stringify(error, 1, 4));
      return error.message;
    });

  return data;
};

export default fetchTransactions;
