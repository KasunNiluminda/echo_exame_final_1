import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function QuestionPagination() {
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

  const bgStyle = {
    background: "rgba(61, 177, 222, 0.30)",
  };
  // Sample question data, replace this with your actual data
  const questions = [
    {
      questionText: "What is the capital of France?",
      answers: [
        { text: "Berlin" },
        { text: "Paris" },
        { text: "Madrid" },
        { text: "Rome" },
      ],
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Mars" },
        { text: "Venus" },
        { text: "Jupiter" },
        { text: "Mercury" },
      ],
    },
    {
      questionText: "Which planet is known as the green Planet?",
      answers: [
        { text: "Mars" },
        { text: "Venus" },
        { text: "Jupiter" },
        { text: "Earth" },
      ],
    },
    // Add more questions with their answers as needed
  ];

  const itemsPerPage = 1; // Number of questions to display per page
  const pageCount = Math.ceil(questions.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Function to handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    setSelectedAnswer(null); // Reset selected answer when moving to a new question
  };

  // Function to handle selecting an answer
  const handleSelectAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  // Function to get the current question and its answers for the selected page
  const getCurrentQuestionAndAnswers = () => {
    const startIndex = currentPage * itemsPerPage;
    const currentQuestion = questions[startIndex];
    return currentQuestion;
  };

  return (
    <div>
      <div className="flex py-14 px-20 justify-center">
        {/* <div>
          <h4 className="capitalize text-primary">Quiz history</h4>
        </div> */}
        <div>
          <button
            className="capitalize text-primary"
            style={{ cursor: "auto" }}
            onClick={saveRecording}
          >
            <h4 className="capitalize text-primary">Quiz history</h4>
          </button>
        </div>
      </div>
      <div className="h-[3px] bg-primary w-full"></div>
      <div className="flex justify-start items-center ml-32 my-10">
        {/* Display the current question */}
        <h5>{getCurrentQuestionAndAnswers().questionText}</h5>
      </div>
      <ul className="flex flex-col list-decimal list-inside items-start  ml-32">
        {getCurrentQuestionAndAnswers().answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleSelectAnswer(index)}
            className={`cursor-pointer px-3 py-1 mx-1 text-xl ${
              selectedAnswer === index
                ? "bg-[#1a931a] rounded-3xl text-white w-96"
                : "bg-gray-200"
            }`}
          >
            {answer.text}
          </li>
        ))}
      </ul>
      <div className="">
          {apiResponse && (
            <div className=" mt-2 text-center">
              {/* <p>{apiResponse.DTW_distance}</p> */}
              <p className="text-[#ff0000] ">
                {" "}
                {apiResponse.predicted_intensity}
                <br />
                {apiResponse_user_identifier.comparison_result}
              </p>
            </div>
          )}
     
        </div>
      <div className="container mx-auto mt-28">
        <div className="flex p-8" style={bgStyle}>
          <div>
            <p className="capitalize text-[#ff0000] font-medium">commands</p>
            <ul className="list-decimal">
              <li>Clear - to clear the answer.</li>
              <li>
                Next question - to go to the next question. If the question is
                answered the system will store the answer.
              </li>
              <li>Back question - to go previous question.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pagination mt-40">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`cursor-pointer px-3 py-1 mx-1 border-4 border-primary ${
              currentPage === index ? "bg-primary text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionPagination;
