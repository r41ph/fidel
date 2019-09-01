import axios, {AxiosRequestConfig} from "axios";

/**
 * Performs an api request to fetch transactions.
 */

interface lastInterface  {
  programIdDel?: string,
  id?: string,
  time?: string
}

const fetchTransactions = (last: lastInterface) => {
  const programID = "2314f371-39b1-4c80-8040-4144ff1bad09";
  const secretKey = process.env.REACT_APP_FIDEL_API_SECRET_KEY;
  const baseURL = "https://api-dev.fidel.uk/v1d/programs";

  let options: AxiosRequestConfig = {
    method: "GET",
    url: `${baseURL}/${programID}/transactions`,
    headers: {
      "content-type": "application/json",
      "fidel-key": `${secretKey}`
    }
  };
  
  if(!last.id === false) {
    options = {
      ...options,
      params: {
        start: JSON.stringify(last)
      }
    }
  }

  const data = axios (options)
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      return error.message;
    });

  return data;
};

export default fetchTransactions;
