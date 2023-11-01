import React, { useState, useRef } from 'react';
import Popup from "../../popups/dashboard-popup";

function StudentComponent() {
  const data = [
    { id: 1, name: "John Doe", email: "hello@example.com" },
    { id: 2, name: "Jane Smith", email: "hello@example.com" },
    { id: 3, name: "Mike Johnson", email: "hello@example.com" },
    // Add more data rows as needed
  ];
  const handleDeleteClick = () => {
    // Handle the delete action here
    console.log("Delete icon clicked");
    // You can add your delete logic here
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    // You can add code to process the form data and close the modal
    handleCloseModal();
  };

  const csvFileInputRef = useRef(null); // Using useRef for the file input ref


  const handleCsvFileChange = (event) => {
    const selectedCsvFile = event.target.files[0];
    if (selectedCsvFile) {
      // Process the CSV file data and add to the 'data' array
      // You need to implement this logic to parse the CSV file
      console.log("CSV file selected:", selectedCsvFile);
    }
  };
  

  return (
    <div className="bg-accent h-screen">
      <div className="float-right absolute right-32 top-48">
        <button className="bg-primary p-3 text-white uppercase" onClick={handleAddClick}>
          add students
        </button>
      </div>
      <Popup trigger={isModalOpen} className="bg-[#D9D9D9] ">
        <h5 className="font-semibold mb-4 text-center">Add Students</h5>
        <div className="grid grid-cols-2 gap-6">
        <form className='text-left p-4 border-e h-96' onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-1">Index Number</label>
            <input
              type="text"
              className="w-full px-3 py-2  rounded"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Name</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Voice Samples</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter email"
            />
          </div>
          
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
        <div className="text-center self-center">
          <h5>Insert Student List</h5>
          <p className='mt-20'>Add student  details  using CSV file</p>
          <input
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleCsvFileChange}
          ref={csvFileInputRef} 
        />
        <button
          className="bg-primary mt-14 px-8 text-white py-2 rounded-3xl"
          onClick={() => csvFileInputRef.current.click()} 
        >
          Insert file
        </button>
        </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-white text-center font-bold text-black px-4 py-2 rounded mt-20"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </Popup>
      <div className="flex justify-center items-center mt-32">
        <table className="text-left" style={{ width: "90%" }}>
          <thead>
            <tr className="border-b text-xl">
              <th className="p-2">Index Number</th>
              <th className="p-2">Student Name</th>
              <th className="p-2">Email</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 0 ? "bg-accent" : "bg-[#D9D9D9]"}>
                <td className="p-2 text-lg">{row.id}</td>
                <td className="p-2 text-lg">{row.name}</td>
                <td className="p-2 text-lg">{row.email}</td>
                <td className="p-2">
                  <button onClick={handleDeleteClick}>
                    <ion-icon
                      name="trash-outline"
                      className="text-xl cursor-pointer"></ion-icon>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentComponent;
