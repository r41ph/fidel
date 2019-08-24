import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./Transactions.scss";
import Transaction from "./Transaction";
import fetchTransactions from "../../utils/fetchTransactions";
import withInfiniteScroll from "../../hoc/withInfiniteScroll";

const Transactions = props => {
  const { fetchMoreItems } = props;
  const [transactions, setTransactions] = useState({});
  const [lastTransaction, setLastTransaction] = useState({});

  useEffect(() => {
    getTransactions();
    console.log("woop");
  }, []);

  useEffect(() => {
    const getMoreTransactions = async () => {
      const moreTransactions = await fetchTransactions(lastTransaction);
      console.log("moreTransactions", moreTransactions);
      // setTransactions({ ...transactions, ...moreTransactions.data.items });
      // setLastTransaction(moreTransactions.data.last);
    };
    if (fetchMoreItems) {
      getMoreTransactions();
    }
  }, [lastTransaction, fetchMoreItems, transactions]);

  const getTransactions = async () => {
    const transactions = await fetchTransactions();
    setTransactions(transactions.data.items);
    setLastTransaction(transactions.data.last);
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
                  key={transaction.accountId}
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

export default withInfiniteScroll(Transactions);
