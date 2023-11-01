import React from 'react'
import Logo from "../assets/images/Logo01.png"
import { Link } from 'react-router-dom';

function forgotPassword() {
  return (
    <>
        <div className='flex flex-col h-screen items-center justify-center bg-primary'>
            <img src={Logo} alt="" />
            <div>
                <h4 className='text-center text-white capitalize lg:mt-24 2xl:mt-20'>forgot password</h4>
                <form className="mt-10 text-center">
                    <input type="email" placeholder='Email' className='p-3 bg-[#BCE6F5] placeholder-emerald-950 w-80 text-black rounded-full' /> <br/>
                    <div className='text-center text-white mt-4 mb-8'>Resend email</div>
                    <Link to='/resetpw' className='bg-white capitalize roboto text-primary text-2xl py-2.5 px-4 rounded-full font-bold'>send</Link>
                </form>
            </div>

        </div>
    </>
  )
}

export default forgotPassword