import { Col, Container, Row } from "react-bootstrap";
import bgImage from "../images/bg-img.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

const Chat = () => {
  const [users, setUsers] = useState([
    { name: "Mohamed", message: "Good Morning" },
    { name: "salma",message: "Heyyy" },
    { name: "Mohamed", message: "Wanna hang out later?" },
    {
      name: "Salma",
      message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
    { name: "Mohamed", message: "Got it. " },
  ]);
  return (
    <>
      <div
        style={{ height: "60px", backgroundColor: "#f9f9f9", color: "grey" }}
        className="text-start ps-5"
      >
        <h1>Chat</h1>
      </div>
      <div
        style={{
          backgroundImage: `url(${bgImage}`,
          backgroundSize: "cover ",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
        className="min-vh-100"
      >
        <Container>
          <Card className="min-vh-100">
            <Card.Body style={{backgroundColor: "#EEE"}}>
              {users.map((user) => (
                <Row lg="1" md='1' className={
                  user.name == "Salma"
                    ? "justify-content-end d-flex mt-3"
                    : "justify-content-start d-flex mt-3"
                }>
                  <Col lg="7" md="7"
                    
                    style = {{backgroundColor: 'white'}}
                  >
                    <div>{user.name}</div>
                    <div>{user.message}</div>
                    <span style={{float: "right"}}>7:02 pm</span>
                  </Col>
                </Row>
              ))}
            </Card.Body>
            <Card.Footer>
              <Form.Group
                className="mb-3 d-flex justify-content-between"
                controlId="message"
              >
                <Form.Control as="textarea" type="message" />
                <Button variant="dark" type="submit" className='ms-2'>
                  Send
                </Button>
              </Form.Group>
            </Card.Footer>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Chat;
