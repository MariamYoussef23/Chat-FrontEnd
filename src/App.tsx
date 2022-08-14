import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Conversations from "./pages/conversations";
import Chat from "./pages/chat";
import "./App.css";
import Protected from "./utils/protected";
import { useAppSelector } from "./redux/hooks";

function App() {
  
  return (
  
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
