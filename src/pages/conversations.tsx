import { useState } from "react";
import { Button, Form, Image, InputGroup, Modal } from "react-bootstrap";
import ChatList from "../components/chatList";
import backgroundImg from "../images/bg-img.jpg";

const Conversations = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div
        style={{ height: "60px", backgroundColor: "#f9f9f9", color: "grey" }}
        className="text-start ps-5"
      >
        <h1>Chat</h1>
        <Button onClick={() => setSmShow(true)} className="me-2">
          Small modal
        </Button>
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        
        >
          <Modal.Header
           closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Chat Name</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <br />
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">test</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </Modal.Body>
          <Button variant="secondary">Submit</Button>
        </Modal>
      </div>

      <div
        className="logo min-vh-100"
        style={{
          backgroundImage: `url(${backgroundImg}`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="pchat">
          <ChatList />
        </div>
      </div>
    </>
  );
};
export default Conversations;
