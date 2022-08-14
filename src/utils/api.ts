import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = axios.create({ baseURL: "http://localhost:5550/users/" });
const navigate = useNavigate();

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
    localStorage.setItem("token", JSON.stringify(response.data.token));
  } catch (error) {
    console.log(error);
  }
};


export const userInfoAPI = async () => {
    try{
        const token = JSON.parse(localStorage.getItem('token')as string);
        const response = await axios.get(`/me`, {headers: { token } });
    }catch (error) {
        console.log(error);
    }
}