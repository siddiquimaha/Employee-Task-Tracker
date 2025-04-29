import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddTask() {
    const navigate = useNavigate();
const [taskData, setTaskData]=useState(
    {
    title : '',
    details: '',
    assign: '',
    dueDate: '',
})
//mongodb start
const handleChange = (e) => { 
    setTaskData({
        ...taskData,[e.target.name] : e.target.value,
    });
};

const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(taskData)
    alert("task added in todo task in client side")
    setTaskData({title : '', details: '', assign: '', dueDate: ''});
    //for saving mongodb
    try {
        const res = await axios.post('http://localhost:5000/api/usertasks', taskData); 
        console.log(res.data);
  
        if (res.status === 200 || res.status === 201) {
          console.log('Task added successfully in mongodb');
          navigate('/dashboard/todo');
        } else {
          console.error('Error adding task');
        }
        
      } catch (error) {
        console.error('Error:', error);
      }
};
//mongodb storing data end

//store in localstorage
// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(taskData);
//   alert("task added in todo task on client side");

//   // Save task data to localStorage
//   let existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   existingTasks.push(taskData);
//   localStorage.setItem("tasks", JSON.stringify(existingTasks));

//   setTaskData({ title: '', details: '', assign: '', dueDate: '' });
//   navigate('/dashboard/todo');
// };
//store end in localstorage

  return (
    // <div className="min-h-screen flex justify-center items-center bg-grey-100">
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 sm:px-6">

      <div className="bg-white p-5 pt-1 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-2 text-center text-gray-700">Add New Task</h1>
        <form className="space-y-2" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="title">Task Title</label>
            <input id="title" type="text" placeholder="Enter task title" name='title' value={taskData.title} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="details">Task Details</label>
            <textarea id="details" placeholder="Enter task details" name='details' value={taskData.details} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="assign">Assign To</label>
            <input id="assign" type="text" placeholder="Enter person's name" name='assign' value={taskData.assign} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="dueDate">Due Date</label>
            <input id="dueDate" type="date" name='dueDate' value={taskData.dueDate} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div className="text-center">
            <button type="submit"
              className="bg-slate-600 text-white px-4 py-2 mt-1 rounded hover:bg-blue-600 transition-all duration-300">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

