import Navbar from "./Navbar";
import Sidebar from "./UserSidebar";
function Profile(props) {
  return (
    <>
      <Navbar name={"Profile"}></Navbar>
      <div className="flex">
        <div className="w-2/12 bg-[#1d2634]  mr-3 flex flex-col justify-center items-center">
          <Sidebar></Sidebar>
        </div>
        <div className="w-10/12 bg-[#1d2634] myhieght"></div>
      </div>
    </>
  );
}
export default Profile;
