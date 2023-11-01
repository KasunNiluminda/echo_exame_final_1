import React from 'react'
import Logo from "../assets/images/Logo01.png"
import { Link } from 'react-router-dom';

function resetPassword() {
  return (
    <>
    <div className='flex flex-col h-screen items-center justify-center bg-primary'>
            <img src={Logo} alt="" />
            <div>
                <h4 className='text-center text-white capitalize lg:mt-24 2xl:mt-20'>reset password</h4>
                <form className="mt-10 text-center">
                    <input type="password" placeholder='New Password' className='p-3 bg-[#BCE6F5] placeholder-emerald-950 w-80 text-black rounded-full' /> <br/>
                    <input type="password" placeholder='Confirm New Password' className='mt-5 mb-10 p-3 bg-[#BCE6F5] placeholder-emerald-950 w-80 text-black rounded-full' /> <br/>
                    <Link to='/login' className='bg-white capitalize roboto text-primary text-2xl py-2.5 px-4 rounded-full font-bold'>reset</Link>
                </form>
            </div>

        </div>
    </>
  )
}

export default resetPassword