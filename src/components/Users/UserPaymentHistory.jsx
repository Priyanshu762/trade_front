import React, { useState, useEffect } from "react";
import axios from "axios";
// import ModifyBtn from "../modifyUserBtn/ModifyBtn";
import AddUser from "../Add User Btn/AddUser.jsx";

// import PopUp from "../popup.jsx";
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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Your Transactions</h2>
      <div className="bg-white shadow-md rounded-lg text-black overflow-auto">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Share
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Qauntity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          
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
    </div>
  );
};

export default TransactionsList;
