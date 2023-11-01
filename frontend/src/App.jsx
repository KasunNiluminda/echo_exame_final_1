import React from "react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import ForgotPw from "./components/forgot-password";
import ResetPw from "./components/reset-password";
import Aboutus from "./components/aboutus";
import StudentLogin from "./components/student-login";
import CameraCheck from "./components/camera-check";
import VoiceCheck from "./components/voice-check";
import LmsDashboard from "./components/lms-dashboard";
import AllCameras from "./components/all-cameras";
import AddQuiz from "./components/add-quiz";
import AnswerQuestion from "./components/answer-question";
import QuizHistory from "./components/quiz-history";
import LectureHome from "./components/lecture-home";
import Userallcameras from './components/user-cameras'
import SingleView from "./components/single-view";
import Sidebar from "./components/dashboard/sidebar";
import QuizPending from "./components/quiz-pending";
import Assist from "./components/assist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpw" element={<ForgotPw />} />
        <Route path="/resetpw" element={<ResetPw />} />
        <Route path="/dashboard" element={<Sidebar />} /> 

        <Route path="/about" element={<Aboutus />} />
        <Route path="/stu-login" element={<StudentLogin />} />        
        <Route path="/camera-check" element={<CameraCheck />} />        
        <Route path="/voice-check" element={<VoiceCheck />} />        
        <Route path="/lms-dashboard" element={<LmsDashboard />} /> 
        <Route path="/answer-q" element={<AnswerQuestion />} />

        <Route path="/all-cameras" element={<AllCameras />} /> 
        <Route path="/user-allcameras" element={<Userallcameras />} />                
        <Route path="/single-view" element={<SingleView />} />       
        <Route path="/add-quiz" element={<AddQuiz />} />               
        <Route path="/quiz-history" element={<QuizHistory />} />     
        <Route path="/quiz-pending" element={<QuizPending />} />        
        <Route path="/lecturehome" element={<LectureHome />} />                                       
      </Routes>
      <Assist />
    </BrowserRouter>
  );
}

export default App;
