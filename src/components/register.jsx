import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useHistory } from 'react-router-dom';
function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    axios
      .post("https://trade-back-f54v.onrender.com/api/auth/register", { name, email, password })
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
  };

  

// const handleSubmit = (e) => {
//   e.preventDeafault();
//   console.log(name, email, password);
// }

  return (
    <>
      <div className="container flex h-screen justify-center items-center">
        <div className="login w-1/2 h-screen  flex flex-col justify-center items-center ">
          <form onSubmit={handleSubmit}>
            <div className="welcome h-16 w-96 mb-6">
              <h1 className="text-3xl">Register</h1>
              <p className="">Welcome Please Fill your details.</p>
            </div>
            <div className=" h-22 w-96 mb-6">
              <p className="text-xl">Name</p>
              <input
                className="border-2 border-black p-2 rounded-lg w-full"
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="Mobile h-22 w-96 mb-6">
              <p className="text-xl">Email</p>
              <input
                className="border-2 border-black p-2 rounded-lg w-full"
                type="email"
                placeholder="Enter Mobile"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="Password h-22 w-96 mb-6">
              <p className="text-xl">Password</p>
              <input
                className="border-2 border-black p-2 rounded-lg w-full"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="Login-Btn h-22 w-96 mb-2">
              <button className=" bg-red-500 rounded-lg w-full h-9">
                Sign Up
              </button>
            </div>
          </form>
            <div className=" h-22 w-96 mb-5 flex items-center justify-center">
              <p className="">Already have an account</p>
            </div>
            <div className="Login-Btn h-22 w-96 mb-2">
           
              <button  className=" bg-green-500 rounded-lg w-full h-9">
              <Link to='/login' className="btn btn-secondary">Login</Link>
              </button>
            </div>
        </div>
        <div className="picture w-1/2 h-screen">
          <img
            src="coin.jpg"
            alt=""
            className="overflow-hidden h-screen w-full"
          />
        </div>
      </div>
    </>
  );
}
export default Register;
