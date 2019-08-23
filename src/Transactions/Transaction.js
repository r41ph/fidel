import React from "react";

const Transaction = props => {
  const { accountId, amount, currency, datetime, cardScheme, cleared } = props;
  return (
    <tr>
      <td className="f-transactions_table--item">{accountId}</td>
      <td className="f-transactions_table--item">{amount}</td>
      <td className="f-transactions_table--item">{currency}</td>
      <td className="f-transactions_table--item">{datetime}</td>
      <td className="f-transactions_table--item">{cardScheme}</td>
      <td className="f-transactions_table--item">
        {cleared ? "true" : "false"}
      </td>
    </tr>
  );
};

export default Transaction;
