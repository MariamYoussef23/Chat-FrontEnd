import Login from "../pages/login";
import { useAppSelector } from "../redux/hooks";
import { AuthState } from "../types";

const Protected = ({ children }: { children: any }) => {
  const token = useAppSelector((state) => state.auth.token);
  
  return <>{token !== "" ? children : <Login />}</>;
};

export default Protected;
