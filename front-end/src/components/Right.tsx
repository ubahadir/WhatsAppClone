import React from "react";

import StyledRight from "../elements/StyledRight";
import RightImg from "./RightImg";
import MessageView from "./MessageView";

const messageText: string = "Whatsappa telefondan bağlanın";

const Right = (props: any): JSX.Element => {
  const { right, messageVisible, selectedChat } = props;
  return (
    <StyledRight>
      {messageVisible ? (
        <MessageView selectedChat={selectedChat} />
      ) : (
        <RightImg right={right} messageText={messageText} />
      )}
    </StyledRight>
  );
};

export default Right;
