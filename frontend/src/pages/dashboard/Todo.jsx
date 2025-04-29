import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
  //mongodb start
export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/usertasks')
//       .then(response => {
//         console.log("Task added successfully in mongodb", response.data);
//         setTasks(response.data); // Set the array of tasks
//       })
//     .catch (error => {
//       console.error('Error fetching tasks:', error);
//     });
// }, []);
//for alternate async await with axios and use IIFEE to write async bcoz we can not write async with useeffect its a hook 
useEffect(() => {
  ( async() => {
    try {
          setLoading(true)
          const response = await axios.get('http://localhost:5000/api/usertasks')
          setTasks(response.data)
          setLoading(false)
    } catch (error) {
      console.log("server side error", error)
      setLoading(false)
  
}
  })()
}, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6 ml-[270px]">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">Active Tasks Accessing from Mongodb through API :{tasks.length}</h2>
      {loading && (<h1>Loading...</h1>)}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task._id} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-blue-600 mb-2">{task.title}</h2>
                <button className="text-2xl text-white px-4 py-2 rounded-full">✅</button>
              </div>
              <p className="text-gray-700 mb-4">{task.details}</p>

              <div className="flex flex-col text-sm text-gray-600 space-y-1">
                <span><strong>Assigned To:</strong> {task.assign}</span>
              </div>
  
              <div className="flex items-center justify-between">
                <span><strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}</span>
                <Link to={`/dashboard/edit/${task._id}`}>
                <button className="p-1 bg-slate-600 text-white ml-4 rounded">Update
                </button>
                </Link>

              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600">No tasks available. Add a task to get started!</p>
        )}
      </div>
    </div>
  );

  //mongodb storage end

  //local storage start
  // const fetchTasks = () => {
  //   // Get tasks from localStorage
  //   const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
  //   const today = new Date();
  //   const activeTasks = storedTasks.filter(task => new Date(task.dueDate) >= today);
  
  //   setTasks(activeTasks);
  // };
    //local storage end
  //localstorage start
  // return (
  //   <div className="min-h-screen bg-gray-100 p-6 ml-[370px]">
  //     <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">All Active Tasks (To-Do)</h1>
  
  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //       {tasks.length > 0 ? (
  //         tasks.map((task, index) => (
  //           <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
  //             <div>
  //               <h2 className="text-xl font-semibold text-blue-600 mb-2">{task.title}</h2>
  //               <p className="text-gray-700 mb-4">{task.details}</p>
  //             </div>
  
  //             <div className="flex flex-col text-sm text-gray-600 space-y-1">
  //               <span><strong>Assigned To:</strong> {task.assign}</span>
  //               <span><strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}</span>
  //             </div>
  //           </div>
  //         ))
  //       ) : (
  //         <p className="ml-[250px] text-center col-span-3 text-gray-600">No tasks available. Add a task to get started! and todo task is working after adding something</p>
  //       )}
  //     </div>
  //   </div>
  // );
  
}
