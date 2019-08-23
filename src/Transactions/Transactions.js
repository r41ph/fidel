import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Transactions.scss";
import Transaction from "./Transaction";

const Transactions = () => {
  useEffect(() => {
    getTransactions();
  }, []);

  const [transactions, setTransactions] = useState({});

  const getTransactions = () => {
    console.log("getting transactions add loading!");
    const programID = "2314f371-39b1-4c80-8040-4144ff1bad09";
    const secretKey = process.env.REACT_APP_FIDEL_API_SECRET_KEY;
    const url = `https://api-dev.fidel.uk/v1d/programs/${programID}/transactions`;
    const headers = {
      "content-type": "application/json",
      "fidel-key": `${secretKey}`
    };
    axios
      .get(url, { headers })
      .then(res => {
        console.log("res", res.data.items);
        setTransactions(res.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const renderTransactionsTable = transactions => {
    return (
      <table className="f-transactions_table">
        <thead>
          <tr>
            <th className="f-transactions_table--head">Account ID</th>
            <th className="f-transactions_table--head">Amount</th>
            <th className="f-transactions_table--head">Currency</th>
            <th className="f-transactions_table--head">Datetime</th>
            <th className="f-transactions_table--head">Card Scheme</th>
            <th className="f-transactions_table--head">Cleared</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <Transaction
              accountId={transaction.accountId}
              amount={transaction.amount}
              currency={transaction.currency}
              datetime={transaction.datetime}
              cardScheme={transaction.card.scheme}
              cleared={transaction.cleared}
            />
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      {transactions.length > 0 ? renderTransactionsTable(transactions) : null}
    </>
  );
};

export default Transactions;
