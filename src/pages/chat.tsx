import { Col, Container, Row } from "react-bootstrap";
import bgImage from "../images/bg-img.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getMessagesApi } from "../utils/api";
import React, { useEffect } from "react";
import { Message } from "../types";

const Chat = () => {
  const {id} = useParams()
  console.log(id)
  const messages = useAppSelector((state) => state.messages.messages);
  const dispatch = useAppDispatch()
  console.log(messages)

  useEffect(() => {
    getMessagesApi(dispatch, id as unknown as number)
  },[])
    
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
              {messages.map((message: Message) => (
                <Row key={message.id} lg="1" md='1' className={
                  message.user.email == "Salma"
                    ? "justify-content-end d-flex mt-3"
                    : "justify-content-start d-flex mt-3"
                }>
                  <Col lg="7" md="7"
                    
                    style = {{backgroundColor: 'white'}}
                  >
                    <div>{message.user.firstName}</div>
                    <div>{message.body}</div>
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
