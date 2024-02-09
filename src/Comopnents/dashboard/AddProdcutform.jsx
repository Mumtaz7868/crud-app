import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../store/slices/formSlice";
const AddProductForm = ({ handleSubmit, isEdit }) => {
  const dispatch = useDispatch();
  const getUserData = useSelector((state) => state.formData.formData);
  console.log(getUserData, "getUserData");

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ ...getUserData, [name]: value }));
  };

  return (
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
            id="title"
            value={getUserData.title}
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
            id="subtitle"
            value={getUserData.subtitle}
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
            id="image"
            name="image"
            value={getUserData.image}
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
            id="description"
            name="description"
            value={getUserData.description}
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
  );
};

export default AddProductForm;
