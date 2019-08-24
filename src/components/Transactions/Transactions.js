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
        setTransactions(res.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const renderTransactionsTable = transactions => {
    return (
      <section className="f-transactions">
        <div className="f-transactions_table--scroll">
          <table className="f-transactions_table">
            <thead className="f-transactions_table--head">
              <tr>
                <th className="f-transactions_table--head-item">Account ID</th>
                <th className="f-transactions_table--head-item">Amount</th>
                <th className="f-transactions_table--head-item">Currency</th>
                <th className="f-transactions_table--head-item">Datetime</th>
                <th className="f-transactions_table--head-item">Card Scheme</th>
                <th className="f-transactions_table--head-item">Cleared</th>
              </tr>
            </thead>
            <tbody className="f-transactions_table--body">
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
        </div>
      </section>
    );
  };

  return (
    <>
      {transactions.length > 0 ? renderTransactionsTable(transactions) : null}
    </>
  );
};

export default Transactions;
