import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CardDetailPage = () => {
  const data = useSelector((state) => state.data.data);
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedItem = data.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-5xl font-bold">Item not found</p>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-96 rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-48 object-cover"
          src={selectedItem.image}
          alt="image here"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{selectedItem.title}</div>
          <p className="text-gray-700 text-base">{selectedItem.subtitle}</p>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{selectedItem.description}</p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md float-right m-2"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default CardDetailPage;
