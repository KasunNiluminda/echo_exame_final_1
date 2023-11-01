import React, { useState, useEffect } from 'react'
import "../App.css";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'; // Import Axios
import Logo from "../assets/images/Logo01.png"
import { register, reset } from '../features/auth/authSlice'

function Signup() {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [formData, setFormData] = useState({
    username: '',
    organization: '',
    email: '',
    password: '',
    passwordrepeat: '',
  })

  const { username, organization, email, password, passwordrepeat } = formData

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
  }, [user, isError, isSuccess, message, navigate])


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!isChecked) {
      toast.error('Please accept the terms and conditions')
    } else if (password !== passwordrepeat) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        username,
        organization,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }


  return (
    <>
      <div className='lg:grid lg:grid-cols-12 lg:h-screen'>
        <div className='lg:col-span-8 hidden lg:block bg-primary'>
          <div className="flex flex-col items-center justify-center">
            <img src={Logo} alt="logo" className='2xl:mt-64 lg:mt-40 mt-24' />
            <h2 className='text-white text-center mt-3'>Welcome back to <br/>ECHO EXAM</h2>
            <h5 className='text-white mt-3 font-normal'>Already have an account?</h5>
            <Link to='/login' 
                className='bg-white capitalize roboto text-primary mt-5 text-2xl py-2.5 px-4 rounded-full font-bold'>
                login
            </Link>
          </div>
        </div>
        <div className="lg:col-span-4 bg-accent">
          <div className="flex flex-col items-center justify-center 2xl:mt-64 lg:mt-40 md:mt-52 mt-24">
          <img src={Logo} alt="logo" className='block lg:hidden h-32' />
            <h4 className='text-primary capitalize'>create account</h4>
            <form className='mt-3' onSubmit={onSubmit}>
              <input 
                type="text"
                id='username'
                name='username'
                value={username}
                placeholder='Username' 
                className='p-3 bg-[#BCE6F5] placeholder-emerald-700 w-80 text-black rounded-full'
                onChange={onChange} 
              /> <br/>
              <input 
                type="text"
                id='organization'
                name='organization'
                value={organization}
                placeholder='Oraganization Name' 
                className='p-3 my-6 bg-[#BCE6F5] placeholder-emerald-700 w-80 text-black rounded-full' 
                onChange={onChange}
              /> <br/>
              <input 
                type="email" 
                id='email'
                name='email'
                value={email}
                placeholder='Email' 
                className='p-3 bg-[#BCE6F5] placeholder-emerald-700 w-80 text-black rounded-full' 
                onChange={onChange}
              /> <br/>
              <input 
                type="password" 
                id='password'
                name='password'
                value={password}
                placeholder='Password' 
                className='p-3 mt-6 bg-[#BCE6F5] placeholder-emerald-700 w-80 text-black rounded-full' 
                onChange={onChange}
              /> <br/>
              <input 
                type="password"
                id='passwordrepeat'
                name='passwordrepeat'
                value={passwordrepeat} 
                placeholder='Confirm Password' 
                className='p-3 mt-6 mb-3 bg-[#BCE6F5] placeholder-emerald-700 w-80 text-black rounded-full' 
                onChange={onChange}
              /> <br/>

              <div className="text-right mb-20">
              <div>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                  Agree to the terms and conditions
              </div>
              </div>

              <button type='submit' className="bg-primary capitalize roboto text-white mt-12 text-2xl py-2.5 px-7 rounded-full font-bold">
                signup
              </button>
              {/* <div className='text-center block lg:hidden roboto mt-8 text-xl'>
                <div>Don't have an account <Link to='/signup' className='font-bold underline capitalize ml-3'>signup</Link></div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup