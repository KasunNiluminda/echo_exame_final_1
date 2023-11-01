import React from "react";
import { Link } from "react-router-dom";

function userCameras() {
  return (
    <>
      <div className="flex py-10 px-20 justify-center">
        <div>
          <h4 className="capitalize text-primary">student name</h4>
        </div>
      </div>
      <div className="h-[3px] bg-primary w-full"></div>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-2 justify-items-center gap-5">
            <Link className="cols-span bg-primary h-80 w-full"></Link>
            <Link className="cols-span bg-primary h-80 w-full">h</Link>
            <Link className="cols-span bg-primary h-80 w-full"></Link>
            <Link className="cols-span bg-primary h-80 w-full">h</Link>
        </div>
        <div className="flex justify-center">
          <Link to="/all-cameras" className="text-center text-xl capitalize bg-[#000000] text-white py-2 px-7 mt-6 rounded-full">go back</Link>
        </div>
      </div>
    </>
  );
}

export default userCameras;
