import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Conversations from "./pages/conversations";
import Chat from "./pages/chat";
import "./App.css";
import Protected from "./utils/protected";
import { useAppSelector } from "./redux/hooks";
import React from "react";

function App() {
  const token = useAppSelector((state) => state.auth.token);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={token !== "" ? <Navigate to="/" /> : <Login />}
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={token !== "" ? <Navigate to="/" /> : <SignUp />} />
        <Route
          path="/"
          element={
            <Protected>
              <Conversations />
            </Protected>
          }
        />
        <Route
          path="/chat"
          element={
            <Protected>
              <Chat />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
