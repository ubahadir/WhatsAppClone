import React from "react";
import Moment from "react-moment";
import moment from "moment";

import StyledChatItem from "../elements/StyledChatItem";
import Avatar from "./Avatar";

const ChatItem = (props: any): JSX.Element => {
  const { title, picture, lastMessage, onChatClick, _id, active } = props;
  const { content, createdAt } = lastMessage;
  const now: string = moment().format("D/MM/Y");
  const today: boolean = now === moment(createdAt).format("D/MM/Y");

  //   console.log("createdAt", createdAt);
  //   console.log("now", now);
  //   console.log("createdAt formated", moment(createdAt).format("D/MM/Y"));

  // Avatar kısmında tıklama fonksiyonu tanımlanıyor, bu daha sonra sırayla diğer componentlara tanımlanacak
  // ChatItem => Chatlist => Main'e componentına kadar gidip oradan => Right => Messageview componentine gelecek
  return (
    <StyledChatItem active={active} onClick={() => onChatClick(_id)}>
      <Avatar large avatar_url={picture} />
      <div className="chat--contentContainer">
        <div className="content--line1">
          <span className="content--line1__tile">{title}</span>
          <div className="content--line1__date">
            {today ? (
              <Moment format="HH:mm">{createdAt}</Moment>
            ) : (
              <Moment format="D/MM/Y">{createdAt}</Moment>
            )}
          </div>
        </div>
        <div className="content--line1">
          <span className="content--messasge">{content}</span>
          <div className="chat--badge">4</div>
        </div>
      </div>
    </StyledChatItem>
  );
};

export default ChatItem;
