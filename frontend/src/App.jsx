import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-3xl sm:text-3xl font-bold text-red-500 mb-4">
          Welcome to Saylani Employess Dashboard System
        </h2>
        <div className="space-x-4">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
