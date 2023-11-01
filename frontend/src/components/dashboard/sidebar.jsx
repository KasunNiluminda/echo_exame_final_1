import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/images/Logo01.png";
import StudentComponent from "./students";
import ProctorsComponent from "./proctors";
import ExamsComponent from "./exams";
import ProfileSettingsComponent from "./profile";
import { logout, reset } from '../../features/auth/authSlice'

function Sidebar() {
    const [selectedContent, setSelectedContent] = useState("students"); // Set the default content to "students"

    const handleLinkClick = (content) => {
      setSelectedContent(content);
    };

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = async () => {
      await dispatch(logout());
      dispatch(reset())
      navigate('/login')
    }

  return (
    <div className="bg-accent">
        <div className="justify-between bg-primary flex">
          <div>
            <img className="h-32 py-6 pl-10" src={Logo} alt="Logo" />
          </div>
          <div>
            <h5 className="text-white capitalize pt-10 pr-12">
              SLIIT exam dashboard
            </h5>
          </div>
        </div>
      <div className="grid grid-cols-8">
        <div className="bg-secondary text-black col-span-1 h-screen border-e">
          <ul className="space-y-5 capitalize font-semibold text-xl">
            <li className="border-b-2">
              <Link
                to="#"
                className="block hover:text-gray-300 p-4"
                onClick={() => handleLinkClick("students")}>
                Students
              </Link>
            </li>
            <li className="border-b-2">
              <Link
                to="#"
                className="block hover:text-gray-300 p-4"
                onClick={() => handleLinkClick("proctors")}>
                Proctors
              </Link>
            </li>
            <li className="border-b-2">
              <Link
                to="#"
                className="block hover:text-gray-300 p-4"
                onClick={() => handleLinkClick("exams")}>
                Exams
              </Link>
            </li>
            <li className="border-b-2">
              <Link
                to="#"
                className="block hover:text-gray-300 p-4"
                onClick={() => handleLinkClick("profileSettings")}>
                Profile Settings
              </Link>
            </li>
            <li className="border-b-2">
              <div
                style={{cursor: 'pointer'}}
                className="block hover:text-gray-300 p-4"
                onClick={onLogout}>
                Logout
              </div>
            </li>
          </ul>
        </div>
      <div className="p-4 col-span-6">
        {selectedContent === "students" && <StudentComponent />}
        {selectedContent === "proctors" && <ProctorsComponent />}
        {selectedContent === "exams" && <ExamsComponent />}
        {selectedContent === "profileSettings" && <ProfileSettingsComponent />}
      </div>
      </div>
    </div>
  );
}

export default Sidebar;
