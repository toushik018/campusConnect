import React, { useState, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaMapSigns, FaMoneyCheck, FaRobot, FaSchool, FaUsers } from 'react-icons/fa';
import { MdAddLocationAlt, MdPostAdd } from "react-icons/md";
import { AuthContext } from '../Providers/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      {/* Hamburger menu button */}
      {!isOpen && (
        <div className="md:hidden fixed top-0 left-0 m-4 z-50">
          <button
            className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleNav}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-48 bg-gray-400 shadow-lg z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-300 ease-in-out `}
      >
        <div className="flex justify-between items-center px-4 py-6">
          <button
            className="p-2 text-white focus:outline-none md:hidden"
            onClick={toggleNav}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="px-4 py-2 text-start mt-4">
          <ul>
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 py-2 pl-4 text-lg text-white transition-colors duration-300 hover:bg-blue-700 hover:rounded-lg hover:text-white"
              >
                <FaHome />
                Home
              </Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link
                    to="/dashboard/addcollege"
                    className="flex items-center gap-2 py-2 pl-4 text-white transition-colors duration-300 hover:bg-blue-700 hover:rounded-lg hover:text-white"
                  >
                    <FaSchool />
                    Add Colleges
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/allusers"
                    className="flex items-center gap-2 py-2 pl-4 text-white transition-colors duration-300 hover:bg-blue-700 hover:rounded-lg hover:text-white"
                  >
                    <FaUsers />
                    All Users
                  </Link>
                </li>                
              </>
            )}
          </ul>
        </nav>
      </div>

     <div className='ml-0 md:ml-32'>
     <Outlet></Outlet>
     </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-black opacity-25 z-30"
          onClick={toggleNav}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
