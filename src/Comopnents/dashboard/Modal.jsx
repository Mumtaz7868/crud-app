import React from "react";
import AddProductForm from "./AddProdcutform";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/slices/modalSlice";

const Modal = ({ formData, setFormData, handleSubmit, isEdit }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          onClick={() => dispatch(openModal(false))}
          className="fixed inset-0 bg-black opacity-50 cursor-pointer"
        ></div>
        <div className="bg-white p-4 z-10 rounded-md">
          <AddProductForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isEdit={isEdit}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
