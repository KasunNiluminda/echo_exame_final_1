import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import { Link } from "react-router-dom";
import Popup from "../popups/quiz";
import axios from "axios";

function AddQuiz({ questionId }) {
  const [ButtonPopup, setButtonPopup] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [questionData, setQuestionData] = useState(null);

  const options = [
    {
      value: 1,
      label: "Answer selection",
    },
    {
      value: 2,
      label: "Short answer",
    },
  ];

  const handleChange = (selectOption) => {
    setSelectedValue(selectOption[0]?.value || null);
  };

  const handleSubmitQuestion = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const questionText = formData.get("questionText");
    const marks = formData.get("marks");
    const answers = [];

    if (selectedValue === 1) {
      for (let i = 1; i <= 4; i++) {
        const answer = formData.get(`answer${i}`);
        answers.push(answer);
      }
    } else if (selectedValue === 2) {
      const shortAnswer = formData.get("shortAnswer");
      answers.push(shortAnswer);
    }

    const questionData = {
      questionText,
      type: selectedValue,
      answers,
      marks: parseInt(marks),
      // Add any other relevant data fields
    };

    axios
      .post("https://api.example.com/questions", questionData)
      .then((response) => {
        console.log("Question added successfully!", response.data);
      })
      .catch((error) => {
        console.error("Error adding the question:", error);
      });
  };

  const fetchQuestionData = () => {
    axios
      .get(`https://api.example.com/questions/${questionId}`)
      .then((response) => {
        setQuestionData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching question data:", error);
      });
  };

  useEffect(() => {
    if (questionId) {
      fetchQuestionData();
    }
  }, [questionId]);

  const renderText = () => {
    if (selectedValue === 1) {
      return (
        <div className="mt-4 bg-primary text-white p-2 rounded-lg">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index}>
              <input
                type="text"
                name={`answer${index + 1}`}
                placeholder={`Answer ${index + 1}`}
                className="w-96 bg-transparent border-b border-b-white"
              />
              <br />
            </div>
          ))}
        </div>
      );
    } else if (selectedValue === 2) {
      return (
        <div>
          <textarea
            name="shortAnswer"
            placeholder="Type Answer"
            cols="90"
            rows="8"
            className="bg-primary p-3"></textarea>
        </div>
      );
    } else {
      return "";
    }
  };

  return (
    <>
      <div>
        <div className="my-4">
          <h3 className="text-center text-primary capitalize">add quiz</h3>
        </div>
        <div className="h-[3px] bg-primary w-full mb-10"></div>
        <div className="container mx-auto">

          {/* popup */}
          <Popup trigger={ButtonPopup} setTrigger={ButtonPopup}>
            <div className="text-right">
              <div
                className="text-primary text-4xl font-bold right-0"
                onClick={() => setButtonPopup(false)}>
                <ion-icon name={(name = "close")}></ion-icon>
              </div>
            </div>
            <form
              action=""
              className="text-left"
              onSubmit={handleSubmitQuestion}>
              <label className="left-0 mt-10">Type question</label> <br />
              <textarea
                type="text"
                placeholder="type here"
                className="text-[#000011] bg-transparent mt-2 mb-5 w-[700px] h-40 px-2 border-b border-b-[#000000]"
                required
              />
              <br />
              <label className="left-0">Select question type:</label>
              <Select
                placeholder=" "
                className="text-[#000000]"
                options={options}
                onChange={handleChange}
              />
              <div>{renderText()}</div>
              <div className="mt-6">
                <label htmlFor="marks">Enter marks:</label>
                <input
                  type="number"
                  className="ml-10 bg-transparent w-20 mb-5 border-b border-b-[#000000]"
                />
              </div>
              <div className="flex gap-5">
                <button
                  type="submit"
                  className="mt-2 bg-primary capitalize roboto text-accent text-base py-2 px-8 rounded-full font-semibold">
                  add question
                </button>
                <button
                  type="button"
                  className="mt-2 bg-transparent border-2 border-primary capitalize roboto text-primary text-base py-2 px-8 rounded-full font-semibold"
                  onClick={() => setButtonPopup(false)}>
                  cancel
                </button>
              </div>
            </form>
          </Popup>
          {/* popup */}

          <div className="mt-16">
            <Link
              className="font-bold text-3xl"
              onClick={(e) => {
                e.preventDefault();
                setButtonPopup(true);
              }}>
              <ion-icon name="add-circle-outline"></ion-icon>
            </Link>
          </div>
          <div className="flex justify-between px-5 mt-16 border-2 border-primary p-7">
            <div>
              {questionData ? (
                <div>
                  <div className="flex gap-4">
                    <p className="capitalize font-semibold">
                      {questionData.questionText}
                    </p>
                  </div>
                  {renderText()}
                </div>
              ) : (
                <p>Loading question data...</p>
              )}
              <div>
                <ol
                  type="a"
                  className="list-inside pl-3 pt-2 font-medium text-lg">
                  <li>Winston Churchill</li>
                  <li>Margaret Thatcher</li>
                  <li>David Lloyd</li>
                  <li>ony Blair</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddQuiz;