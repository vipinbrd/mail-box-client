import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Url } from "./URL";

export function Signup() {
  const [isOtp, setIsOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [sendingOtp, setSendingOtp] = useState(false);
  const [toast, setToast] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate();

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(""), 1500);
  }

  function signupHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (email.length === 0 || !email.includes("@") || !email.includes(".")) {
      showToast("Please provide a valid email.");
      return;
    }

    if (password.length < 6) {
      showToast("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      showToast("Confirm password and password must be the same!");
      return;
    }

    if (!isOtp) {
      sendOtp(email);
    } else {
      const data = { email, password };
      doSignUPProcess(data);
    }
  }

  function sendOtp(email) {
    setSendingOtp(true);

    fetch(`${Url}/send/${email}`)
      .then((res) => {
        if (res.ok) {
          showToast("OTP successfully sent to your Email");
          setIsOtp(true);
        } else {
          showToast("Failed to send OTP. Try again.");
        }
      })
      .catch(() => {
        showToast("Network error while sending OTP.");
      })
      .finally(() => {
        setSendingOtp(false);
      });
  }

  function doSignUPProcess(data) {
    fetch(`${Url}/user?otp=${otp}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          showToast("Signup Successful");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        } else {
          showToast("Signup failed. Check OTP or try again.");
        }
      })
      .catch(() => {
        showToast("Server error during signup.");
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-8 rounded-xl shadow-xl bg-white/70 backdrop-blur-sm border border-gray-200 max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Sign Up
        </h1>
        {toast && (
          <p className="text-center mb-4 px-4 py-2 rounded-md bg-blue-100 text-blue-800 border border-blue-300 shadow-sm">
            {toast}
          </p>
        )}

        <form onSubmit={signupHandler} className="flex flex-col gap-4">
          <input
            type="email"
            ref={emailRef}
            placeholder="Email"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isOtp}
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isOtp}
          />
          <input
            type="password"
            ref={confirmPasswordRef}
            placeholder="Confirm Password"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isOtp}
          />
          {isOtp && (
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <button
            type="submit"
            disabled={sendingOtp}
            className={`py-3 rounded-md transition text-white ${
              sendingOtp
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {sendingOtp ? "Sending OTP..." : isOtp ? "Sign Up" : "Get OTP"}
          </button>
        </form>

        <Link to="/login">
          <button className="mt-4 text-sm text-blue-600 hover:underline w-full text-center">
            Already have an account? Login
          </button>
        </Link>
      </div>
    </div>
  );
}
