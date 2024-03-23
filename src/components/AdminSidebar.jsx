import React from "react";

function Sidebar() {
  return (
    <>
      {/* <div className="home  w-full text-center p-5 flex justify-center items-center text-white"><img src="home.png" alt="" className='h-4 mr-3 invert' /><p className='text-xl'>Home</p></div>
        <div className="transaction  w-full text-center p-5 flex justify-center items-center"><p className='text-xl'>Transaction</p></div>
        <div className="profile  w-full text-center p-5 flex justify-center items-center"><p className='text-xl'>Profile</p></div>
        <div className="logout  w-full text-center p-5 flex justify-center items-center"><p className='text-xl'>Logout</p></div> */}
      <ul className="w-full flex flex-col  items-center justify-center">
        <a href="/admindashboard" className="w-full">
          <li className="flex items-center text-white p-6 pl-8 hover:bg-black w-full gap-2">
            <lord-icon
              src="https://cdn.lordicon.com/ozckswtv.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: 25, height: 25 }}
            ></lord-icon>
            User
          </li>
        </a>
        <a href="/admintransactionmanagement" className="w-full">
          <li className="flex items-center text-white p-6 pl-8 hover:bg-black w-full gap-2">
            <lord-icon
              src="https://cdn.lordicon.com/vuiggmtc.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: 25, height: 25 }}
            ></lord-icon>
            Transactions
          </li>
        </a>
        <a href="/admindashboard" className="w-full">
          {" "}
          <li className="flex items-center text-white p-6 pl-8 hover:bg-black w-full gap-2">
            <lord-icon
              src="https://cdn.lordicon.com/kthelypq.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: 25, height: 25 }}
            ></lord-icon>
            Profile
          </li>
        </a>
        <a href="/admindashboard" className="w-full">
          <li className="flex items-center text-white p-6 pl-8 hover:bg-black w-full gap-2">
            <lord-icon
              src="https://cdn.lordicon.com/whtfgdfm.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: 25, height: 25 }}
            ></lord-icon>
            Logout
          </li>
        </a>
      </ul>
    </>
  );
}

export default Sidebar;
