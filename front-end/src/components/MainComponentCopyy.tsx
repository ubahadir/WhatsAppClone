import React from "react";
import ContactListComponent from "./ContactListComponent";
import StyledMain from "../elements/StyledMain";
import Left from "./Left";
import Right from "./Right";
import _ from "lodash";
import ConversationComponent from "./ConversationComponent";
import { Chat } from "../api/models";
import TutorialService from "./TutorialService";
import { useState, useEffect } from "react";
import { dummyChats } from "../api/chats";

// import Right from "./Right"

const MainComponent = (props: any): JSX.Element => {
  const [messageVisible, setMessageVisible] = React.useState<boolean>(false);
  // const [selectedChat, setSelectedChat] = React.useState<Chat>({});
  const [messages, setMessages] = useState([]);
  const [people, setPerson] = useState([]);
  const [selectedChat, setSelectedChat] = React.useState<Chat>({});

  // const handleChatClick = (_id: string): void => {
  //   console.log("selected chat before", selectedChat);
  //   if (!messageVisible) {
  //     setMessageVisible(true);
  //   }
  //   const newChat: Chat = _.find(props.chats, { _id });
  //   console.log("selected chat after", newChat);
  //   setSelectedChat(newChat); //////////////////////////////////////////burada kaldın, selectedChat undefined
  // };

  const chats = dummyChats;
  console.log(selectedChat);

  useEffect(() => {
    retrievePeople();
    retrieveMessages();
  }, []);

  const retrievePeople = () => {
    TutorialService.getPerson()
      .then((response) => {
        setPerson(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveMessages = () => {
    TutorialService.getMessages() //TutorialData Service
      .then((response) => {
        setMessages(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function ChatItem(item) {
    console.log(item.name);
  }

  return (
    <StyledMain>
      <React.Fragment>
        <Left
          chats={chats}
          selectedChat={selectedChat}
          // onChatClick={handleChatClick}
        />
        <Right
          right
          messageVisible={messageVisible}
          selectedChat={selectedChat}
        />
      </React.Fragment>
    </StyledMain>
  );
};

export default MainComponent;
