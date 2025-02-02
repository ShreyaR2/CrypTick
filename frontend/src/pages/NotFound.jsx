import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-700">404</h1>
      <p className="text-lg text-gray-500 mt-2">Oops! You didnt have enough sepolia :)</p>
      <Link to="/home" className="mt-4 px-6 py-2 text-white bg- rounded-lg shadow-md hover:bg-blue-700 transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
