import Navbar from "../Navbar";
import Sidebar from "../AdminSidebar";
import PaymentRequest from "./PaymentRequest";
function Transactions(props) {
  return (
    <>
      <Navbar name={"Transaction Request's"}></Navbar>
      <div className="flex">
        <div className="w-2/12 bg-[#1d2634]  mr-3 flex flex-col justify-center items-center">
          <Sidebar></Sidebar>
        </div>
        <div className="w-10/12 bg-[#1d2634] myhieght">
            <PaymentRequest></PaymentRequest>
        </div>
      </div>
    </>
  );
}
export default Transactions;
