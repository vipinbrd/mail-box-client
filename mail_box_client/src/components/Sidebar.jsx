import { FaInbox, FaStar, FaRegFile, FaPaperPlane, FaTrashAlt, FaPen } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Sidebar() {
  const inbox=useSelector((state)=>state.inboxMail);
  let unreadMeassge=0;
  inbox.forEach((ele)=>{
    if(!ele.read)unreadMeassge++;
  })
  return (
    <div className="w-48 h-[calc(100vh-4rem)] sticky top-16 bg-gradient-to-r from-gray-200 to-gray-300 p-4 z-20 shadow-lg rounded-r-lg flex flex-col gap-6">
    {/* Compose Button */}
    <Link to="compose">
      <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium flex items-center gap-2 px-3 py-2 rounded-md shadow-md text-sm transition-all duration-200">
        <FaPen className="text-white text-sm" />
        <span>Compose</span>
      </button>
    </Link>

      {/* Navigation List */}
      <ul className="space-y-4">
      <li className="text-gray-800 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer flex items-center space-x-3 relative">
  <FaInbox className="text-gray-600" />
  <Link to="inbox" className="relative flex items-center">
    <span>Inbox</span>
    {unreadMeassge > 0 && (
      <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-3">
        {unreadMeassge}
      </span>
    )}
  </Link>
</li>
        <li className="text-gray-800 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer flex items-center space-x-3">
          <FaStar className="text-yellow-500" />
          <span>Starred</span>
        </li>
        <li className="text-gray-800 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer flex items-center space-x-3">
          <FaRegFile className="text-gray-600" />
          <Link to='draft'> <span>Draft</span></Link>
        </li>
        <li className="text-gray-800 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer flex items-center space-x-3">
          <FaPaperPlane className="text-blue-600" />
         <Link to='sent'><span>Sent</span></Link> 
        </li>
        <li className="text-gray-800 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer flex items-center space-x-3">
          <FaTrashAlt className="text-red-600" />
         <Link to="trash"><span>Trash</span></Link>  
        </li>
      </ul>
    </div>
  );
}
