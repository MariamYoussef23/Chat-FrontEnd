import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Conversations from "./pages/conversations";
import Chat from "./pages/chat";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/conversations" element={<Conversations />}/>
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
