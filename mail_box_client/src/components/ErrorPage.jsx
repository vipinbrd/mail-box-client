import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
