import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Url } from "./URL";
import { Authstore } from "./store/AuthProvider";

export function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [toast, setToast] = useState("");
  const navigate = useNavigate();
  const {authInfo,setAuthInfo}=useContext(Authstore)
  console.log(authInfo)

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  }

  async function loginHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;

    if (!email.includes("@") || !email.includes(".") || password.length < 6) {
      showToast("Invalid email or password");
      return;
    }

    const data = {
      username: email,
      password: password
    };

    try {
      const res = await fetch(`${Url}/user/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.ok) {
        showToast("Login successful");
        const response=await res.json();
         setAuthInfo(response);
         localStorage.setItem("userInfo",JSON.stringify(response))
        
        navigate("/inbox");
      } else {
        showToast("Invalid credentials");
      }
    } catch (error) {
      showToast("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] relative">
{toast && (
  <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg z-50">
    {toast}
  </div>
)}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h1>

        <form onSubmit={loginHandler} className="space-y-4">
          <input
            type="email"
            ref={emailRef}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-600 space-y-2">
          <div>
            Don’t have an account?{" "}
            <Link to="signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </div>
          <div>
            <Link to="forget" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
