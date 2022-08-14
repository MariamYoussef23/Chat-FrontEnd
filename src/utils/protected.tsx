import { useNavigate } from "react-router";
import Login from "../pages/login";
import { useAppSelector } from "../redux/hooks";
import { AuthState } from "../types";
import {Navigate } from 'react-router-dom'

const Protected = ({ children }: { children: any }) => {
  const token = useAppSelector((state) => state.auth.token);
  
  
  return <>{token !== "" ? children : <Navigate to="/login"/>}</>;
};

export default Protected;
