import React from "react";
// import { ChatsCollection } from "../api/chats";

import { Chat } from "../api/models";
import StyledChatList from "../elements/StyledChatlist";
import ChatItem from "./ChatItem";

const ChatList = (props: any): JSX.Element => {
  const { chats, onChatClick, selectedChat } = props;
  const renderChats = (): JSX.Element[] => {
    return chats.map((chat: Chat) => {
      const active: boolean = selectedChat._id === chat._id;
      return (
        <ChatItem
          key={chat._id}
          {...chat}
          onChatClick={onChatClick}
          active={active}
        />
      );
    });
  };
  return <StyledChatList>{renderChats()}</StyledChatList>;
};

export default ChatList;
