import React, {FunctionComponent} from "react";

interface TransactionProps {
  /**
   * Sets the transaction account ID
   */
  accountId: string,

  /**
   * Sets the transaction amount
   */
  amount: number,

  /**
   * Sets the transaction currency
   */
  currency: string,

  /**
   * Sets the transaction date
   */
  datetime: string,

  /**
   * Sets the transaction cardScheme
   */
  cardScheme: string,

  /**
   * Sets transaction cleared status
   */
  cleared: boolean,

  /**
   * Sets the table row index for a transaction
   */
  index: number
};

const Transaction:FunctionComponent<TransactionProps> = props => {
  const {
    accountId,
    amount,
    currency,
    datetime,
    cardScheme,
    cleared,
    index
  } = props;

  return (
    <tr className="f-transactions_table--body-row">
      <td className="f-transactions_table--body-item">{index}</td>
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
