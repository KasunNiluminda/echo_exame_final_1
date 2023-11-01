// import React, { useState } from "react";
// import "../App.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import Axios
// import Logo from "../assets/images/Logo01.png";
// import { Link } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Create an object with the login data
//     const loginData = {
//       email: email,
//       password: password, // Add the password field to the loginData object
//     };

//     // Replace 'YOUR_API_ENDPOINT' with the actual endpoint where you want to handle the login request
//     axios
//       .post("/api/login", loginData)
//       .then((response) => {
//         // Handle the successful response here, such as storing tokens or updating the application state
//         console.log("Login successful!", response.data);
//         // Navigate to the home page after successful login
//         history.push("/user-org");
//       })
//       .catch((error) => {
//         // Handle the error response here, such as displaying error messages to the user
//         console.error("Login failed:", error.message);
//       });
//   };

import React, { useState, useEffect } from 'react'
import "../App.css";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Logo from "../assets/images/Logo01.png";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/dashboard')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  return (
    <>
      <div className="lg:grid lg:grid-cols-12 h-screen">
        <div className="lg:col-span-8 hidden lg:block bg-primary">
          <div className="flex flex-col items-center justify-center">
            <img src={Logo} alt="logo" className="2xl:mt-64 lg:mt-40 mt-24" />
            <h2 className="text-white text-center mt-3">
              Welcome to
              <br />
              ECHO EXAM
            </h2>
            <h5 className="text-white mt-3 font-normal">New to Here?</h5>
            <Link
              to="/signup"
              className="bg-white capitalize roboto text-primary mt-5 text-2xl py-2.5 px-4 rounded-full font-bold">
              signup
            </Link>
          </div>
        </div>
        <div className="lg:col-span-4 bg-accent">
          <div className="flex flex-col items-center justify-center lg:mt-64 md:mt-52 mt-24">
            <img src={Logo} alt="logo" className="block lg:hidden h-32" />
            <h4 className="text-primary">Login</h4>
            <form className="mt-3 flex flex-col items-center" onSubmit={onSubmit}>
              <input
                type="email"
                placeholder="Email"
                id='email'
                name='email'
                className="p-3 bg-[#BCE6F5] placeholder-emerald-950 w-80 text-black rounded-full"
                value={email}
                onChange={onChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 my-6 bg-[#BCE6F5] placeholder-emerald-950 w-80 text-black rounded-full"
                id='password'
                name='password'
                value={password}
                onChange={onChange}
              />
              <br />
              <div className="text-right mb-20">
                <Link
                  to="/forgotpw"
                  className="underline text-gray-800 text-sm">
                  forgot password?
                </Link>
              </div>
              {/* <Link
                to=""
                className="bg-primary capitalize roboto text-white mt-12 text-2xl py-2.5 px-7 rounded-full font-bold">
                login
              </Link> */}
              <button type='submit' className="bg-primary capitalize roboto text-white mt-12 text-2xl py-2.5 px-7 rounded-full font-bold">
                login
              </button>
              <div className="text-center block lg:hidden roboto mt-8 text-xl">
                <div>
                  Don't have an account{" "}
                  <Link
                    to="/signup"
                    className="font-bold underline capitalize ml-3">
                    signup
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
