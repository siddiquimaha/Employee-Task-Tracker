import React from 'react';
import mahaimg from '../../assets/Maha.PNG';

export default function Profile() {
  return (
    <div className="ml-0 mr-0 md:ml-[270px] md:mr-[100px] h-full p-4 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full mx-wid-md">
        <h2 className="text-2xl font-semibold text-center mb-5">Profile</h2>
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex flex-col items-center flex-shrink-0 mt-14">
            <img
              src={mahaimg}
              alt="Profile"
              className="w-48 h-44 rounded-full object-cover mb-4"
            />
            <button className="bg-slate-600 text-white px-4 py-1 rounded hover:bg-blue-500 text-md mt-6">
              Upload
            </button>
          </div>

          {/* Info Section */}
          <div className="flex-1 space-y-3 text-md text-gray-700 p-2 rounded-lg">
            <div className="flex justify-start w-70 ml-24 p-1">
              <span className="font-semibold">Name:</span>
              <span className='ml-36'>Mahjabeen Siddiqui</span>
            </div>
            <div className="flex justify-start w-70 ml-24 p-1">
              <span className="font-semibold">Gender:</span>
              <span className='ml-36'>Female</span>
            </div>
            <div className="flex justify-start w-70 ml-24 p-1">
              <span className="font-semibold">Contact:</span>
              <span className='ml-36'>+92 3322392917</span>
            </div>
            <div className="flex justify-start w-70 ml-24 p-1">
              <span className="font-semibold">Email:</span>
              <span className='ml-36'>siddiqui.mahajabeen@gmail.com</span>
            </div>
            <div className="flex justify-start w-70 ml-24 p-1">
              <span className="font-semibold">Designation:</span>
              <span className='ml-36'>Developer</span>
            </div>
            <div className="flex justify-start w-70 ml-24 p-1">
              <span className="font-semibold">CNIC:</span>
              <span className='ml-36'>4210185862872</span>
            </div>

            <div className="text-start ml-24 mt-4 p-2 mb-0">
              <button className="bg-slate-600 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                Update Profile
              </button>
            </div>
          </div>
        </div>

        {/* Salary Download */}
        <div className="text-center mt-6">
          <span className="font-serif mr-4">Salary:</span>
          <button className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-500 text-sm">
            Download Salary PDF
          </button>
        </div>
      </div>
    </div>
  );
}
