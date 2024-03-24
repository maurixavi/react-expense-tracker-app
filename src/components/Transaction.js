import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transaction.amount < 0 ? '-' : '+';

	const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

	const formattedDate = formatDate(transaction.date);
	
	/*return (
		<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
				{ transaction.text }  <span>{ sign }${Math.abs(transaction.amount)}</span> 
				<button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
		</li>
	)*/
	return (
		<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
			<div className="transaction-details">
				<div className="transaction-text">{transaction.text}</div>
				<div className="transaction-date">{formattedDate}</div>
			</div>
			<div className="transaction-amount">{sign}${Math.abs(transaction.amount)}</div>
			<button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
		</li>
	)
}
