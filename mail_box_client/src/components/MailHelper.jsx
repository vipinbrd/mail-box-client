import { useContext, useEffect, useState } from "react";
import { Url } from './URL';
import { useDispatch, useSelector } from "react-redux";
import { replaceMessages } from "./store/AllMailReducer";
import { replaceDraftBox,deletefromDraft } from "./store/DraftReducer";
import { replaceInbox ,} from "./store/InboxReducer";
import { replaceSentBox,deletefromSent } from "./store/SentReducer";
import { replaceTrashBox,deletefromTrash } from "./store/TrashReducer";
import { Authstore } from "./store/AuthProvider";
import { FaStar, FaRegStar, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function formatDateTime(localDateTimeString) {
  const date = new Date(localDateTimeString);
  return date.toLocaleString();
}

function stripHtmlTags(html) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
}

export function MailHelper({type}) {
  const { authInfo } = useContext(Authstore);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mails = useSelector((state) => state[type]);
  const[toast,setToast]=useState();
  console.log(mails)




  async function handleDelete(mailId) {
    await fetch(`${Url}/mail/remove/${mailId}`, {
      method: "DELETE",
    });
    setToast("Conversation Deleted")
    setTimeout(()=>{
      setToast("")
    },1500)
    
    if(type=="trashMail"){
        dispatch(deletefromTrash(mailId))
     
    }
    else if(type=="draftMail"){
   dispatch(deletefromDraft(mailId));
    }

    else{
        dispatch(deletefromSent(mailId))
    }


  }

  return (
    <div className="max-w-4xl mx-auto p-4 pt-16">
      
      {toast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow z-50">
          {toast}
        </div>
      )}

      {mails.length === 0 && (
        <p className="text-center text-gray-500">No Mail Here</p>
      )}
      <ul className="space-y-4">
        {mails.length>0 &&
         mails.map((mail) => {
            const bodyPreview = stripHtmlTags(mail.body).slice(0, 100) + "...";
            return (
              <li
                key={mail.id}
                className={`rounded-xl shadow p-4 flex justify-between items-start hover:bg-gray-50 cursor-pointer transition ${
                  !mail.read ? "bg-blue-50" : "bg-white"
                }`}
                onClick={() => navigate(`/mail/${mail.id}`)}
              >
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center space-x-2">
                      {!mail.read && (
                        <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                      )}
                      <h3
                        className={`font-semibold text-lg ${
                          !mail.read ? "text-black" : "text-gray-800"
                        }`}
                      >
                        {mail.subject}
                      </h3>
                    </div>
                    <span className="text-sm text-gray-500">
                      {formatDateTime(mail.timestamp)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-1">{mail.sender}</p>
                  <p className="text-gray-700 text-sm">{bodyPreview}</p>
                </div>
                <div
                  className="ml-4 flex flex-col items-center space-y-2 z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="text-yellow-400 hover:text-yellow-500">
                    {mail.starred ? <FaStar /> : <FaRegStar />}
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(mail.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
