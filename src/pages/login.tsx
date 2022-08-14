import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import loginImg from "../images/login-img.jpg";
import LoginForm from "../components/loginForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Login = () => { 
  return (
    <>
      <div
        style={{ height: "60px", backgroundColor: "#f9f9f9", color: "grey" }}
      >
        <h1>Login</h1>
      </div>
      <Row style={{ backgroundColor: "#D3D3D3" }}>
        <Col
          className="logo min-vh-100"
          style={{
            backgroundImage: `url(${loginImg}`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        ></Col>
        <Col className="d-flex justify-content-center align-items-center">
          <LoginForm />
        </Col>
      </Row>
    </>
  );
};

export default Login;
