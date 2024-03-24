import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);
	const [type, setType] = useState('Expense');

	const { addTransaction } = useContext(GlobalContext);
	
	const onSubmit = e => {
		e.preventDefault();
		
		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			type,
			text,
			amount: type === "Income" ? +amount : -amount
			//amount: +amount
		}

		addTransaction(newTransaction);

		setText('');
  	setAmount(0);
	}

  return (
	<>
		<h3>Add Transaction</h3>
		<form onSubmit={onSubmit}>
			<div className="form-control">
				<select value={type} onChange={(e) => setType(e.target.value)}>
					<option value="Expense">Expense</option>
					<option value="Income">Income</option>
				</select>
			</div>
			<div className="form-control">
				<p>Amount</p>
				<label className="amount-prefix">$</label><input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="" ></input>
			</div>

			<div className="form-control">
				<input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Description"></input>
			</div>
			
			<button className="btn">Add {type}</button>
		</form>

	</>
  )
}
