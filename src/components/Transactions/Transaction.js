import React from "react";

const Transaction = props => {
  const { accountId, amount, currency, datetime, cardScheme, cleared } = props;
  return (
    <tr className="f-transactions_table--body-row">
      <td className="f-transactions_table--body-item">{accountId}</td>
      <td className="f-transactions_table--body-item">{amount}</td>
      <td className="f-transactions_table--body-item">{currency}</td>
      <td className="f-transactions_table--body-item">{datetime}</td>
      <td className="f-transactions_table--body-item">{cardScheme}</td>
      <td className="f-transactions_table--body-item">
        {cleared ? "true" : "false"}
      </td>
    </tr>
  );
};

export default Transaction;
