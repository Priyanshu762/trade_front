import React, { useState } from 'react';
import axios from 'axios';

function AddUser() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [balance, setBalance] = useState('');
  const [name, setName] = useState('');

  const handleAddUser = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle submitting the form data (e.g., sending it to an API)
    axios
      .post("https://trade-back-f54v.onrender.com/api/auth/register", { name, email, password ,balance})
      .then((res) => {
        // console.log(res.error)
        console.log(res.data);
      })
        alert("Registered Successfully")
      .catch((err) =>{
        console.log(err)
        alert("Registration Failed")
      } 
        
      );
    console.log('Form submitted with:', {name, email, password, balance });
    // Clear form fields
    setEmail('');
    setPassword('');
    setBalance('');
    setName('');
    // Close the form
    setShowForm(false);
  };

  const handleCloseForm = () => {
    // Clear form fields
    setEmail('');
    setPassword('');
    setBalance('');
    // Close the form
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={handleAddUser} className='btn bg-green-500 text-black p-2 rounded-full m-2'>Add User</button>
      {showForm && (
        <div className="popup bg-[#2b384d] p-2 rounded-lg">
          <button className="close-button p-1 rounded-full bg-red-500" onClick={handleCloseForm}>X</button>
          <form onSubmit={handleSubmit} className='p-4 bg-[#2b384d]'> 
          <div className='flex gap-5'>

            <label className='p-1'>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label className='p-1'>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label className='p-1'>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label className='p-1'>
              Balance:
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
                </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddUser;
