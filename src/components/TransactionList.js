import React, { useContext, useState } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [showAll, setShowAll] = useState(false);

  // Sort transactions by date in descending order
  const sortedTransactions = transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  const displayedTransactions = showAll ? sortedTransactions : sortedTransactions.slice(0, 5);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
		<h3>Transactions</h3>
      <div className="transactions-header">
        <button className="filter-transactions-btn" onClick={toggleShowAll}>
          {showAll ? 'View Recent' : 'View All'}
        </button>
      </div>
      <ul className="list">
        {displayedTransactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
