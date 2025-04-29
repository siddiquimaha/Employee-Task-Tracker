import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './App.css';
import App from './App';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import Profile from './pages/dashboard/Profile';
import Pending from './pages/dashboard/Pending';
import Completed  from './pages/dashboard/Completed';
import AddTask from './pages/dashboard/AddTask';
import Todo from './pages/dashboard/Todo';
import Update from './pages/dashboard/Update';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter ([
  {path : '/', element : <App/>},
  {path : 'register', element : <Signup/>},
  {path : 'login', element : <Login/>},
  {path : '/dashboard', element : <DashboardLayout/>, 
  // {path : 'edit/:id', element : <Update/>},
  children: [
    { path: 'profile', element: <Profile/>},
    { path: 'pending', element: <Pending/>},
    { path: 'process', element: <Completed/>},
    {path: 'addtask', element: <AddTask/>},
    {path: 'todo', element: <Todo/>},
    {path: 'edit/:id', element: <Update/>},

  ]
}
]);

root.render(
  <React.StrictMode>
    <RouterProvider router = {allRoutes}/>
  </React.StrictMode>
);

// reportWebVitals();
