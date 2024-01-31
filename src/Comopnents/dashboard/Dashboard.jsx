import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const initialData = {
  id: new Date().getTime(),
  title: "",
  subtitle: "",
  image: "",
  description: "",
};
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const [formData, setFormData] = useState(initialData);

  const handleDelete = (id) => {
    const remainingData = data.filter((item) => item.id !== id);
    setData(remainingData);
  };

  const handleEdit = (item) => {
    setIsEdit(true);
    setId(item.id);
    const editData = {
      title: data.title,
      subtitle: data.subtitle,
      image: data.image,
      description: data.description,
    };
    setFormData(editData);
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, ...formData } : item
      );
      setData(updatedData);
    } else {
      setFormData(initialData);
      const newObject = {
        ...formData,
      };
      setData((prevVal) => [...prevVal, newObject]);
    }
    setIsOpen(false);
  };
  console.log("data", data);

  return (
    <div className="p-3">
      <button
        onClick={() => setIsOpen(true)}
        className="text-black text-2xl p-2 rounded-md float-right bg-yellow-400 hover:bg-yellow-500 font-bold"
      >
        Add Product
      </button>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          setFormData={setFormData}
          formData={formData}
          handleSubmit={handleSubmit}
          isEdit={isEdit}
        />
      )}

      <div className="flex gap-4 flex-wrap mt-16 mx-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="max-w-sm w-80 rounded overflow-hidden shadow-lg"
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
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mr-2"
              >
                Delete
              </button>

              <button
                onClick={() => handleEdit(item)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
