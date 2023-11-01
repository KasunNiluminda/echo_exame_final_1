import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import RetryIcon from "../assets/images/retry.png";
import SuccessIcon from "../assets/images/check.png";
import { Link } from "react-router-dom";
import OrgLogo from "../assets/images/org-logo.png";

function CameraCheck() {
  const [showCamera, setShowCamera] = useState(false);

  const startCamera = () => {
    setShowCamera(true);
  };

  useEffect(() => {
    startCamera(); // Start the camera when the component is mounted
  }, []);

  const cameraWidth = 400; // Adjust the width as needed
  const cameraHeight = 100; // Adjust the height as needed

  const videoConstraints = {
    // width: { min: 420 },
    // height: { min: 420 },
    width: 580,
    height: 290,
    aspectRatio: 0.6666666667,
    facingMode: "user",
  };

  const bgStyle = {
    background: "rgba(61, 177, 222, 0.30)",
  };

  return (
    <>
      <div className="bg-primary">
        <div className="flex bg-secondary 2xl:gap-96 gap-72 px-20 py-3">
          <img src={OrgLogo} className="rounded-full h-24 w-24" />
          <h3 className="text-center text-primary 2xl:ml-40 ml-0 my-4 py-2">
            Check video environment
          </h3>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4 px-48 pt-10 bg-primary">
            {showCamera ? (
              <div className="bg-[#101010] 2xl:h-75 h-72">
                <Webcam
                  audio={false}
                  // height={cameraHeight}
                  // width={cameraWidth}
                  mirrored={true}
                  videoConstraints={videoConstraints}
                />
              </div>
            ) : (
              // <div className="bg-[#101010] 2xl:h-75 h-72">
              //   <Webcam audio={false} height="50%" width="100%" />
              // </div>
              <div className="bg-[#101010] 2xl:h-75 h-72">

              </div>
            )}
            <div className="bg-[#101010] 2xl:h-75 h-72">
            <div className="bg-[#101010] 2xl:h-75 h-72">
                <Webcam
                  audio={false}
                  // height={cameraHeight}
                  // width={cameraWidth}
                  mirrored={true}
                  videoConstraints={videoConstraints}
                />
              </div>

            </div>
            {/* <div className="bg-[#101010] 2xl:h-75 h-72"></div>
            <div className="bg-[#101010] 2xl:h-75 h-72"></div> */}
          </div>
          <div className="flex justify-center gap-16 py-10">
            <div>
              <Link>
                <img src={RetryIcon} alt="retry" className="h-14" />
              </Link>{" "}
            </div>
            <div>
              <Link>
                {" "}
                <img src={SuccessIcon} alt="success" className="h-14" />
              </Link>{" "}
            </div>
          </div>
        </div>
        {/* <div className="container mx-auto py-2">
          <div className="flex p-8" style={bgStyle}>
            <div>
              <p className="capitalize text-[#ff0000] font-medium">commands</p>
              <ul className="list-decimal">
                <li>Clear - to clear the answer.</li>
                <li>
                  Next question - to go to the next question. If the question is
                  answered, the system will store the answer.
                </li>
                <li>Back question - to go to the previous question.</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default CameraCheck;




// import React from 'react'
// import RetryIcon from '../assets/images/retry.png'
// import SuccessIcon from '../assets/images/check.png'
// import { Link } from 'react-router-dom'
// import OrgLogo from '../assets/images/org-logo.png'

// function CameraCheck() {
//   return (
//     <>
//     <div className='bg-primary 2xl:h-screen'>
//         <div className="flex bg-secondary 2xl:gap-96 gap-72 px-20 py-3">
//         <img src={OrgLogo}  className='rounded-full h-24 w-24' />
//         <h3 className='text-center text-primary 2xl:ml-40 ml-0 my-4 py-2'>Check video environment</h3>

//         </div>
//         <div className="w-full">
//             <div className="grid grid-cols-2 gap-4 px-48 pt-10 bg-primary">
//                 <div className='bg-[#101010] 2xl:h-80 h-72'></div>
//                 <div className='bg-[#101010] 2xl:h-80 h-72'></div>
//                 <div className='bg-[#101010] 2xl:h-80 h-72'></div>
//                 <div className='bg-[#101010] 2xl:h-80 h-72'></div>
//             </div>
//             <div className="flex justify-center gap-16 py-10">
//                 <div><Link><img src={RetryIcon} alt="retry" className='h-14' /></Link> </div>
//                 <div><Link> <img src={SuccessIcon} alt="success" className='h-14' /></Link> </div>
//             </div>
//         </div>


//     </div>
//     </>
//   )
// }

// export default CameraCheck