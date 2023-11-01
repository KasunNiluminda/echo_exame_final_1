import axios from 'axios'

const API_URL = '/api/students/'

// Create new student
const createStudent = async (studentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, studentData, config)

  return response.data
}

// Get user students
const getStudents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user student
const deleteStudent = async (studentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + studentId, config)

  return response.data
}

const studentService = {
  createStudent,
  getStudents,
  deleteStudent,
}

export default studentService
