import { Image } from "react-bootstrap";
import ChatList from "../components/chatList";
import backgroundImg from "../images/bg-img.jpg";

const Conversations = () => {
  return (
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
  );
};
export default Conversations;
