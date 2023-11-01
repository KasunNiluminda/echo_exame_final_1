import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Popup from "../../popups/dashboard-popup";
import { getStudents, createStudent, deleteStudent } from '../../features/students/studentSlice';

function StudentComponent() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [formData, setFormData] = useState({
    indexno: '',
    stuname: '',
    email: '',
    password: '',
    voicelink: '',
  })

  const { indexno, name, email, password, voicelink } = formData


  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    dispatch(createStudent(formData))
    console.log('Form submitted');
    // You can add code to process the form data and close the modal
    handleCloseModal();
  };

  // const csvFileInputRef = useRef(null); // Using useRef for the file input ref


  // const handleCsvFileChange = (event) => {
  //   const selectedCsvFile = event.target.files[0];
  //   if (selectedCsvFile) {
  //     // Process the CSV file data and add to the 'data' array
  //     // You need to implement this logic to parse the CSV file
  //     console.log("CSV file selected:", selectedCsvFile);
  //   }
  // };

  const { user } = useSelector((state) => state.auth)
  const { students, isLoading, isError, message } = useSelector(
    (state) => state.students
  )

  const handleDeleteClick = () => {
    dispatch(deleteStudent(students._id))
    console.log("Delete icon clicked");
    // You can add your delete logic here
  };

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getStudents())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

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
              placeholder="Enter index number"
              id='indexno'
              name='indexno'
              value={indexno}
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded"
              placeholder="Enter Name"
              id='stuname'
              name='stuname'
              value={stuname}
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Name</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded"
              placeholder="Enter Email"
              id='stuemail'
              name='stuemail'
              value={stuemail}
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded"
              placeholder="Enter password"
              id='stupassword'
              name='stupassword'
              value={stupassword}
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Voice Samples</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Voice link"
              id='voiceinputlink'
              name='voiceinputlink'
              value={voiceinputlink}
              onChange={onChange}
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
          // onChange={handleCsvFileChange}
          // ref={csvFileInputRef} 
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
              <th className="p-2">Voice Link</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {students.map((row, index) => (
              <tr
                key={row._id}
                className={index % 2 === 0 ? "bg-accent" : "bg-[#D9D9D9]"}>
                <td className="p-2 text-lg">{row.indexno}</td>
                <td className="p-2 text-lg">{row.name}</td>
                <td className="p-2 text-lg">{row.email}</td>
                <td className="p-2 text-lg">{row.voicelink}</td>
                <td className="p-2">
                  <button onClick={handleDeleteClick}>
                    <ion-icon
                      name="trash-outline"
                      className="text-xl cursor-pointer"></ion-icon>
                  </button>
                </td>
              </tr>
            ))}
            {/* {students.length > 0 ? (
            {students.map((student) => (
              <tr
                key={student._id}
                className={indexno % 2 === 0 ? "bg-accent" : "bg-[#D9D9D9]"}>
                <td className="p-2 text-lg">{student.indexno}</td>
                <td className="p-2 text-lg">{student.name}</td>
                <td className="p-2 text-lg">{student.email}</td>
                <td className="p-2 text-lg">{student.voicelink}</td>
                <td className="p-2">
                  <button onClick={handleDeleteClick}>
                    <ion-icon
                      name="trash-outline"
                      className="text-xl cursor-pointer"></ion-icon>
                  </button>
                </td>
              </tr>
              ))}
            ) : (
                <h3>You have not set any students</h3>
            )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentComponent;
