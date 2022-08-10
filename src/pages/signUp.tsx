import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { SignUpForm } from "../components/signUpForm";
import SignUpImage from "../images/sign-up-img.jpg";


const SignUp = () => {
  return (
    <>
    <div style={{ height: "60px", backgroundColor: "#f9f9f9", color:"grey" }}>
        <h1>
        SignUp
        </h1>
      </div>
    <Row style={{ backgroundColor: "#D3D3D3" }}>
      <Col
        className="logo min-vh-100"
        style={{
          backgroundImage: `url(${SignUpImage}`,
          backgroundSize: "cover ",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      ></Col>
      <Col className="d-flex justify-content-center align-items-center">
        <SignUpForm />
      </Col>
    </Row>
    </>
  );
};

export default SignUp;
