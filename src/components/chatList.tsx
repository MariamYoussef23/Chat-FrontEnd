import React, { useEffect } from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Chat } from "../types";
import { getChatsApi } from "../utils/api";

const ChatList = () => {
  const chatList = useAppSelector((state) => state.chats.chats);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    getChatsApi(dispatch)
  },[])
  
  return (
    <>
      {chatList.map((chat: Chat) => (
        
        <Row key ={chat.id}
          className="p-3 m-2"
          style={{ width: "250px", background: "#eee" }}
          lg="2"
          md="2"
          onClick={()=>{
            navigate(`/chat/${chat.id}`)
          }}
        >
          <Col lg="4" md="4">
            <Image
              src={chat.ChatImgURL}
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
          </Col>

          <Col lg="8" md="8">
            <h3>{chat.chatName}</h3>
            <p style={{ fontSize: "20px" }}>let's chat</p>
          </Col>
        </Row>
        
      ))}
    </>
  );
};

export default ChatList;
