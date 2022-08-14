import axios from "axios";

const baseURL = "http://localhost:5000/users";

export const signUpAPI = async (values: Object) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/users/signup",
      values
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const loginAPI = async (values: object) => {
  try {
    const response = await axios.post(`${baseURL}/login`, values);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
