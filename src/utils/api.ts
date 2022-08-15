import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/users" });

export const signUpAPI = async (values: Object) => {
  try {
    const response = await API.post("/signup", values);
    //saving response to local storage
    localStorage.setItem("token", JSON.stringify(response.data.token));
  } catch (error) {
    console.log(error);
  }
};

export const loginAPI = async (values: object) => {
  try {
    const response = await API.post(`/login`, values);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
