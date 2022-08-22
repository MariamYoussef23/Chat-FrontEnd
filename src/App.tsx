import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Conversations from "./pages/conversations";
import Chat from "./pages/chat";
import "./App.css";
import Protected from "./utils/protected";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

import { getChatsApi } from "./utils/api";

function App() {
  
  const [socket, setSocket] = useState<Socket>();
  useEffect(() => {
    setSocket(io("http://localhost:1212"));
  }, []);

  
  // socket?.on("hello from server", () => {
  //   console.log("frontend works");
  // });

  // socket.on("connect", () => {
  //   socket.on("hello from server", () => {
  //     console.log("frontend works");
  //   });
  // });

  const token = useAppSelector((state) => state.auth.token);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={token !== "" ? <Navigate to="/" /> : <Login socket={socket!}/>}
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/signup"
          element={token !== "" ? <Navigate to="/" /> : <SignUp  socket={socket!}/>}
        />
        <Route
          path="/"
          element={
            <Protected>
              <Conversations />
            </Protected>
          }
        />
        <Route
          path="/chat/:id"
          element={
            <Protected>
              <Chat socket={socket!}/>
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
