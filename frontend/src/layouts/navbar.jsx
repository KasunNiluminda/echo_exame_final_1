import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo01.png";
import MenuIcon from "../assets/images/menu.png"

export default function Navbar() {
  let [open,setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full top-0 fixed  left-0">
        <div className="lg:flex lg:items-center justify-between bg-primary py-1 px-10 md:px-14">
          <div className="cursor-pointer flex items-center">
            <Link to="/">
              <img src={Logo} alt="logo" className="lg:h-14 h-20 py-2" />
            </Link>
          </div>
          <div onClick={()=>setOpen(!open) } className="text-5xl font-semibold text-[#d4d4d4] absolute right-8 top-2 cursor-pointer block lg:hidden">
          <ion-icon name={open ? 'close': 'menu'}></ion-icon>
          </div>
          <ul 
            className={` text-white text-lg font-medium lg:flex lg:items-center left-0 lg:left-0.5 lg:mr-20 lg:pb-0 pb-12 pl-9 lg:pl-0 absolute capitalize lg:static bg-primary 
            w-full lg:w-auto lg:z-auto z-[-1] transition-all duration-500 ease-in ${open ? 'top-16 opacity-100':'top-[-490px] opacity-0 lg:opacity-100'} `}>
            
            <Link to="/">
              <li className="mt-7 lg:mt-0">Home</li>
            </Link>
            <Link to="/about">
              <li className="lg:ml-14 lg:my-0 my-7">about us</li>
            </Link>
            <Link to="/about">
              <li className="lg:ml-14 lg:my-0 my-7">plans</li>
            </Link>
            <Link to="/login">
              <li className="lg:ml-14 lg:my-0 my-7">login</li>
            </Link>
            <Link to="/signup">
              <li className="lg:ml-14 lg:my-0 my-7">sign up</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
