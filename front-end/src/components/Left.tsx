import React from "react";
// import { Meteor } from "meteor/meteor";

import StyledLeft from "../elements/StyledLeft";
import Header from "./Header";
import Avatar from "./Avatar";
import Status from "./Status";
import Searchbar from "./Searchbar";
import ChatList from "./ChatList";
import TutorialDataService from "./TutorialService";
// import LeftSide from "./LeftSide";

const icons: string[] = ["circle-notch", "comment-alt", "ellipsis-v"];

const Left = (props: any): JSX.Element => {
  const { chats, onChatClick, selectedChat, messages, people } = props;

  return (
    <StyledLeft>
      <Header icons={icons} iconClass="greyIcon">
        <Avatar />
      </Header>
      <Status />
      <Searchbar />
      <ChatList
        chats={chats}
        onChatClick={onChatClick}
        selectedChat={selectedChat}
      />
    </StyledLeft>
  );
};

export default Left;
