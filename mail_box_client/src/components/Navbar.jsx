import { useContext } from "react";
import { FaBars, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { Authstore } from "./store/AuthProvider";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const{authInfo,setAuthInfo}=useContext(Authstore);


   
  const navigate=useNavigate();
  function logoutHandler(){
  localStorage.removeItem("userInfo");
  setAuthInfo([]);
 
  navigate("/")
  setTimeout(()=>{
    window.location.reload()
  },100)


  }
  return (
    <div className="w-full fixed top-0 left-0 right-0 bg-gray-100 shadow-sm z-50 px-6 py-3 flex items-center justify-between">
      
  
      <div className="flex items-center gap-3">
        <FaBars className="text-xl text-gray-600 cursor-pointer" />
        <h1 className="text-2xl font-bold text-red-600 tracking-tight">My Mail</h1>
      </div>

      <div className="flex flex-1 justify-center">
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-xl shadow-sm border border-gray-300">
          <FaSearch className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Search mail"
            className="flex-1 bg-transparent outline-none text-gray-700"
          />
        </div>
      </div>

   
      <div className="flex items-center gap-3 ml-4">
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          U
        </div>
        <span className="text-gray-800 font-medium">User</span>

        <button onClick={logoutHandler}className="flex items-center text-gray-800 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer space-x-2">
          <FaSignOutAlt className="text-gray-600" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
