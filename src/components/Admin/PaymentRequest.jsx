import React, { useState } from 'react';

const PaymentRequest = () => {
  // Dummy user data for demonstration
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com', amount:'0' },
    { id: 2, username: 'user2', email: 'user2@example.com', amount:'0' },
    { id: 3, username: 'user3', email: 'user3@example.com', amount:'0' },
    // Add more users as needed
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Admin User Management</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {/* <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th> */}
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.email}>
                {/* <td className="px-6 py-4 whitespace-nowrap">{user.id}</td> */}
                <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                  <button className='bg-red-500 text-black  py-1 px-1 rounded-full h-6 w-6 flex justify-center items-center'>X</button>
                  <button className='bg-cyan-500 text-black  py-1 px-1 rounded-full h-6 w-6 flex justify-center items-center'>M</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentRequest;










// import React, { useState } from 'react';


// const PaymentRequest = () => {
 
//     const [userData, setUserData] = useState({
//         name: 'John Doe',
//         email: 'john@example.com',
//         // Add more user details as needed
//       });
    
//       const [paymentStatistics, setPaymentStatistics] = useState({
//         totalPayments: 500,
//         pendingPayments: 100,
//         successfulPayments: 300,
//         failedPayments: 100,
//       });
    
//       return (
//         <div className="container mx-auto px-4 py-8">
//           <h2 className="text-2xl font-bold mb-4">User Payment Dashboard</h2>
//           <div className="bg-white shadow-md p-6 rounded-lg mb-8">
//             <h3 className="text-lg font-semibold mb-2">User Details</h3>
//             <div className="flex justify-between">
//               <div>
//                 <p className="text-gray-600">Name:</p>
//                 <p className="font-semibold">{userData.name}</p>
//               </div>
//               <div>
//                 <p className="text-gray-600">Email:</p>
//                 <p className="font-semibold">{userData.email}</p>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             <div className="bg-white shadow-md p-6 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Total Payments</h3>
//               <p className="text-3xl font-bold">{paymentStatistics.totalPayments}</p>
//             </div>
//             <div className="bg-white shadow-md p-6 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Pending Payments</h3>
//               <p className="text-3xl font-bold">{paymentStatistics.pendingPayments}</p>
//             </div>
//             <div className="bg-white shadow-md p-6 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Successful Payments</h3>
//               <p className="text-3xl font-bold">{paymentStatistics.successfulPayments}</p>
//             </div>
//             <div className="bg-white shadow-md p-6 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Failed Payments</h3>
//               <p className="text-3xl font-bold">{paymentStatistics.failedPayments}</p>
//             </div>
//           </div>
//         </div>
//       );
//     };
    
//     export default PaymentRequest;
