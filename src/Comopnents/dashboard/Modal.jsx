import React from "react";
import AddProductForm from "./AddProdcutform";

const Modal = ({ formData, setFormData, handleSubmit, isEdit, setIsOpen }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          onClick={() => setIsOpen(false)}
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
