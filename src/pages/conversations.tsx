import { useFormik } from "formik";
import { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  Image,
  InputGroup,
  ListGroup,
  Modal,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import ChatList from "../components/chatList";
import backgroundImg from "../images/bg-img.jpg";
import { getToken } from "../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { getUsers, newChatApi } from "../utils/api";

const Conversations = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logOut = () => {
    window.localStorage.clear();
    dispatch(getToken(""));
  };
  const users = useAppSelector((state) => state.users.users);

  const getAllUsers = async () => {
    await getUsers(dispatch);
  };

  const formik = useFormik({
    initialValues: {
      chatName: "",
      userIds: [] as number[],
    },
    onSubmit: (values) => {
      console.log(values);
      newChatApi(values);
      formik.resetForm();
    },
  });
  const addUser = (id: number) => {
    formik.values.userIds.push(id);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <div
        style={{ height: "60px", backgroundColor: "#f9f9f9", color: "grey" }}
        className="text-start ps-5 d-flex justify-content-between"
      >
        <h1>Chat</h1>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic"></Dropdown.Toggle>

          <Dropdown.Menu>
            <Button
              onClick={() => setSmShow(true)}
              className="mx-2 mb-2 "
              style={{ width: "100%" }}
            >
              Create Chat
            </Button>
            <Button
              onClick={() => logOut()}
              variant="dark"
              className="mx-2 mb-2"
              style={{ width: "100%" }}
            >
              logOut
            </Button>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Creating Chat
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
                  onClick={() => {
                    addUser(user.id);
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
