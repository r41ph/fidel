import React from "react";
import PropTypes from "prop-types";
import "./Transactions.scss";
import Transaction from "./Transaction";
import fetchTransactions from "../../utils/fetchTransactions";
import withInfiniteScroll from "../../hoc/withInfiniteScroll";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

const propTypes = {
  /**
   * Specifies whether more transactions should be fetch.
   * it should be true when user scrolls to the end of the page.
   */
  fetchMoreItems: PropTypes.boolean
};

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      lastTransaction: {},
      isLoading: true,
      error: false,
      errorMessage: ""
    };
  }

  componentDidMount() {
    this.getTransactions(this.state.lastTransaction);
  }

  componentDidUpdate(prevProps) {
    const { fetchMoreItems } = this.props;
    if (
      fetchMoreItems !== prevProps.fetchMoreItems &&
      this.state.isLoading === false &&
      fetchMoreItems === true
    ) {
      this.setState({ isLoading: true });
      this.getTransactions(this.state.lastTransaction);
    }
  }

  getTransactions = async () => {
    const transResponse = await fetchTransactions(this.state.lastTransaction);
    if (transResponse.status !== 200) {
      this.setState({ error: true, errorMessage: transResponse });
      return;
    }
    const newList = this.state.transactions.concat(transResponse.data.items);
    this.setState({
      transactions: newList,
      lastTransaction: transResponse.data.last,
      isLoading: false,
      error: false
    });
  };

  renderTransactionsTable = transactions => {
    return (
      <section className="f-transactions">
        <div className="f-transactions_table--scroll">
          <table className="f-transactions_table">
            <thead className="f-transactions_table--head">
              <tr>
                <th className="f-transactions_table--head-item"></th>
                <th className="f-transactions_table--head-item">Account ID</th>
                <th className="f-transactions_table--head-item">Amount</th>
                <th className="f-transactions_table--head-item">Currency</th>
                <th className="f-transactions_table--head-item">Datetime</th>
                <th className="f-transactions_table--head-item">Card Scheme</th>
                <th className="f-transactions_table--head-item">Cleared</th>
              </tr>
            </thead>
            <tbody className="f-transactions_table--body">
              {transactions.map((transaction, index) => (
                <Transaction
                  index={index}
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

  render() {
    const { error, errorMessage, transactions, isLoading } = this.state;
    return (
      <>
        {transactions.length > 0
          ? this.renderTransactionsTable(transactions)
          : null}
        {!error && isLoading && <Loading />}
        {error ? <Error message={errorMessage} /> : null}
      </>
    );
  }
}

Transactions.propTypes = propTypes;

export default withInfiniteScroll(Transactions);
