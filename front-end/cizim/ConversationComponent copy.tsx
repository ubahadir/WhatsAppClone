import styled from "styled-components";
import { Chat, Message, MessageType } from "../api/models";
import StyledConversationComponent from "../elements/StyledConversationComponent";
import moment from "moment";

const ConversationComponent = (props: any): JSX.Element => {
  // const { selectedChat, id, messages, people } = props;
  const { id, messages, people } = props;

  const MessageDiv = styled.div`
    justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
    justify-content: ${(isYours) => (isYours ? "flex-end" : "flex-start")};
    display: flex;
    margin: 5px 16px;
  `;

  const Message = styled.div`
    background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
    max-width: 50%;
    color: #303030;
    padding: 8px 10px;
    font-size: 19px;
  `;

  return (
    <StyledConversationComponent
    // messages={messages}
    // selectedChat={selectedChat}
    >
      <div className="Container">
        <div className="ProfileHeader">
          <img src="/profile/IMG_3464.jpg" className="ProfileImage" />
          {selectedChat.title}
        </div>
        <div className="MessageContainer">
          {messages.map((msgInfo) => (
            <MessageDiv
              key={msgInfo.id}
              id={msgInfo.name}
              isYours={msgInfo.name === "Abdullah Hoca"}
            >
              <Message
                key={msgInfo.id}
                id={msgInfo.name}
                isYours={msgInfo.name === "Abdullah Hoca"}
              ></Message>
              {msgInfo.name[0] === "1" ? <div>no</div> : msgInfo.message}
              {/* {userData.name === tutorial.name ? <div>id</div> : <div>yes</div>} */}
            </MessageDiv>
          ))}
        </div>
        <div className="ChatBox">
          <div className="SearchContainer">
            <img src={"/data.svg"} className="EmojiImage" />
            <input className="SearchInput" placeholder="Type a message" />
          </div>
        </div>
      </div>
    </StyledConversationComponent>
  );
};

export default ConversationComponent;
