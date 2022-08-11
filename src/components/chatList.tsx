import { useState } from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import user1 from "../images/user.jpg";

const ChatList = () => {
  const [users, setUsers] = useState([
    { img: `${user1}`, userName: "Mohamed", massage: "Good Morning" },
    { img: `${user1}`, userName: "Mohamed", massage: "Good Morning" },
    { img: `${user1}`, userName: "Mohamed", massage: "Good Morning" },
    { img: `${user1}`, userName: "Mohamed", massage: "Good Morning" },
    { img: `${user1}`, userName: "Mohamed", massage: "Good Morning" },
  ]);
  return (
    <>
      {users.map((ele) => (
        <Row
          className="p-3 m-2"
          style={{ width: "250px", background: "#eee" }}
          lg="2"
          md="2"
        >
          <Col lg="4" md="4">
            <Image
              src={ele.img}
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
          </Col>

          <Col lg="8" md="8">
            <h3>{ele.userName}</h3>
            <p style={{ fontSize: "20px" }}>{ele.massage}</p>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default ChatList;
