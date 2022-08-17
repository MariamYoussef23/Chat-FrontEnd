import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { getChat } from "../redux/chatSlice";
import { getToken } from "../redux/authSlice";
import { Dispatch } from "redux";
import { isConditionalExpression } from "typescript";
import { getMessages } from "../redux/messageSlice";

const API = axios.create({ baseURL: "http://localhost:5551/" });

export const signUpAPI = async (
  values: Object,
  navigate: NavigateFunction,
  dispatch: Dispatch
) => {
  try {
    const response = await API.post("/users/signup", values);
    //saving response to local storage
    localStorage.setItem("token", JSON.stringify(response.data.token));

    dispatch(getToken(response.data.token));
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
    const response = await API.post(`/users/login`, values);
    console.log(response.data.token)
    localStorage.setItem("token", JSON.stringify(response.data.token));
    dispatch(getToken(response.data.token));
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
    const response = await axios.get(`/users/me`, { headers: { token } });
  } catch (error) {
    console.log(error);
  }
};


export const newChatApi = async (values: object) => {
  try {
    const token = JSON.parse(localStorage.getItem("token") as string);
    const newChat = await API.post("/chats/chat",{ headers: { token } }, values);
  } catch (error) {
    console.log(error);
  }
};


export const getChatsApi = async ( dispatch: Dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("token") as string);
    const response = await API.get("/chats",{ headers: { token } });
    dispatch(getChat(response.data.data));
  } catch (error) {
    console.log(error);
  }
};


export const getMessagesApi = async ( dispatch: Dispatch, id: number) => {
  try {
    const token = JSON.parse(localStorage.getItem("token") as string);
    const response = await API.get(`/chats/${id}/messages`,{ headers: { token } });
    console.log(response)
    dispatch(getMessages(response.data.data));
  } catch (error) {
    console.log(error);
  }
};


