import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import { getUser } from "../redux/authSlice";
import { getChat } from "../redux/chatSlice";

const API = axios.create({ baseURL: "http://localhost:5500/users/" });

export const signUpAPI = async (
  values: Object,
  navigate: NavigateFunction,
  dispatch: Dispatch
) => {
  try {
    const response = await API.post("/signup", values);
    //saving response to local storage
    localStorage.setItem("token", JSON.stringify(response.data.token));
    dispatch(getUser(response.data.token));
    if (response.status === 200) {
      navigate("/", { replace: true });
    }
  } catch (error) {
    console.log(error);
    alert("invalid username or password");
  }
};

export const loginAPI = async (
  values: object,
  navigate: NavigateFunction,
  dispatch: Dispatch
) => {
  try {
    const response = await API.post(`/login`, values);
    localStorage.setItem("token", JSON.stringify(response.data.token));
    dispatch(getUser(response.data.token));
    if (response.status === 200) {
      navigate("/", { replace: true });
    }
  } catch (error) {
    console.log(error);
    alert("invalid username or password");
  }
};

export const userInfoAPI = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token") as string);
    const response = await axios.get(`/me`, { headers: { token } });
  } catch (error) {
    console.log(error);
  }
};

export const chatApi = async (values: object, dispatch: Dispatch) => {
  try {
    const response = await API.post("/chats", values);
    dispatch(getChat(response.data));
  } catch (error) {
    console.log(error);
  }
};
