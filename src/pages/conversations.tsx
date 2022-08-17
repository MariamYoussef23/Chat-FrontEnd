import { Image } from "react-bootstrap";
import ChatList from "../components/chatList";
import backgroundImg from "../images/bg-img.jpg";

const Conversations = () => {
  
  return (
    <>
      <div
        style={{ height: "60px", backgroundColor: "#f9f9f9", color: "grey" }}
        className="text-start ps-5"
      >
        <h1>Chat</h1>
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
