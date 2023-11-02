import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignoutIcon from "../assets/images/signout.png";
import OrgLogo from "../assets/images/org-logo.png";
import axios from "axios";

function LmsDashboard() {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedAudioData, setRecordedAudioData] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [apiResponse_user_identifier, setApiResponse_user_identifier] =
    useState(null);

  useEffect(() => {
    startRecording();
    // console.log("code 01");
    console.log("01");
  }, []);

  const startRecording = () => {
    // saveRecording();
    if (!isRecording) {
      if (navigator.mediaDevices) {
        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then((stream) => {
            const recorder = new MediaRecorder(stream);
            const chunks = [];

            recorder.ondataavailable = (event) => {
              if (event.data.size > 0) {
                chunks.push(event.data);
              }
            };

            recorder.onstop = () => {
              const blob = new Blob(chunks, { type: "audio/wav" });
              setRecordedAudioData(blob);
              console.log("Recording stopped...");
            };

            setMediaRecorder(recorder);
            setMediaStream(stream);

            recorder.start();
            setIsRecording(true);
            console.log("Recording started");

            // Set a timer to stop recording after 10 seconds
            // setTimeout(() => {
            //   stopRecording();
            // }, 100000);
          })
          .catch((error) => {
            console.error("Error accessing the microphone: ", error);
          });
      }
    }
  };

  const stopRecording = () => {
    console.log("stop function");
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    }
  };

  const sendAudioToServer = (formData) => {
    axios
      .all([
        axios.post(
          "http://localhost:3500/api/student/user_intensity",
          formData
        ),
        axios.post(
          "http://localhost:3500/api/student/user_identifier",
          formData
        ),
      ])
      .then(
        axios.spread((responseIntensity, responseIdentifier) => {
          const responseDataIntensity = responseIntensity.data.response;
          const responseDataIdentifier = responseIdentifier.data.response;

          // Handle the responses as needed
          setApiResponse(responseDataIntensity);
          setApiResponse_user_identifier(responseDataIdentifier);

          // Your code to handle the combined responses
        })
      )
      .catch((error) => {
        console.error("Error sending audio to the server: ", error);
      });

    // axios
    //   .post("http://localhost:3500/api/student/user_intensity", formData)
    //   .then((response) => {
    //     // Handle the response from the server
    //     // console.log("Audio uploaded successfully");

    //     const responseData = response.data.response;
    //     setApiResponse(responseData);

    //     // console.log("API Response:", responseData);

    //   })
    //   .catch((error) => {
    //     console.error("Error sending audio to the server: ", error);
    //   });

    // axios
    //   .post("http://localhost:3500/api/student/user_identifier", formData)
    //   .then((response) => {
    //     // Handle the response from the server
    //     // console.log("Audio uploaded successfully");

    //     const responseData = response.data.response;
    //     setApiResponse_user_identifier(responseData);

    //     // console.log("API Response:", responseData);

    //   })
    //   .catch((error) => {
    //     console.error("Error sending audio to the server: ", error);
    //   });
  };

  const saveRecording = () => {
    stopRecording();
    if (recordedAudioData) {
      const formData = new FormData();
      formData.append("audio", recordedAudioData);
      sendAudioToServer(formData);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (recordedAudioData) {
        const formData = new FormData();
        formData.append("audio", recordedAudioData);
        sendAudioToServer(formData);
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, [recordedAudioData]);

  return (
    <>
      <div className="">
        <div className="flex pt-3 pb-2 px-20 justify-between">
          <Link>
            <img
              src={OrgLogo}
              className="bg-primary h-24 w-24 rounded-full"
              onClick={saveRecording}
              style={{ cursor: "auto" }}
            />{" "}
          </Link>
          <br />
          <div>
            <h4 className="capitalize text-primary">rusiru perera</h4>
            <h5 className="capitalize text-primary font-medium">
              rusiru@sliit.lk
            </h5>
            <Link to="/stu-login" className="flex w-28">
              {" "}
              <img src={SignoutIcon} /> Log out
            </Link>
          </div>
        </div>
        <div className="h-[3px] bg-primary w-full">
          {apiResponse && (
            <div className="ml-20 mt-2 text-center">
              {/* <p>{apiResponse.DTW_distance}</p> */}
              <p className="text-[#ff0000] ">
                {" "}
                {apiResponse.predicted_intensity}
                <br />
                {apiResponse_user_identifier.comparison_result}
              </p>
            </div>
          )}
          {/* Automatically redirect if "Same user detected" */}
          {/* {apiResponse &&
            apiResponse?.predicted_intensity !== "Same user detected." &&
            (window.location.href = "/")} */}
        </div>
        <div className="container mx-auto  px-20 ">
          <div className="flex justify-between px-5 mt-16 border-2 border-primary p-7 ">
            <div className="">
              <div className="flex w-96 gap-4">
                <p className="capitalize font-semibold">
                  subject code : SCC041
                </p>
                <p className="capitalize font-semibold">-</p>
                <p className="capitalize font-semibold">General knowledge</p>
              </div>
              <div className="mt-4 font-medium">
                <span className="capitalize">start time: 06.00 p.m</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">time duration: 2 hours</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">
                  Single line short description about exam: The process of
                  making connections and building relationships.
                </span>
              </div>
            </div>
            <div className="self-center">
              <Link>
                <h4 className="text-primary">Attend</h4>
              </Link>
            </div>
          </div>
          <div className="flex justify-between px-5 mt-10 border-2 border-primary p-7 ">
            <div className="">
              <div className="flex w-96 gap-4">
                <p className="capitalize font-semibold">
                  subject code : SCC00045
                </p>
                <p className="capitalize font-semibold">-</p>
                <p className="capitalize font-semibold">Networking</p>
              </div>
              <div className="mt-4 font-medium">
                <span className="capitalize">start time: 06.00 p.m</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">time duration: 2 hours</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">
                  Single line short description about exam: The process of
                  making connections and building relationships.
                </span>
              </div>
            </div>
            <div className="self-center">
              <Link>
                <h4 className="text-primary">Attend</h4>
              </Link>
            </div>
          </div>
          <div className="flex justify-between px-5 mt-10 border-2 border-primary p-7 ">
            <div className="">
              <div className="flex w-96 gap-4">
                <p className="capitalize font-semibold">
                  subject code : SCC00045
                </p>
                <p className="capitalize font-semibold">-</p>
                <p className="capitalize font-semibold">Networking</p>
              </div>
              <div className="mt-4 font-medium">
                <span className="capitalize">start time: 06.00 p.m</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">time duration: 2 hours</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">
                  Single line short description about exam: The process of
                  making connections and building relationships.
                </span>
              </div>
            </div>
            <div className="self-center">
              <Link>
                <h4 className="text-primary">Attend</h4>
              </Link>
            </div>
          </div>

          {/* 
          <div className="flex justify-between px-5 mt-6 border-2 border-primary p-7">
            <div>
              <div className="flex w-96 gap-4">
                <p className="capitalize font-semibold">subject code</p>
                <p className="capitalize font-semibold">-</p>
                <p className="capitalize font-semibold">subject name</p>
              </div>
              <div className="mt-4 font-medium">
                <span className="capitalize">start time:</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">time duration:</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">
                  Single line short description about exam:
                </span>
              </div>
            </div>
            <div className="self-center">
              <Link>
                <h4 className="text-primary">Attend</h4>
              </Link>
            </div>
          </div>

          <div className="flex justify-between px-5 mt-6 border-2 border-primary p-7 mb-10">
            <div>
              <div className="flex w-96 gap-4">
                <p className="capitalize font-semibold">subject code</p>
                <p className="capitalize font-semibold">-</p>
                <p className="capitalize font-semibold">subject name</p>
              </div>
              <div className="mt-4 font-medium">
                <span className="capitalize">start time:</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">time duration:</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">
                  Single line short description about exam:
                </span>
              </div>
            </div>
            <div className="self-center">
              <Link>
                <h4 className="text-primary">Attend</h4>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default LmsDashboard;

// import React from 'react'
// import { Link } from 'react-router-dom'
// import SignoutIcon from '../assets/images/signout.png'
// import OrgLogo from '../assets/images/org-logo.png'

// function LmsDashboard() {
//   return (
//     <>
//     <div>
//         <div className="flex pt-3 pb-2 px-20 justify-between">
//             <img src={OrgLogo} className='bg-primary h-24 w-24 rounded-full' /> <br />
//             <div>
//                 <h4 className='capitalize text-primary'>student name</h4>
//                 <h5 className='capitalize text-primary font-medium'>student email</h5>
//                 <Link to='/stu-login' className='flex w-28'> <img src={SignoutIcon}  /> Log out</Link>
//             </div>
//         </div>
//         <div className='h-[3px] bg-primary w-full'></div>
//         <div className="container mx-auto my-10">
//             <div className="flex justify-between px-5 mt-16 border-2 border-primary p-7">
//                 <div>
//                     <div className='flex w-96 gap-4'>
//                         <p className='capitalize font-semibold'>subject code</p>
//                         <p className='capitalize font-semibold'>-</p>
//                         <p className='capitalize font-semibold'>subject name</p>
//                     </div>
//                         <div className='mt-4 font-medium'>
//                             <span className='capitalize'>start time:</span>
//                         </div>
//                         <div className='mt-2 font-medium'>
//                             <span className='capitalize'>time duration:</span>
//                         </div>
//                         <div className='mt-2 font-medium'>
//                             <span className='capitalize'>Single line short description about exam:</span>
//                         </div>
//                 </div>
//                 <div className="self-center">
//                     <Link><h4 className='text-primary'>Attend</h4></Link>
//                 </div>
//             </div>

//             <div className="flex justify-between px-5 mt-6 border-2 border-primary p-7">
//                 <div>
//                     <div className='flex w-96 gap-4'>
//                         <p className='capitalize font-semibold'>subject code</p>
//                         <p className='capitalize font-semibold'>-</p>
//                         <p className='capitalize font-semibold'>subject name</p>
//                     </div>
//                         <div className='mt-4 font-medium'>
//                             <span className='capitalize'>start time:</span>
//                         </div>
//                         <div className='mt-2 font-medium'>
//                             <span className='capitalize'>time duration:</span>
//                         </div>
//                         <div className='mt-2 font-medium'>
//                             <span className='capitalize'>Single line short description about exam:</span>
//                         </div>
//                 </div>
//                 <div className="self-center">
//                     <Link><h4 className='text-primary'>Attend</h4></Link>
//                 </div>
//             </div>

//             <div className="flex justify-between px-5 mt-6 border-2 border-primary p-7">
//                 <div>
//                     <div className='flex w-96 gap-4'>
//                         <p className='capitalize font-semibold'>subject code</p>
//                         <p className='capitalize font-semibold'>-</p>
//                         <p className='capitalize font-semibold'>subject name</p>
//                     </div>
//                         <div className='mt-4 font-medium'>
//                             <span className='capitalize'>start time:</span>
//                         </div>
//                         <div className='mt-2 font-medium'>
//                             <span className='capitalize'>time duration:</span>
//                         </div>
//                         <div className='mt-2 font-medium'>
//                             <span className='capitalize'>Single line short description about exam:</span>
//                         </div>
//                 </div>
//                 <div className="self-center">
//                     <Link><h4 className='text-primary'>Attend</h4></Link>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default LmsDashboard
