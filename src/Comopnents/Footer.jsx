import React from "react";

const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <div className="flex justify-center bg-yellow-400 ml-60">
      <p className="text-2xl ">© {year} All Rights Reserved</p>
    </div>
  );
};

export default Footer;
