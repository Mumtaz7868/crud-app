import React from "react";
import { useState } from "react";
import Modal from "./Modal";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  console.log(data, "dashboard");

  return (
    <div className="p-3">
      <button
        onClick={() => setIsOpen(true)}
        className="text-black text-2xl p-2 rounded-md float-right bg-yellow-400 hover:bg-yellow-600 font-bold"
      >
        Add Product
      </button>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} setData={setData} />
      )}

      <div className="flex gap-4 flex-wrap mt-16 mx-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
          >
            <img
              className="w-full h-48 object-cover"
              src={item.image}
              alt="image here"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.subtitle}</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
            <div className="flex justify-between m-2">
              <button>Delete</button>
              <button>update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
