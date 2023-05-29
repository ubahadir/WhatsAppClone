import styled from "styled-components";
import TutorialDataService from "./TutorialService";
import React, { useState, useEffect } from "react";
import StyledConversationComponent from "../elements/StyledConversationComponent";
import { contactList } from "../Data";
import TutorialService from "./TutorialService";

const ConversationComponent = (props: any): JSX.Element => {
  // const [messages, setMessages] = useState([]);

  const { selectedChat, id, messages, people } = props;

  // useEffect(() => {
  //   retrieveTutorials();
  // }, []);

  // const retrieveTutorials = () => {
  //   TutorialDataService.getMessages()
  //     .then((response) => {
  //       setMessages(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // const ConversationComponent = () => {

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

  // console.log(messages);
  // const personInf = people.map((person) => {+
  //   const name = person.name;
  //   console.log(name);
  //   return name;
  // });

  return (
    <StyledConversationComponent
    // messages={messages}
    // selectedChat={selectedChat}
    >
      <div className="Container">
        <div className="ProfileHeader">
          <img src="/profile/IMG_3464.jpg" className="ProfileImage" />
          Anubhav Sharma
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
