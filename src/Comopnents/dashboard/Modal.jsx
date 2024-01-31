import React from "react";
import AddProductForm from "./AddProdcuform";

const Modal = ({ isOpen, setIsOpen, setData }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-white opacity-50"></div>
        <div className="bg-white p-4 z-10 rounded-md">
          <AddProductForm
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setData={setData}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
