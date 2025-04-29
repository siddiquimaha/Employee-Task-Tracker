import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState({
    title: '',
    details: '',
    assign: '',
    dueDate: '',
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/usertasks/${id}`);
        setTaskData(response.data)
        // const { title, details, assign, dueDate } = response.data;
        // setTaskData({ title, details, assign, dueDate: dueDate.slice(0, 10) });
      } catch (err) {
        console.error('Failed to get current task', err);
      }
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/usertasks/${id}`, taskData);
      alert("congratulations data updated ");
      navigate('/dashboard/todo');
    } catch (err) {
      console.error('Update failed in put verb', err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-grey-100">
      <div className="bg-white p-5 pt-1 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-center text-gray-700">Update Task</h1>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="title">Task Title</label>
            <input id="title" type="text" name="title" value={taskData.title} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="details">Task Details</label>
            <textarea id="details" name="details" value={taskData.details} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4"></textarea>
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="assign">Assign To</label>
            <input id="assign" type="text" name="assign" value={taskData.assign} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="dueDate">Due Date</label>
            <input id="dueDate" type="date" name="dueDate" value={taskData.dueDate} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div className="text-center">
            <button type="submit"
              className="bg-slate-600 text-white px-4 py-2 mt-1 rounded hover:bg-blue-600 transition-all duration-300">
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
