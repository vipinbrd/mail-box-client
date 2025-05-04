import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Url } from "./URL";
import { useState } from "react";

export function MailDetails() {
  const allMails = useSelector((state) => state.allMail);
  const { mailId } = useParams();
  const [toast, setToast] = useState("");

  const currentMail = allMails.find((ele) => ele.id == mailId);

  if (!currentMail) {
    return <p>Mail not found!</p>;
  }

  function markAsReadhandler(id) {
    fetch(`${Url}/mail/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setToast("Marked As Read");

        setTimeout(() => {
          setToast("");
        }, 2000); // Toast disappears after 2 seconds
      }
    });
  }

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg relative">

      {/* Toast message positioned at the bottom-right corner */}
      {toast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow z-50">
          {toast}
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Mail Details</h1>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => alert("Reply functionality")}
          >
            Reply
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={() => alert("Delete functionality")}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-lg font-medium text-gray-600">From:</div>
        <p className="text-xl font-semibold text-gray-800">{currentMail.senderEmail}</p>
      </div>

      <div className="mb-4">
        <div className="text-lg font-medium text-gray-600">Subject:</div>
        <p className="text-xl font-semibold text-gray-800">{currentMail.subject}</p>
      </div>

      <div className="mb-4">
        <div className="text-lg font-medium text-gray-600">Date:</div>
        <p className="text-xl font-semibold text-gray-800">
          {new Date(currentMail.timestamp).toLocaleString()}
        </p>
      </div>

      <div className="mb-4">
        <div className="text-lg font-medium text-gray-600">Body:</div>
        <div
          className="text-base text-gray-700 whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: currentMail.body }}
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          disabled={currentMail.read}
          className={`px-4 py-2 text-white rounded-md transition ${
            currentMail.read
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
          onClick={() => markAsReadhandler(currentMail.id)}
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
}
