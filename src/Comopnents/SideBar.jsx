import React from "react";
import { Link } from "react-router-dom";
import {
  faHouse,
  faUser,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/download.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SideBar = () => {
  return (
    <div className="bg-gray-800 h-screen w-60 text-white p-4 fixed top-0">
      <img className="rounded-lg h-10 mr-1" src={logo} alt="Logo here" />

      <ul className="mt-8">
        <Link
          to="/home"
          className="flex items-center m-2 hover:bg-gray-900 rounded-md p-2"
        >
          <FontAwesomeIcon size="1x" icon={faHouse} />
          <li className="ml-4">Home</li>
        </Link>
        <Link className="flex items-center m-2 hover:bg-gray-900 rounded-md p-2">
          <FontAwesomeIcon size="1x" icon={faUser} />
          <li className="ml-4">About</li>
        </Link>
        <Link className="flex items-center m-2 hover:bg-gray-900 rounded-md p-2 ">
          <FontAwesomeIcon size="1x" icon={faAddressBook} />
          <li className="ml-4">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
