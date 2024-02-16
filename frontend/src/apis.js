import axios from 'axios';

// Base URL of your backend server
const BASE_URL = 'https://server-ha.vercel.app';

// Axios function to upload course data
export const uploadCourse = async (courseData) => {
  try {
    const response = await axios.post(`${BASE_URL}/uploadcourse`, courseData);
    return response;
  } catch (error) {
    throw error.response.data.message || 'Error uploading course data';
  }
};

// Axios function for teacher signup
export const teacherSignUp = async (teacherData) => {
  try {
    const response = await axios.post(`${BASE_URL}/teacher/signup`, teacherData);
    return response.data;
  } catch (error) {
    throw error.response.data.message || 'Error signing up teacher';
  }
};

// Axios function for student signup
export const studentSignUp = async (studentData) => {
  try {
    const response = await axios.post(`${BASE_URL}/student/signup`, studentData);
    return response.data;
  } catch (error) {
    throw error.response.data.message || 'Error signing up student';
  }
};

// Axios function for teacher signin
export const teacherSignIn = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/teacher/signin`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data.message || 'Error signing in teacher';
  }
};

// Axios function for student signin
export const studentSignIn = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/student/signin`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data.message || 'Error signing in student';
  }
};

// Axios function to get all courses
export const getAllCourses = async () => {
  try {
    const response = await axios.get("https://server-ha.vercel.app/allcources");
    console.log(response,"from api");
    return response.data;
  } catch (error) {
    throw error.response.data.message || 'Error fetching courses';
  }
};

export const getOneCourses = async (id) => {
    try {
      const response = await axios.get(`https://server-ha.vercel.app/allcourcesbyid/${id}`);
      console.log(response,"from api");
      return response.data;
    } catch (error) {
      throw error.response.data.message || 'Error fetching courses';
    }
  };