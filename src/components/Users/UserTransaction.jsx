import React, { useState, useEffect } from "react";
import axios from "axios";
// import ModifyBtn from "../modifyUserBtn/ModifyBtn";

// import PopUp from "../popup.jsx";
const TransactionsList = () => {
    const [transactions, setTransactions] = useState([]);
  
    useEffect(() => {
      // Fetch transactions from backend API
      axios.get('/api/transactions')
        .then(response => {
          setTransactions(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching transactions:', error);
        });
    }, []);

  

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Admin User Management</h2>
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
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.isAdmin ? "Admin" : "User"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.isAdmin ? "NA" : user.balance}
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                  <button
                    className="bg-red-500 text-black  py-1 px-1 rounded-full h-6 w-6 flex justify-center items-center"
                    onClick={() => handleDelete(user.email)}
                  >
                    X
                  </button>
                  <button className="bg-cyan-500 text-black  py-1 px-1 rounded-full h-6 w-6 flex justify-center items-center" >
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsList
