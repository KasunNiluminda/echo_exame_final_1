import React from 'react';
import '../App.css';
import Logo from "../assets/images/Logo01.png"
import { Link } from 'react-router-dom';
import CoverIMg from '../assets/images/user-cover.png'

function StudentLogin() {
  const bgstyles = {
    backgroundImage: `url(${CoverIMg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <>
      <div className='lg:grid lg:grid-cols-12 h-screen'>
        <div className='lg:col-span-8 hidden lg:block bg-primary' style={bgstyles}>
        </div>
        <div className="lg:col-span-4 bg-accent">
          <div className="flex flex-col items-center justify-center lg:mt-64 md:mt-52 mt-24">
            <h4 className='text-primary'>Login</h4>
            <form className='mt-3' action="">
              <input type="email" placeholder='Email' className='p-3 bg-[#BCE6F5] placeholder-emerald-950 w-80 text-black rounded-full' /> <br/>
              <input type="password" placeholder='Password' className='p-3 mt-6 mb-20 bg-[#BCE6F5] placeholder-emerald-950 w-80 text-black rounded-full' /> <br/>
              
              <Link to='#' 
                className='bg-primary capitalize roboto text-white mt-12 ml-24 text-2xl py-2.5 px-7 rounded-full font-bold'>
                  login
              </Link>
              <div className='text-center block lg:hidden roboto mt-8 text-xl'>
                <div>Don't have an account <Link to='/signup' className='font-bold underline capitalize ml-3'>signup</Link></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentLogin;
