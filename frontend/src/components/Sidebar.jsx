import { Link } from 'react-router-dom';
import './Sidebar.css'; // optional styling

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/dashboard/addtask">Add Task</Link></li>
        <li><Link to="/dashboard/profile">Profile</Link></li>
        <li><Link to="/dashboard/todo">Todo Task</Link></li>
        <li><Link to="/dashboard/pending">Pending Task</Link></li>
        <li><Link to="/dashboard/process">Completed Task</Link></li>
        
      </ul>
    </div>
    </>

  );
}

