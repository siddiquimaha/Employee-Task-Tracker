import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const logout =() =>{
    navigate('/');  
  }

  return (
    <>
      <div className="flex min-h-screen">
      <Sidebar />
      <div className='flex-1 bg-gray-100'> {/* Add margin-left to account for sidebar */}
        <button onClick={logout} className="absolute top-5 right-5 bg-slate-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Logout
        </button>
        <Outlet />
      </div>
    </div>
    </>
  );
}
