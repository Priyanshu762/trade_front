import React, { useState, useEffect } from "react";
import axios from "axios";
// import ModifyBtn from "../modifyUserBtn/ModifyBtn";
import AddUser from "../Add User Btn/AddUser.jsx";

// import PopUp from "../popup.jsx";
const AdminUserManagementPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://trade-back-f54v.onrender.com/api/user/all")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleDelete = (email) => {
    axios
      .delete(`https://trade-back-f54v.onrender.com/api/user/${email}`)
      .then((response) => {
        console.log(response.data);
        setUsers(users.filter((user) => user.email !== email));
        // Handle success
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        // Handle error
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Admin User Management</h2>
      <AddUser></AddUser>
      <div className="bg-white shadow-md rounded-lg text-black overflow-auto">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Balance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
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

export default AdminUserManagementPage;
