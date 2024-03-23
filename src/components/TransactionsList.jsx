import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from backend API
    axios.get('https://trade-back-f54v.onrender.com/api/user/transactions')
      .then(response => {
        setTransactions(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  return (
    <div>
      <h2>Transactions List</h2>
      <table>
        <thead>
          <tr>
            <th>Share</th>
            <th>Share Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Date and Time</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id}>
              <td>{transaction.share}</td>
              <td>{transaction.sharePrice}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.totalPrice}</td>
              <td>{new Date(transaction.dateTime).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;
