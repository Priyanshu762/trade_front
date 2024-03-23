import React, { useState } from 'react';

const SinglePageCheckout = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        paymentMethod: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Submit data or perform further actions
        console.log(formData);
      };
    
      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter your city"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="zip" className="block text-gray-700 font-semibold mb-2">ZIP Code</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  placeholder="Enter your ZIP code"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="paymentMethod" className="block text-gray-700 font-semibold mb-2">Payment Method</label>
                <input
                  type="text"
                  id="paymentMethod"
                  name="paymentMethod"
                  placeholder="Enter your payment method"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Complete Purchase</button>
            </form>
          </div>
        </div>
      );
    };

export default SinglePageCheckout;
