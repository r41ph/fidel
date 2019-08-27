import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * Sets the transaction account ID
   */
  accountId: PropTypes.string,

  /**
   * Sets the transaction amount
   */
  amount: PropTypes.number,

  /**
   * Sets the transaction currency
   */
  currency: PropTypes.string,

  /**
   * Sets the transaction date
   */
  datetime: PropTypes.string,

  /**
   * Sets the transaction cardScheme
   */
  cardScheme: PropTypes.string,

  /**
   * Sets transaction cleared status
   */
  cleared: PropTypes.boolean,

  /**
   * Sets the table row index for a transaction
   */
  index: PropTypes.number
};

const Transaction = props => {
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

Transaction.propTypes = propTypes;

export default Transaction;
