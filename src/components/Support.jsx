import Navbar from "./Navbar";
import Sidebar from "./UserSidebar";
import AdminSupportPage from "./Admin/AdminSupportPage";
function Support(props) {
  return (
    <>
      <Navbar name={"Support"}></Navbar>
      <div className="flex">
        <div className="w-2/12 bg-[#1d2634]  mr-3 flex flex-col justify-center items-center">
          <Sidebar></Sidebar>
        </div>
        <div className="w-10/12 bg-[#1d2634] myhieght">
          <AdminSupportPage></AdminSupportPage>
        </div>
      </div>
    </>
  );
}
export default Support;
