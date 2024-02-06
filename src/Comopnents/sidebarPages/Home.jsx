import React, { useEffect, useState } from "react";
import { fetchData, addData } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../store/slices/modalSlice";
import loaderApp from "../loader";
const Home = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    title: "",
    body: "",
    userId: "",
  });
  const data = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const adddata = useSelector((state) => state.user.addedData);

  const AddData = () => {
    dispatch(fetchData());
    dispatch(openModal());
  };
  const updatedData = () => {
    setIsEdit(true);
    dispatch(openModal());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((pre) => ({
      ...pre,
      [name]: value,
    }));
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
        ...getFormData,
      };
      dispatch(setData([...usersData, newObject]));
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
          AddData
        </button>
        <button
          onClick={updatedData}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-2"
        >
          UpdateData
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          DeleteData
        </button>
      </div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          onClick={() => dispatch(closeModal())}
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
                  SubTitle
                </label>
                <input
                  type="tel"
                  name="subtitle"
                  value={user.subtitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-600">
                  Image
                </label>
                <input
                  type="text"
                  name="image"
                  value={user.image}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  value={user.description}
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
    </div>
  );
};
export default Home;
