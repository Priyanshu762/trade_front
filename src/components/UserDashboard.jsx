import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./UserSidebar";
import "./App.css";

import TradingViewChart from "./TradingViewChart";

function Home() {
if(localStorage.getItem('isLoggedIn')=='true'){
  
  return (
    <>
  
      <Navbar name={"Dashboard"}></Navbar>
      <div className="flex">
        <div className="w-2/12 bg-[#1d2634]  mr-3 flex flex-col justify-center items-center">
          <Sidebar></Sidebar>
        </div>
        <div className="w-10/12 bg-[#1d2634] myhieght">
          <TradingViewChart></TradingViewChart>
        </div>
      </div>
    </>
  );
} 
else{
  alert("Please Login First")
  return(
    <>

    </>
    

  )
} 
}

export default Home;
