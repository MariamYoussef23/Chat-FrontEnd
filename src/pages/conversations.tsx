import { useFormik } from "formik";
import { useEffect, useState } from "react";
import {
  Button,
  Form,
  Image,
  InputGroup,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import ChatList from "../components/chatList";
import backgroundImg from "../images/bg-img.jpg";
import { useAppSelector } from "../redux/hooks";
import { User } from "../types";
import { getUsers, newChatApi } from "../utils/api";

const Conversations = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const dispatch = useDispatch();
  const users = useAppSelector((state) => state.users.users);

  const getAllUsers = async () => {
    await getUsers(dispatch);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  const formik = useFormik({
    initialValues: {
      chatName: "",
      userIds: "",
    },
    onSubmit: (values) => {
      newChatApi(values);
      formik.resetForm();
    },
  });

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
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">
                Chat Name
              </InputGroup.Text>
              <Form.Control
                type="text"
                name="chatName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.chatName}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <ListGroup>
              {users.map((user, idx) => (
                <ListGroup.Item
                  onChange={formik.handleChange}
                  onClick={(e) => {
                    let value: any = formik.values.userIds;
                    value = user.id;
                    console.log(value);
                  }}
                >
                  {user.email}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Modal.Body>
          <Button onClick={() => formik.handleSubmit()} variant="secondary">
            Submit
          </Button>
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
