import { FaInbox, FaStar, FaRegFile, FaPaperPlane, FaTrashAlt, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="w-48 h-screen bg-gradient-to-r from-gray-200 to-gray-300 p-4 sticky top-[64px] left-0 z-20 shadow-lg rounded-r-lg flex flex-col gap-6">
     <Link to='compose'>
      <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium flex items-center gap-2 px-3 py-2 rounded-md shadow-md text-sm transition-all duration-200">
  <FaPen className="text-white text-sm" />
  <span>Compose</span>
</button>
</Link>

      {/* Navigation List */}
      <ul className="space-y-4">
        <li className="text-gray-800 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer flex items-center space-x-3">
          <FaInbox className="text-gray-600" />
         <Link to='inbox'> <span>Inbox</span></Link>
        </li>
        <li className="text-gray-800 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer flex items-center space-x-3">
          <FaStar className="text-yellow-500" />
          <span>Starred</span>
        </li>
        <li className="text-gray-800 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer flex items-center space-x-3">
          <FaRegFile className="text-gray-600" />
          <span>Draft</span>
        </li>
        <li className="text-gray-800 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer flex items-center space-x-3">
          <FaPaperPlane className="text-blue-600" />
          <span>Sent</span>
        </li>
        <li className="text-gray-800 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer flex items-center space-x-3">
          <FaTrashAlt className="text-red-600" />
          <span>Trash</span>
        </li>
      </ul>
    </div>
  );
}
