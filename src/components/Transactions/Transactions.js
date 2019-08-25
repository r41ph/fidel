import React from "react";
// import axios from "axios";
import "./Transactions.scss";
import Transaction from "./Transaction";
import fetchTransactions from "../../utils/fetchTransactions";
import withInfiniteScroll from "../../hoc/withInfiniteScroll";
import Loading from "../Loading/Loading";

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      lastTransaction: {},
      fetchMoreItems: false,
      isLoading: true
    };
  }

  componentDidMount() {
    this.getTransactions(this.state.lastTransaction);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.fetchMoreItems !== prevProps.fetchMoreItems &&
      this.state.isLoading === false &&
      this.props.fetchMoreItems === true
    ) {
      this.setState({ isLoading: true });
      this.getTransactions(this.state.lastTransaction);
    }
  }

  getTransactions = async () => {
    const trans = await fetchTransactions(this.state.lastTransaction);
    const newList = this.state.transactions.concat(trans.data.items);
    this.setState({
      transactions: newList,
      lastTransaction: trans.data.last,
      isLoading: false
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
    return (
      <>
        {this.state.transactions.length > 0
          ? this.renderTransactionsTable(this.state.transactions)
          : null}
        {this.state.isLoading && <Loading />}
      </>
    );
  }
}

export default withInfiniteScroll(Transactions);
