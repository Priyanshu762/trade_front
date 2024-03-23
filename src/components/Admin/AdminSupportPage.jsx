import React from 'react';

const AdminSupportPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Admin Support Page</h2>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Support Tickets</h3>
        {/* Replace this with actual support ticket components */}
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <div>
            <p className="font-semibold">Ticket #123</p>
            <p className="text-gray-600">Status: Open</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <div>
            <p className="font-semibold">Ticket #124</p>
            <p className="text-gray-600">Status: Closed</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </div>
        {/* End of support ticket components */}
      </div>
    </div>
  );
};

export default AdminSupportPage;
