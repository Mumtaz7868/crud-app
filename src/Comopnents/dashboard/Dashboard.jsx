import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData, editData, deleteData } from "../../store/slices/dataSlice";
import { closeModal, openModal } from "../../store/slices/modalSlice";
import { setFormData } from "../../store/slices/formSlice";
const initialData = {
  title: "",
  subtitle: "",
  image: "",
  description: "",
};
const Dashboard = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);

  const dispatch = useDispatch();

  const usersData = useSelector((state) => state.data.data);
  const open = useSelector((state) => state.modal.modal);
  const getFormData = useSelector((state) => state.formData.formData);

  console.log(getFormData, "getFormData");

  const handleDelete = (id) => {
    const remainingData = usersData.filter((item) => item.id !== id);
    dispatch(deleteData(remainingData));
  };
  const handleEdit = (item) => {
    setIsEdit(true);
    setId(item.id);
    const editData = {
      title: item.title,
      subtitle: item.subtitle,
      image: item.image,
      description: item.description,
    };
    dispatch(setFormData(editData));
    dispatch(openModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      const updatedData = usersData.map((item) =>
        item.id === id ? { ...item, ...getFormData } : item
      );
      dispatch(editData(updatedData));
      setIsEdit(false);
      dispatch(setFormData(initialData));
    } else {
      const newObject = {
        id: new Date().getTime(),
        ...getFormData,
      };
      dispatch(setData([...usersData, newObject]));
    }
    dispatch(closeModal());
  };

  return (
    <div className="p-3">
      <button
        onClick={() => dispatch(openModal())}
        className="text-black text-2xl p-2 rounded-md float-right bg-yellow-400 hover:bg-yellow-500 font-bold"
      >
        Add Product
      </button>
      {open && <Modal handleSubmit={handleSubmit} isEdit={isEdit} />}

      <div className="flex gap-4 flex-wrap mt-16 mx-5">
        {usersData.map((item) => (
          <div
            key={item.id}
            className="max-w-sm w-80 rounded overflow-hidden shadow-lg"
          >
            <Link to={`/card/${item.id}`}>
              <img
                className="w-full h-48 object-cover"
                src={item.image}
                alt="image here"
              />
            </Link>
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
