import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { IoAddCircle } from "react-icons/io5";

export const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);
	const [type, setType] = useState('Expense');
	const [date, setDate] = useState('');
	const [showAddTransaction, setShowAddTransaction] = useState(false);

	const handleAddButtonClick = () => {
    setShowAddTransaction(true); // Cambia el estado para mostrar AddTransaction
  };

	const { addTransaction } = useContext(GlobalContext);
	
	const onSubmit = e => {
		e.preventDefault();
		
		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			type,
			text,
			amount: type === "Income" ? +amount : -amount,
			date
			//amount: +amount
		}

		addTransaction(newTransaction);

		setText('');
  	setAmount(0);
		setShowAddTransaction('false');
	}

	const handleCancelClick = () => {
    setShowAddTransaction(false);
  };

  return (
		<>
      {!showAddTransaction && (
				<div className="container-add-transaction">
					<IoAddCircle  className="add-icon" onClick={handleAddButtonClick} />
				</div>
      )}
    {showAddTransaction && (
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
						<div className="amount-container">
							<label className="amount-prefix">$</label><input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="" ></input>
						</div>
          </div>

          <div className="form-control">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Description"></input>
          </div>

          <div className="form-control">
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Select date"
            />
          </div>
          <div className="add-cancel-form">
						<button type="button" className="btn cancel-btn" onClick={handleCancelClick}>Cancel</button>
						<button  type="submit" className="btn add-btn">Add {type}</button>
					</div>
        </form>
      </>
    )}
  </>
  )
}
