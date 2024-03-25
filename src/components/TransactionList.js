import React, { useContext, useState } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [showAll, setShowAll] = useState(false);

	const transactionCount = transactions.length;
	const recentTransactionsQuantity = 3;
  // Sort transactions by date in descending order
  const sortedTransactions = transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  const displayedTransactions = showAll ? sortedTransactions : sortedTransactions.slice(0, recentTransactionsQuantity);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
			
			<div className="transactions-header">
			<h3>Transactions</h3>
				{transactionCount > recentTransactionsQuantity && (
					<button className="filter-transactions-btn" onClick={toggleShowAll}>
						{showAll ? 'View Recent' : 'View All'}
					</button>
				)}
			</div>
			{transactions.length === 0 ? (
        <div className="no-transactions-container">
					<img src="/leaf.png" alt="" />
          <p>You don't have any transactions yet</p>
        </div>
      ) : (
      <ul className="list">
        {displayedTransactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
			
			)}
    </>
  );
};
