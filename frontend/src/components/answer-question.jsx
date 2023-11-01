import React, { useState } from "react";

function QuestionPagination() {
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
      questionText: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Mars" },
        { text: "Venus" },
        { text: "Jupiter" },
        { text: "Mercury" },
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
        <div>
          <h4 className="capitalize text-primary">Quiz history</h4>
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
            }`}>
            {answer.text}
          </li>
        ))}
      </ul>
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
            }`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionPagination;
