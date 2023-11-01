import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from "react-router-dom";
import Popup from "../popups/addquiz";
import { toast } from 'react-toastify'
import { logout, reset } from '../features/auth/authSlice'
import SignoutIcon from "../assets/images/signout.png";
import "../App.css";

function lectureHome() {
  const [showQuizPopup, setShowQuizPopup] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {
    const allFieldsFilled =
      subjectCode && subjectName && startDate && startTime && endTime;
    setFormValid(allFieldsFilled);
  };
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  /////////////////////////////////////////////////////////

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = async () => {
    await dispatch(logout());
    dispatch(reset())
    navigate('/login')
  }

  if(!user) {
    navigate('/login')
  }
  ////////////////////////////////////////////////


  return (
    <>
      <div>
        <div className="flex py-14 px-20 justify-end">
          <div>
            <h4 className="capitalize text-primary">Lecture Name</h4>
            <div className="flex logout" onClick={onLogout}>
              <img src={SignoutIcon} className="h-8" />
              <p className="text-primary font-semibold">Sign out</p>
            </div>
          </div>
        </div>
        <div className="h-[3px] bg-primary w-full"></div>
        <div className="container mx-auto mt-16">
          <Link
            onClick={() => setShowQuizPopup(true)}
            to="#"
            className="flex justify-center py-6 rounded-t-3xl rounded-bl-3xl mx-32 bg-primary">
            <h4 className="text-white capitalize text-center">add quiz</h4>
          </Link>
          <Link
            to="/quiz-pending"
            className="flex mt-10 justify-center py-6 rounded-t-3xl mx-32 rounded-bl-3xl bg-primary">
            <h4 className="text-white capitalize text-center">pending quiz</h4>
          </Link>
          <Link
            to="#"
            className="flex justify-center py-6 mt-10 rounded-t-3xl rounded-bl-3xl mx-32 bg-primary">
            <h4 className="text-white capitalize text-center">quiz history</h4>
          </Link>
          <Link
            to="#"
            className="flex justify-center py-6 mt-10 rounded-t-3xl rounded-bl-3xl mx-32 bg-primary">
            <h4 className="text-white capitalize text-center">Monitoring</h4>
          </Link>
          <Link
            to="#"
            className="flex justify-center py-6 mt-10 rounded-t-3xl rounded-bl-3xl mx-32 bg-primary">
            <h4 className="text-white capitalize text-center">Past Papers</h4>
          </Link>
        </div>
      </div>
      <Popup trigger={showQuizPopup}>
        {/* Your form component or content goes here */}
        {/* For example: */}
        <form action="" className="text-left">
          <h5 className="mb-10">Create a Quiz</h5>
          
          <label htmlFor="set-date">Set date:</label>
          <input
            value={setStartDate}
            onChange={(e) => {
              setSubjectCode(e.target.value);
              validateForm();
            }}
            type="date"
            placeholder="00 : 00"
            className="w-40 bg-transparent ml-16 mb-5 border-b border-b-[#000000]"
          />
          <br />
          <label htmlFor="set-start-time">Set start time:</label>
          <input
            value={setStartTime}
            onChange={(e) => {
              setSubjectCode(e.target.value);
              validateForm();
            }}
            type="time"
            placeholder="00 : 00"
            className="w-40 bg-transparent ml-7 mb-5 border-b border-b-[#000000]"
          />
          <br />
          <label htmlFor="set-end-time">Set end time:</label>
          <input
            value={setEndTime}
            onChange={(e) => {
              setSubjectCode(e.target.value);
              validateForm();
            }}
            type="time"
            placeholder="00 : 00"
            className="w-40 mb-10 bg-transparent ml-9 border-b border-b-[#000000]"
          />
          <br />
          <Link
            to="/add-quiz"
            className="bg-primary rounded-3xl px-4 py-2  text-white"
            onClick={(e) => {
              if (!formValid) {
                e.preventDefault();
                setErrorMessageVisible(true);
              }
            }}>
            Submit
          </Link>
          {errorMessageVisible && (
            <small className="text-white font-semibold bg-[#ff0000] p-3 ml-10 rounded-2xl">
              Please fill in all required fields before submitting
            </small>
          )}
        </form>
      </Popup>
    </>
  );
}

export default lectureHome;
