import React from "react";
// import { Meteor } from "meteor/meteor";
import _ from "lodash";
import Day from "./Day";
import MessageText from "./MessageText";
import moment from "moment";
import FlipMove from "react-flip-move";

import StyledMessageBox from "../elements/StyledMessageBox";

let isEven: boolean = false;
const format: string = "D MMM Y";
let messagesEnd: HTMLDivElement;

const MessageBox = (props: any): JSX.Element => {
  const { selectedChat, messages } = props;
  //mesaj tablosu
  //mesajın kime ait olduğunu ayıklıyor
  messages.forEach((message) => {
    if (!message.senderId) {
      message.ownership = message.ownership === isEven ? "mine" : "other";
      isEven = !isEven;
      return message;
    } else {
      message.ownership =
        // message.senderId === Meteor.userId() ? "mine" : "other";
        message.senderId === "id1" ? "mine" : "other";
    }
  });
  // groupedMessages dictionary
  const groupedMessages: any = _.groupBy(messages, (message) => {
    return moment(message.createdAt).format(format);
  });
  //   console.log("groupedMessages", groupedMessages);
  const newMessages: any[] = Object.keys(groupedMessages).map((key) => {
    return {
      date: key,
      groupedMessages: groupedMessages[key],
      today: moment().format(format) === key,
    };
  });
  //   console.log("NewMessages", newMessages);
  //mesaja sınıf atanıyor (msgClass) ve MessageText propertyleri tanımlanıyor
  const renderMessages = (newMessage: any): JSX.Element[] => {
    return newMessage.groupedMessages.map((message) => {
      const msgClass: string = `message message--${message.ownership}`;
      return (
        <MessageText
          key={message._id}
          msgClass={msgClass}
          content={message.content}
          ownership={message.ownership}
          createdAt={message.createdAt}
        />
      );
    });
  };

  //scrolling, mesajı sayfaya sığdırma?
  const scrollToBottom = (): void => {
    messagesEnd.scrollIntoView({ behavior: "smooth" });
  };
  React.useEffect(() => {
    scrollToBottom();
  }, [selectedChat, messages]);

  const renderDays = (): JSX.Element[] => {
    return newMessages.map((newMessage, index: number) => {
      const dateText: string = newMessage.today ? "some" : newMessage.date;
      return (
        <div key={index}>
          <Day date={dateText} />
          {renderMessages(newMessage)}
        </div>
      );
    });
  };
  return (
    <StyledMessageBox>
      <FlipMove>{renderDays()}</FlipMove>
      <div ref={(el: HTMLDivElement) => (messagesEnd = el)}></div>
    </StyledMessageBox>
  );
};

export default MessageBox;
