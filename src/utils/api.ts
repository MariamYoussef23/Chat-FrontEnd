import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { getChat } from "../redux/chatSlice";
import { getToken } from "../redux/authSlice";
import { Dispatch } from "redux";
import { getMessages } from "../redux/messageSlice";
import jwt_decode from "jwt-decode";
import { io, Socket } from "socket.io-client";
import { User } from "../types";
import { getUserswithoutme } from "../redux/userSlice";

const API = axios.create({ baseURL: "http://localhost:5551" });

export const signUpAPI = async (
  values: Object,
  navigate: NavigateFunction,
  dispatch: Dispatch,
  socket: Socket
) => {
  try {
    const response = await API.post("/users/signup", values);
    //saving response (token) to local storage
    localStorage.setItem("token", JSON.stringify(response.data.token));
    dispatch(getToken(response.data.token));
    if (response.status === 200) {
      const currentUser = jwt_decode(
        JSON.parse(localStorage.getItem("token") as string)
      ) as User;
      const userEmail = currentUser.email
      socket?.emit("room", userEmail);
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
  dispatch: Dispatch,
  socket: Socket
) => {
  try {
    const response = await API.post(`/users/login`, values);

    localStorage.setItem("token", JSON.stringify(response.data.token));
    dispatch(getToken(response.data.token));
    if (response.status === 200) {
      const currentUser = jwt_decode(
        JSON.parse(localStorage.getItem("token") as string)
      ) as User;
      const userEmail = currentUser.email
      socket?.emit("room", userEmail);
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
    const newChat = await API.post("/chats/chat", values, {
      headers: { token },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getChatsApi = async (dispatch: Dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("token") as string);
    const response = await API.get("/chats", { headers: { token } });
    dispatch(getChat(response.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const getMessagesApi = async (dispatch: Dispatch, id: string) => {
  try {
    const token = JSON.parse(localStorage.getItem("token") as string);
    const response = await API.get(`/chats/${id}/messages`, {
      headers: { token },
    });

    dispatch(getMessages(response.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const newMessage = async (
  id: string,
  body: string,
  dispatch: Dispatch
) => {
  try {
    const token = JSON.parse(localStorage.getItem("token") as string);
    const newMessage = await API.post(
      `/chats/${id}/message`,
      { body: body },
      {
        headers: { token },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (dispatch: Dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("token") as string);
    const res = await API.get("/users", { headers: { token } });
    dispatch(getUserswithoutme(res.data.data));
    return res;
  } catch (error) {
    console.log(error);
  }
};
