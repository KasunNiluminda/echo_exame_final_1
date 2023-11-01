import React from "react";
import { Link } from "react-router-dom";

function singleView() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="mt-24 w-full h-[700px] bg-primary"></div>
        </div>
        <div className="flex justify-center">
          <Link to="/user-allcameras" className="text-center text-xl capitalize bg-[#000000] text-white py-2 px-7 mt-4 rounded-full">go back</Link>
        </div>
      </div>
    </>
  );
}

export default singleView;
