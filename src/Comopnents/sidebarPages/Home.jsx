import React, { useEffect, useState } from "react";
import { fetchData,updateData ,addData, deleteData } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../store/slices/modalSlice";
import loaderApp from "../loader";
const Home = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const initialState = {
    title: "",
    body: "",
    userId: "",
  };
  const [user, setUser] = useState(initialState);
  const data = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const open = useSelector((state) => state.modal.modal);

  const AddData = () => {
    dispatch(openModal());
  };
  const updatedData = () => {
    setIsEdit(true);
    dispatch(openModal());
  };

  const handleChange = (e) => {
    console.log("object");
    const { name, value } = e.target;
    setUser((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      const updateObject ={
        id: 1,
        title: user.title,
        body: user.body,
        userId: user.userId,
      }
     dispatch(updateData(updateObject))
      setIsEdit(false);
      setUser(initialState);
    } else {
     const addObj ={
      title: user.title,
      body: user.body,
      userId: user.userId,
     }
     dispatch(addData(addObj))
    }
    dispatch(closeModal());
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="">
      {loading && <p>loading.....</p>}
      <div className="mt-4 text-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-2"
          onClick={AddData}
        >
          Add
        </button>
        <button
          onClick={updatedData}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-2"
        >
          Update
        </button>
        <button
          onClick={()=>dispatch(deleteData())}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Delete
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            onClick={() => {
              dispatch(closeModal());
            }}
            className="fixed inset-0 bg-black opacity-50 cursor-pointer"
          ></div>
          <div className="bg-white p-4 z-10 rounded-md">
            <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                {isEdit ? "Edit" : "Add"} Product
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-gray-600">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={user.title}
                    onChange={handleChange}
                    autoComplete="true"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subtitle" className="block text-gray-600">
                    body
                  </label>
                  <input
                    type="tel"
                    name="body"
                    value={user.body}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block text-gray-600">
                    UserId
                  </label>
                  <input
                    type="text"
                    name="userId"
                    value={user.userId}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
