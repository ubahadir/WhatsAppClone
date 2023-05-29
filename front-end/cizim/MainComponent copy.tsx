import React from "react";
import ContactListComponent from "./ContactListComponent";
import styled from "styled-components";
import StyledMain from "../elements/StyledMain";
import Left from "./Left";
import Right from "./Right";
import Login from "./Login";
import _ from "lodash";
import ConversationComponent from "./ConversationComponent";
import { Chat } from "../api/models";
import TutorialDataService from "./TutorialService";
import { useState, useEffect } from "react";
import ChatItem from "./ChatItem";
import { messagesList } from "../Data";

// import Right from "./Right"

const MainComponent = (props: any): JSX.Element => {
  const [messageVisible, setMessageVisible] = React.useState<boolean>(false);
  const [selectedChat, setSelectedChat] = React.useState<Chat>({});
  const [messages, setMessages] = useState([]);
  const [people, setPerson] = useState([]);

  useEffect(() => {
    retrievePeople();
    retrieveMessages();
  }, []);

  const retrievePeople = () => {
    TutorialDataService.getPerson()
      .then((response) => {
        setPerson(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveMessages = () => {
    TutorialDataService.getMessages()
      .then((response) => {
        setMessages(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // function ChatItem(item) {
  //   if (item.name == "Babam") {
  //     return true;
  //   }
  // }
  function ChatItem(item) {
    console.log(item.name);
  }

  // messages.map((message) => ChatItem(message));

  // const newChat = _.find(
  //   messages,
  //   messages.map((message) => ChatItem(message))
  // );

  const handleChatClick = (_id: string): void => {
    if (!messageVisible) {
      setMessageVisible(true);
    } else {
      setMessageVisible(false);
    }
  };

  return (
    <StyledMain>
      <React.Fragment>
        <ContactListComponent
          chats={props.chats}
          onChatClick={handleChatClick}
          messages={messages}
          people={people}
          selectedChat={selectedChat}
        />
        {messageVisible ? (
          <ConversationComponent
            selectedChat={selectedChat}
            // userData={Data}
            messages={messages}
            people={people}
            id={"2"}
          />
        ) : (
          <Login id={"1"} />
        )}
      </React.Fragment>
    </StyledMain>
  );
};

export default MainComponent;
