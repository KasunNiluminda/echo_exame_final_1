//----------------correct final code with back end---------------------------------

import React, { useState, useEffect } from "react";
import RetryIcon from "../assets/images/retry.png";
import SuccessIcon from "../assets/images/check.png";
import MicIcon from "../assets/images/mic.png";
import { Link } from "react-router-dom";
import axios from "axios";

function VoiceCheck() {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedAudioData, setRecordedAudioData] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const bgStyle = {
    background: "rgba(61, 177, 222, 0.30)",
  };

  useEffect(() => {
    // Start recording when the component is mounted
    startRecording();
    // console.log("01");
  }, []);

  const startRecording = () => {
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
          })
          .catch((error) => {
            console.error("Error accessing the microphone: ", error);
          });
      }
      // console.log("02");
    }
  };

  const stopRecording = () => {
    console.log("stop");
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
      .post("http://localhost:3500/api/student/user_identifier", formData)
      .then((response) => {
        // Handle the response from the server
        console.log("Audio uploaded successfully");

        const responseData = response.data.response;
        setApiResponse(responseData);

        console.log("API Response:", responseData);
        if (responseData.comparison_result === "Same user detected.") {
          window.location.href = "/lms-dashboard";
        }
      })
      .catch((error) => {
        console.error("Error sending audio to the server: ", error);
      });
  };

  const saveRecording = () => {
    console.log("save");
    stopRecording();
    if (recordedAudioData) {
      const formData = new FormData();
      formData.append("audio", recordedAudioData);
      sendAudioToServer(formData);
    }
  };

  useEffect(() => {
    const sendAudioToServer = () => {
      if (recordedAudioData) {
        const formData = new FormData();
        formData.append("audio", recordedAudioData);
        sendAudioToServer(formData);
      }
    };

    if (isRecording) {
      const intervalId = setInterval(() => {
        sendAudioToServer();
      }, 10000);

      return () => clearInterval(intervalId);
    }
  }, [recordedAudioData, isRecording]);

  useEffect(() => {
    // console.log("interval");
    const intervalId = setInterval(() => {
      if (recordedAudioData) {
        console.log("interval 01.2");
        const formData = new FormData();
        formData.append("audio", recordedAudioData);
        sendAudioToServer(formData);
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, [recordedAudioData]);

  // const saveRecording = () => {
  //   stopRecording();
  //   if (recordedAudioData) {
  //     const formData = new FormData();
  //     formData.append("audio", recordedAudioData);

  //     axios
  //       .post("http://localhost:3000/api/student/user_identifier", formData)
  //       .then((response) => {
  //         // Handle the response from the server
  //         console.log("Audio uploaded successfully");

  //         // Assuming the response data is in the format you provided
  //         const responseData = response.data.response;

  //         // Set the response data in your component's state for further use
  //         setApiResponse(responseData);

  //         console.log("API Response:", responseData);
  //         if (responseData.comparison_result === "Same user detected.") {
  //           // Redirect to "lms-dashboard" if the condition is met
  //           window.location.href = "/lms-dashboard";
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error sending audio to the server: ", error);
  //       });
  //   }
  // };
  // // Periodically send recorded audio to the server every 10 seconds
  // useEffect(() => {
  //   const sendAudioToServer = () => {
  //     if (recordedAudioData) {
  //       const formData = new FormData();
  //       formData.append("audio", recordedAudioData);

  //       axios
  //         .post("http://localhost:3000/api/student/user_identifier", formData)
  //         .then((response) => {
  //           // Handle the response from the server
  //           console.log("Audio uploaded successfully");

  //           // Assuming the response data is in the format you provided
  //           const responseData = response.data.response;

  //           // Set the response data in your component's state for further use
  //           setApiResponse(responseData);

  //           console.log("API Response:", responseData);
  //           if (responseData.comparison_result === "Same user detected.") {
  //             // Redirect to "lms-dashboard" if the condition is met
  //             window.location.href = "/lms-dashboard";
  //           }
  //         })
  //         .catch((error) => {
  //           console.error("Error sending audio to the server: ", error);
  //         });
  //     }
  //   };

  //   // Set up an interval to send the audio data every 10 seconds
  //   const intervalId = setInterval(sendAudioToServer, 10000);

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, [recordedAudioData]);

  return (
    <>
      <div className="bg-primary h-screen">
        <div className="flex bg-secondary 2xl:gap-96 gap-72 px-20 py-3 mb-56">
          <img className="bg-primary rounded-full h-24 w-24" />
          <h3 className="text-center text-primary 2xl:ml-40 ml-0 my-4 py-2">
            Check voice and identification
          </h3>
        </div>

        <div className="flex mx-56 justify-center mt-48 py-14 bg-accent text-center">
          <h4 className="">
            Sample text to read. Wait for 10 second to user identify.
          </h4>
        </div>

        <div className="flex justify-center gap-16 mt-16 py-10">
          <div>
            <Link>
              <img src={RetryIcon} alt="retry" className="h-14" />
            </Link>
          </div>

          <div>
            <Link>
              <img
                src={MicIcon}
                // src={SuccessIcon}
                alt="success"
                className="h-14"
                style={{
                  cursor: "pointer",
                }}
                onClick={saveRecording}
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={SuccessIcon}
                alt="success"
                style={{
                  height: "3rem",
                  cursor: "pointer",
                }}
                // onClick={isRecording ? stopRecording : startRecording}
              />
            </Link>
          </div>
          {apiResponse && (
            <div className="ml-10 mt-2">
              {/* <p>{apiResponse.DTW_distance}</p> */}
              <p className="text-[#ff0000] ">
                {" "}
                {apiResponse.comparison_result}
              </p>
            </div>
          )}
          {/* Automatically redirect if "Same user detected" */}
          {/* {apiResponse && apiResponse?.comparison_result !== "Same user detected." &&
            (window.location.href = "/")} */}
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

export default VoiceCheck;

// import React from "react";
// import RetryIcon from "../assets/images/retry.png";
// import SuccessIcon from "../assets/images/check.png";
// import MicIcon from "../assets/images/mic.png"
// import { Link } from "react-router-dom";

// function VoiceCheck() {
//   return (
//     <>
//       <div className="bg-primary h-screen">
//         <div className="flex bg-secondary 2xl:gap-96 gap-72 px-20 py-3 mb-56">
//           <img className="bg-primary rounded-full h-24 w-24" />
//           <h3 className="text-center text-primary 2xl:ml-40 ml-0 my-4 py-2">
//             Check voice and identification
//           </h3>
//         </div>

//         <div className="flex mx-56 justify-center mt-48 py-14 bg-accent text-center">
//             <h4 className="">Sample text to read</h4>
//         </div>

//         <div className="flex justify-center gap-16 mt-16 py-10">
//           <div>
//             <Link>
//               <img src={RetryIcon} alt="retry" className="h-14" />
//             </Link>
//           </div>
//           <div>
//             <Link>
//               <img src={MicIcon} alt="success" className="h-14" />
//             </Link>
//           </div>
//           <div>
//             <Link>
//               <img src={SuccessIcon} alt="success" className="h-14" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default VoiceCheck;
